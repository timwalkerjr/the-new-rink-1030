export const SITE = {
  name: 'The New Rink',
  title: 'The New Rink | Roller Sports Complex in Shelby TWP, MI',
  description:
    'Enjoy a night out with the family, friends, co-workers, just about anyone that needs a night of good fun. We have many amenities for you to enjoy.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://example.com',
  twitterHandle: '',
  socials: {},
} as const;

export type SiteConfig = typeof SITE;
