import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DashboardScreen from './DashboardScreen';
import VehiclesScreen from './VehiclesScreen';
import ProfileScreen from './ProfileScreen';
import RanksScreen from './RanksScreen';
import MapScreen from './MapScreen';
import JourneyAchievementsScreen from './JourneyAchievementsScreen';
import AddVehicleScreen from './AddVehicleScreen';
import PersonIdentityScreen from './PersonIdentityScreen';
import GreenSelfieScreen from './GreenSelfieScreen';
import RashiVanScreen from './RashiVanScreen';
import NewsScreen from './NewsScreen';
import SupportScreen from './SupportScreen';
import MitraScreen from './MitraScreen';
import OfferLandScreen from './OfferLandScreen';
import AboutInitiativeScreen from './AboutInitiativeScreen';
import AdminPreviewScreen from './AdminPreviewScreen';
import VehicleDetailScreen from './VehicleDetailScreen';
import BottomNav from '../components/BottomNav';
import {
  AddedVehicle,
  createVehicleFromAdded,
  INITIAL_VEHICLES,
  Vehicle,
} from '../data/vehiclesData';

interface MainLayoutProps {
  onLogout: () => void;
}

type Tab = 'home' | 'vehicles' | 'map' | 'ranks' | 'profile';

type OverlayScreen =
  | 'journey'
  | 'addVehicle'
  | 'identity'
  | 'greenSelfie'
  | 'rashiVan'
  | 'news'
  | 'support'
  | 'mitra'
  | 'offerLand'
  | 'aboutInitiative'
  | 'adminPreview'
  | 'vehicleDetail';

export default function MainLayout({ onLogout }: MainLayoutProps) {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [overlay, setOverlay] = useState<OverlayScreen | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[]>(INITIAL_VEHICLES);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const closeOverlay = () => {
    setOverlay(null);
    setSelectedVehicle(null);
  };
  const openAddVehicle = () => setOverlay('addVehicle');
  const openVehicleDetail = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setOverlay('vehicleDetail');
  };

  const registerVehicle = (added: AddedVehicle) => {
    setVehicles(prev => {
      const normalized = added.plate.replace(/\s/g, '').toUpperCase();
      const exists = prev.some(
        v => v.plate.replace(/\s/g, '').toUpperCase() === normalized,
      );
      if (exists) {
        return prev;
      }
      return [...prev, createVehicleFromAdded(added)];
    });
  };

  const handleAddVehicleComplete = () => {
    closeOverlay();
    setActiveTab('vehicles');
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return (
          <DashboardScreen
            vehicles={vehicles}
            onViewJourney={() => setOverlay('journey')}
            onAddVehicle={openAddVehicle}
            onMyIdentity={() => setOverlay('identity')}
            onGreenSelfie={() => setOverlay('greenSelfie')}
            onRashiVan={() => setOverlay('rashiVan')}
            onNews={() => setOverlay('news')}
            onSupport={() => setOverlay('support')}
            onMitra={() => setOverlay('mitra')}
            onOfferLand={() => setOverlay('offerLand')}
            onAboutInitiative={() => setOverlay('aboutInitiative')}
            onAdminPreview={() => setOverlay('adminPreview')}
          />
        );
      case 'vehicles':
        return (
          <VehiclesScreen
            vehicles={vehicles}
            onAddVehicle={openAddVehicle}
            onViewDetails={openVehicleDetail}
          />
        );
      case 'map':
        return <MapScreen />;
      case 'ranks':
        return <RanksScreen />;
      case 'profile':
        return (
          <ProfileScreen
            vehicles={vehicles}
            onLogout={onLogout}
            onMyVehicles={() => setActiveTab('vehicles')}
            onVehicleIdentity={() => setOverlay('identity')}
            onRashiVan={() => setOverlay('rashiVan')}
            onAdminPreview={() => setOverlay('adminPreview')}
          />
        );
      default:
        return (
          <DashboardScreen
            vehicles={vehicles}
            onViewJourney={() => setOverlay('journey')}
            onAddVehicle={openAddVehicle}
            onMyIdentity={() => setOverlay('identity')}
            onGreenSelfie={() => setOverlay('greenSelfie')}
            onRashiVan={() => setOverlay('rashiVan')}
            onNews={() => setOverlay('news')}
            onSupport={() => setOverlay('support')}
            onMitra={() => setOverlay('mitra')}
            onOfferLand={() => setOverlay('offerLand')}
            onAboutInitiative={() => setOverlay('aboutInitiative')}
            onAdminPreview={() => setOverlay('adminPreview')}
          />
        );
    }
  };

  const renderOverlay = () => {
    switch (overlay) {
      case 'vehicleDetail':
        return selectedVehicle ? (
          <VehicleDetailScreen
            vehicle={selectedVehicle}
            onBack={closeOverlay}
          />
        ) : null;
      case 'adminPreview':
        return <AdminPreviewScreen onBack={closeOverlay} />;
      case 'aboutInitiative':
        return (
          <AboutInitiativeScreen
            onBack={closeOverlay}
            onViewJourney={() => setOverlay('journey')}
          />
        );
      case 'offerLand':
        return <OfferLandScreen onBack={closeOverlay} />;
      case 'mitra':
        return <MitraScreen onBack={closeOverlay} />;
      case 'support':
        return <SupportScreen onBack={closeOverlay} />;
      case 'news':
        return <NewsScreen onBack={closeOverlay} />;
      case 'rashiVan':
        return <RashiVanScreen onBack={closeOverlay} />;
      case 'greenSelfie':
        return <GreenSelfieScreen onBack={closeOverlay} />;
      case 'identity':
        return <PersonIdentityScreen onBack={closeOverlay} />;
      case 'addVehicle':
        return (
          <AddVehicleScreen
            onBack={closeOverlay}
            onRegisterVehicle={registerVehicle}
            onComplete={handleAddVehicleComplete}
          />
        );
      case 'journey':
        return <JourneyAchievementsScreen onBack={closeOverlay} />;
      default:
        return null;
    }
  };

  if (overlay) {
    return <View style={styles.root}>{renderOverlay()}</View>;
  }

  return (
    <View style={styles.root}>
      {renderScreen()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f4f9f4',
  },
});
