export type MapTreeType = 'Peepal' | 'Neem' | 'Banyan' | 'Mango';

export type MapTree = {
  id: number;
  type: MapTreeType;
  top: number;
  left: number;
  zIndex?: number;
};

export const MAP_TREES: MapTree[] = [
  { id: 1, type: 'Peepal', top: 158, left: 24, zIndex: 2 },
  { id: 2, type: 'Peepal', top: 148, left: 52, zIndex: 3 },
  { id: 3, type: 'Peepal', top: 142, left: 148, zIndex: 2 },
  { id: 4, type: 'Neem', top: 168, left: 208, zIndex: 2 },
  { id: 5, type: 'Peepal', top: 118, left: 268, zIndex: 2 },
  { id: 6, type: 'Neem', top: 198, left: 118, zIndex: 2 },
  { id: 7, type: 'Mango', top: 228, left: 292, zIndex: 3 },
  { id: 8, type: 'Peepal', top: 268, left: 38, zIndex: 2 },
  { id: 9, type: 'Neem', top: 288, left: 88, zIndex: 2 },
  { id: 10, type: 'Banyan', top: 318, left: 268, zIndex: 3 },
  { id: 11, type: 'Neem', top: 338, left: 248, zIndex: 4 },
  { id: 12, type: 'Peepal', top: 378, left: 58, zIndex: 2 },
  { id: 13, type: 'Mango', top: 398, left: 128, zIndex: 2 },
  { id: 14, type: 'Neem', top: 248, left: 228, zIndex: 2 },
  { id: 15, type: 'Peepal', top: 208, left: 178, zIndex: 2 },
  { id: 16, type: 'Banyan', top: 428, left: 298, zIndex: 2 },
  { id: 17, type: 'Peepal', top: 188, left: 318, zIndex: 2 },
  { id: 18, type: 'Neem', top: 348, left: 168, zIndex: 2 },
  { id: 19, type: 'Mango', top: 308, left: 318, zIndex: 2 },
  { id: 20, type: 'Peepal', top: 428, left: 198, zIndex: 2 },
  { id: 21, type: 'Neem', top: 128, left: 98, zIndex: 2 },
  { id: 22, type: 'Banyan', top: 358, left: 48, zIndex: 2 },
  { id: 23, type: 'Peepal', top: 458, left: 248, zIndex: 2 },
  { id: 24, type: 'Mango', top: 468, left: 88, zIndex: 2 },
];

export function getMapTreeCount(trees: MapTree[] = MAP_TREES) {
  return trees.length;
}
