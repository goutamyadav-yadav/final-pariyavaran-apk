import { Vehicle } from './vehiclesData';

export type AssignedTree = {
  id: string;
  name: string;
  treeId: string;
  plantedDate: string;
  status: 'Excellent' | 'Good';
  location: string;
  height: string;
  co2: string;
  progress: number;
  imageUrl: string;
  months: string[];
};

export type VehicleDetailInfo = {
  owner: string;
  insurance: string;
  rto: string;
  assignedTrees: AssignedTree[];
};

const DEFAULT_TREES: AssignedTree[] = [
  {
    id: '1',
    name: 'Peepal',
    treeId: 'PP-IND-00241',
    plantedDate: '21 Aug 2024',
    status: 'Excellent',
    location: 'Bhamori, Indore',
    height: '1.9m',
    co2: '28kg CO₂',
    progress: 0.85,
    imageUrl:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&h=200&fit=crop',
    months: ['Sep', 'Oct', 'Nov', 'Dec'],
  },
  {
    id: '2',
    name: 'Neem',
    treeId: 'PP-IND-00318',
    plantedDate: '04 Oct 2024',
    status: 'Good',
    location: 'Rau, Indore',
    height: '1.4m',
    co2: '18kg CO₂',
    progress: 0.65,
    imageUrl:
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=200&h=200&fit=crop',
    months: ['Oct', 'Nov', 'Dec', 'Jan'],
  },
  {
    id: '3',
    name: 'Ashoka',
    treeId: 'PP-IND-00612',
    plantedDate: '26 Feb 2025',
    status: 'Good',
    location: 'Sanwer Road, Indore',
    height: '1.1m',
    co2: '12kg CO₂',
    progress: 0.5,
    imageUrl:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=200&fit=crop',
    months: ['Mar', 'Apr', 'May', 'Jun'],
  },
];

const VEHICLE_DETAILS: Record<string, Partial<VehicleDetailInfo>> = {
  'VH-IND-2026-00045': {
    owner: 'Rahul Sharma',
    insurance: 'ShieldSure General',
    rto: 'Indore, Madhya Pradesh',
    assignedTrees: DEFAULT_TREES,
  },
  'VH-IND-2026-00088': {
    owner: 'Rahul Sharma',
    insurance: 'ICICI Lombard',
    rto: 'Indore, Madhya Pradesh',
    assignedTrees: DEFAULT_TREES.slice(0, 2),
  },
};

export function getVehicleDetailInfo(vehicle: Vehicle): VehicleDetailInfo {
  const specific = VEHICLE_DETAILS[vehicle.vhId];
  return {
    owner: specific?.owner ?? 'Rahul Sharma',
    insurance: specific?.insurance ?? 'ShieldSure General',
    rto: specific?.rto ?? 'Indore, Madhya Pradesh',
    assignedTrees:
      specific?.assignedTrees ??
      DEFAULT_TREES.slice(0, Math.min(vehicle.trees, 3)),
  };
}
