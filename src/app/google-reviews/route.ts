import { NextResponse } from 'next/server';

export interface GoogleReview {
  authorName: string;
  authorPhoto?: string;
  rating: number;
  relativeTime: string;
  text: string;
  originalUrl?: string;
  reviewPhotoUrl?: string;
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      {
        status: 'OFFLINE',
        reviews: [],
        message: 'Google Places API Key หรือ Place ID ยังไม่ได้ตั้งค่าใน Environment Variables',
      },
      { status: 200 }
    );
  }

  try {
    // ดึงข้อมูลผ่าน Google Places API (New)
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=id,displayName,rating,userRatingCount,reviews&languageCode=th`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews',
      },
      next: { revalidate: 3600 }, // แคชข้อมูลไว้ 1 ชั่วโมงเพื่อประหยัด Quota
    });

    if (!response.ok) {
      throw new Error(`Google API returned status ${response.status}`);
    }

    const data = await response.json();
    
    const formattedReviews: GoogleReview[] = (data.reviews || []).map((rev: any) => ({
      authorName: rev.authorAttribution?.displayName || 'ผู้ใช้ Google Maps',
      authorPhoto: rev.authorAttribution?.photoUri,
      rating: rev.rating || 5,
      relativeTime: rev.relativePublishTimeDescription || 'ล่าสุด',
      text: rev.originalText?.text || rev.text?.text || '',
      originalUrl: rev.authorAttribution?.uri,
    }));

    return NextResponse.json({
      status: 'OK',
      rating: data.rating || 5.0,
      userRatingCount: data.userRatingCount || 0,
      reviews: formattedReviews,
    });
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return NextResponse.json(
      {
        status: 'ERROR',
        reviews: [],
        message: 'ไม่สามารถดึงข้อมูลจาก Google Places API ได้ในขณะนี้',
      },
      { status: 500 }
    );
  }
}