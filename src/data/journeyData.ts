export type AchievementType =
  | 'recognition'
  | 'award'
  | 'record'
  | 'doctorate'
  | 'international';

export type Achievement = {
  id: string;
  year: string;
  type: AchievementType;
  title: string;
  subtitle: string;
  imageUrl?: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    year: '2002',
    type: 'recognition',
    title: 'State Level Farmer Recognition',
    subtitle: 'Government of Madhya Pradesh',
  },
  {
    id: '2',
    year: '2003',
    type: 'recognition',
    title: 'District Level Environmental Award',
    subtitle: 'Government of Madhya Pradesh',
  },
  {
    id: '3',
    year: '2011',
    type: 'award',
    title: 'Sarvottam Krishak Puraskar',
    subtitle: 'Jaiv Praudyogiki Vibhag MP',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop',
  },
  {
    id: '4',
    year: '2012',
    type: 'award',
    title: 'Shrestha Jaiv Vividhta Udyan Puraskar',
    subtitle: 'Jaiv Praudyogiki Vibhag MP',
    imageUrl:
      'https://images.unsplash.com/photo-1521737711868-e979b3811b40?w=600&h=400&fit=crop',
  },
  {
    id: '5',
    year: '2015',
    type: 'record',
    title: 'Golden Book of World Records',
    subtitle: 'Golden Book of World Records',
    imageUrl:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
  },
  {
    id: '6',
    year: '2016',
    type: 'recognition',
    title: 'Pandit Deendayal Upadhyay Alankaran',
    subtitle: 'Jan Jagran Vichar Manch, Dhar',
    imageUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
  },
  {
    id: '7',
    year: '2017',
    type: 'award',
    title: 'Jagjivan Ram Innovative Farmer Award',
    subtitle: 'ICAR · Government of India',
    imageUrl:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop',
  },
  {
    id: '8',
    year: '2017',
    type: 'record',
    title: 'Most Trees Planted by an Individual',
    subtitle: 'World Record Book of India',
    imageUrl:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
  },
  {
    id: '9',
    year: '2018',
    type: 'doctorate',
    title: 'Honorary Doctorate in Environmental Science',
    subtitle: 'Dr. Harisingh Gour University, Sagar',
    imageUrl:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
  },
  {
    id: '10',
    year: '2018',
    type: 'international',
    title: 'Indo Global Education Excellence Award',
    subtitle: 'Indo Global Chamber of Commerce',
    imageUrl:
      'https://images.unsplash.com/photo-1521737711868-e979b3811b40?w=600&h=400&fit=crop',
  },
  {
    id: '11',
    year: '2018',
    type: 'recognition',
    title: 'Jungle Ratna Award',
    subtitle: 'NABARD',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop',
  },
  {
    id: '12',
    year: '2020',
    type: 'recognition',
    title: "Felicitation by Hon'ble Smt. Uma Bharti",
    subtitle: 'Former Union Minister',
    imageUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
  },
];

export const PROFILE_STATS = [
  { value: '1,00,000+', label: 'Trees Planted' },
  { value: '3', label: 'World Records' },
  { value: '30+', label: 'Awards Received' },
  { value: '25+', label: 'Years of Service' },
];

export const PROFILE_TAGS = [
  'Environmentalist',
  'Biodiversity Expert',
  'Farmer Innovator',
  'Social Reformer',
  'World Record Holder',
];

export const INSPIRATION_TEXT =
  'Paryavaran Prahri is inspired by the lifelong dedication of Dr. Ram Patidar towards environmental conservation, biodiversity protection, and community participation. His work in plantation, farmer innovation, and social reform continues to guide the vision of Mission 2047 and Net Zero Bharat.';
