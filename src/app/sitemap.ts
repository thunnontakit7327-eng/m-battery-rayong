import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { articlesList } from '@/config/articles';
import { serviceAreas } from '@/config/areas';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  const staticPages = [
    '',
    '/mobile-car-battery-replacement',
    '/car-batteries',
    '/service-areas',
    '/articles',
    '/contact',
    '/privacy-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const articlePages = articlesList.map((art) => ({
    url: `${baseUrl}/articles/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const areaPages = serviceAreas.map((a) => ({
    url: `${baseUrl}/service-areas/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...areaPages, ...articlePages];
}