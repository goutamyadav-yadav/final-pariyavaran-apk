export type NewsTag =
  | 'Mission 2047'
  | 'Plantation'
  | 'Government'
  | 'Environment'
  | 'Media';

export type NewsItem = {
  id: string;
  icon: string;
  tag: NewsTag;
  timeAgo: string;
  title: string;
  description: string;
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    icon: '🚩',
    tag: 'Mission 2047',
    timeAgo: '2h ago',
    title: 'Indore pilots vehicle-linked plantation across 9 Vidhan Sabhas',
    description:
      'Paryavaran Prahri launches in Indore covering Rau, Sanwer, Mhow, Depalpur and 5 city constituencies.',
  },
  {
    id: '2',
    icon: '🌱',
    tag: 'Plantation',
    timeAgo: '1d ago',
    title: '12,400 saplings planted in monsoon drive — Rau Vidhan Sabha leads',
    description:
      'Citizens, RWAs and the district administration completed a coordinated weekend drive.',
  },
  {
    id: '3',
    icon: '📢',
    tag: 'Government',
    timeAgo: '2d ago',
    title: 'MP announces incentives for vehicles with verified tree IDs',
    description:
      'Verified vehicle tree IDs may receive priority RTO services and insurance discounts.',
  },
  {
    id: '4',
    icon: '📰',
    tag: 'Environment',
    timeAgo: '3d ago',
    title: "Why Indore's air is improving: a five-year story",
    description:
      "Tree canopy across the city has grown 18% — vehicle-linked plantations are accelerating the trend.",
  },
  {
    id: '5',
    icon: '📺',
    tag: 'Media',
    timeAgo: '4d ago',
    title: 'Dr. Ram Patidar Ji featured on national broadcast for Net Zero work',
    description:
      'Coverage highlights the world-record plantation and civic mobilisation strategy.',
  },
  {
    id: '6',
    icon: '🚩',
    tag: 'Mission 2047',
    timeAgo: '1w ago',
    title: 'Smart-City dashboard to surface live constituency rankings',
    description:
      'Vidhan-Sabha-wise leaderboards will be public from next quarter.',
  },
  {
    id: '7',
    icon: '🌱',
    tag: 'Plantation',
    timeAgo: '1w ago',
    title: 'Rashi Van expansion: 12 zodiac groves opened in Mhow',
    description:
      'Citizens can adopt astrology-aligned trees from their birth-rashi.',
  },
  {
    id: '8',
    icon: '📢',
    tag: 'Government',
    timeAgo: '2w ago',
    title: 'Indore Collector inaugurates Paryavaran Mitra volunteer program',
    description:
      'Free volunteer and premium tiers open for civic enrolment.',
  },
];

export const TAG_STYLES: Record<
  NewsTag,
  { bg: string; text: string }
> = {
  'Mission 2047': { bg: '#fff3e0', text: '#e65100' },
  Plantation: { bg: '#e8f5e9', text: '#2e7d32' },
  Government: { bg: '#e3f2fd', text: '#1565c0' },
  Environment: { bg: '#e8f5e9', text: '#1b5e20' },
  Media: { bg: '#fff3e0', text: '#bf360c' },
};
