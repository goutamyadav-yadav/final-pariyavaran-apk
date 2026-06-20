import { IconName } from '../components/AppIcon';
import { Vehicle } from '../data/vehiclesData';

export function getVehicleIconName(
  vehicle: Pick<Vehicle, 'fuel' | 'name'>,
): IconName {
  const name = vehicle.name.toLowerCase();

  if (vehicle.fuel === 'Electric' || vehicle.fuel === 'EV') {
    return 'car-electric';
  }
  if (name.includes('thar') || name.includes('van')) {
    return 'car-pickup';
  }
  return 'car-side';
}
