import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIcon from '../components/AppIcon';
import { getBottomInset, getTopInset } from '../utils/layout';

type Props = {
  onBack: () => void;
};

const LINKED_VEHICLES = [
  {
    id: '1',
    name: 'Land Rover Defender 110',
    meta: 'MP09 CX 4521 · Diesel',
    icon: 'car-side' as const,
  },
  {
    id: '2',
    name: 'Mahindra Thar',
    meta: 'MP09 KK 8810 · Diesel',
    icon: 'car-pickup' as const,
  },
];

const IDENTITY_GRID = [
  { label: 'ADDRESS', value: 'Indore, Madhya Pradesh' },
  { label: 'VIDHAN SABHA', value: 'Rau' },
  { label: 'LINKED VEHICLES', value: '2' },
  { label: 'TREES ASSIGNED', value: '24' },
  { label: 'CO₂ OFFSET', value: '312 kg' },
  { label: 'JOINED', value: '12 Aug 2024' },
];

export default function PersonIdentityScreen({ onBack }: Props) {
  return (
    <View style={styles.root}>
      <View style={[styles.header, { paddingTop: getTopInset(10) }]}>
        <Pressable style={styles.headerBtn} onPress={onBack}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Person Identity</Text>
          <Text style={styles.headerSubtitle}>Citizen-centric eco identity</Text>
        </View>
        <Pressable style={styles.headerBtn}>
          <AppIcon name="bell-outline" size={20} color="#0a3617" />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: getBottomInset(32) },
        ]}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#f27e20', '#2bb373']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.idCardBorder}>
          <View style={styles.idCard}>
            <View style={styles.idCardHeader}>
              <View style={styles.idBrandRow}>
                <View style={styles.inLogo}>
                  <Text style={styles.inLogoText}>IN</Text>
                </View>
                <View>
                  <Text style={styles.idBrandLabel}>PARYAVARAN PRAHRI</Text>
                  <Text style={styles.idBrandTitle}>Digital Person Identity</Text>
                </View>
              </View>
              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>✓ Verified</Text>
              </View>
            </View>

            <View style={styles.idTopRow}>
              <View style={styles.qrBox}>
                <View style={styles.qrPattern}>
                  {Array.from({ length: 36 }).map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.qrCell,
                        (i + Math.floor(i / 6)) % 3 === 0 && styles.qrCellDark,
                      ]}
                    />
                  ))}
                </View>
              </View>
              <View style={styles.idDetails}>
                <View style={styles.idField}>
                  <Text style={styles.idFieldLabel}>Person ID</Text>
                  <Text style={styles.idFieldValue}>PP-IND-2026-00045</Text>
                </View>
                <View style={styles.idField}>
                  <Text style={styles.idFieldLabel}>Name</Text>
                  <Text style={styles.idFieldValue}>Rahul Sharma</Text>
                </View>
                <View style={styles.idField}>
                  <Text style={styles.idFieldLabel}>Mobile</Text>
                  <Text style={styles.idFieldValue}>+91 98260 12345</Text>
                </View>
              </View>
            </View>

            <View style={styles.dashedLine} />

            <View style={styles.grid}>
              {IDENTITY_GRID.map(item => (
                <View key={item.label} style={styles.gridCell}>
                  <Text style={styles.gridLabel}>{item.label}</Text>
                  <Text style={styles.gridValue}>{item.value}</Text>
                </View>
              ))}
            </View>

            <View style={styles.idFooter}>
              <Text style={styles.idFooterLeft}>📍 Indore, Madhya Pradesh</Text>
              <Text style={styles.idFooterRight}>
                Mission 2047 · Net Zero Bharat IN
              </Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.actionRow}>
          <Pressable style={styles.downloadBtn}>
            <Text style={styles.downloadBtnText}>⬇ Download</Text>
          </Pressable>
          <Pressable style={styles.shareBtnWrap}>
            <LinearGradient
              colors={['#0c4820', '#2b964f']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.shareBtn}>
              <Text style={styles.shareBtnText}>↗ Share Impact</Text>
            </LinearGradient>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Linked Vehicles</Text>
        {LINKED_VEHICLES.map(vehicle => (
          <View key={vehicle.id} style={styles.vehicleCard}>
            <View style={styles.vehicleIconWrap}>
              <AppIcon name={vehicle.icon} size={24} color="#126e35" />
            </View>
            <View style={styles.vehicleInfo}>
              <Text style={styles.vehicleName}>{vehicle.name}</Text>
              <Text style={styles.vehicleMeta}>{vehicle.meta}</Text>
            </View>
            <AppIcon name="car-side" size={22} color="#9ca3af" />
          </View>
        ))}

        <Text style={styles.sectionTitle}>Printable Vehicle Sticker</Text>
        <LinearGradient
          colors={['#f27e20', '#2bb373']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.stickerBorder}>
          <View style={styles.stickerCard}>
            <View style={styles.stickerRow}>
              <View style={styles.stickerQr}>
                <View style={styles.qrPatternSmall}>
                  {Array.from({ length: 25 }).map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.qrCellSmall,
                        i % 3 === 0 && styles.qrCellDark,
                      ]}
                    />
                  ))}
                </View>
              </View>
              <View style={styles.stickerInfo}>
                <Text style={styles.stickerBrand}>IN PARYAVARAN PRAHRI</Text>
                <Text style={styles.stickerName}>Rahul Sharma</Text>
                <Text style={styles.stickerId}>Person ID: PP-IND-2026-00045</Text>
                <Text style={styles.stickerMission}>
                  Mission 2047 · Net Zero Bharat
                </Text>
              </View>
            </View>
            <Text style={styles.stickerHint}>
              Print and paste on vehicle windshield
            </Text>
          </View>
        </LinearGradient>

        <Pressable style={styles.printBtn}>
          <Text style={styles.printBtnText}>🖨 Print Sticker</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f4f9f4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eef2ef',
  },
  headerBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#111827',
    fontWeight: '600',
  },
  bellIcon: {
    fontSize: 18,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0a3617',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  scrollContent: {
    padding: 20,
  },
  idCardBorder: {
    borderRadius: 24,
    padding: 2,
    marginBottom: 16,
  },
  idCard: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 18,
  },
  idCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  idBrandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  inLogo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#00a859',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  inLogoText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '900',
  },
  idBrandLabel: {
    fontSize: 9,
    color: '#6b7280',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  idBrandTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0a3617',
  },
  verifiedBadge: {
    backgroundColor: '#e6f7ed',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
  },
  verifiedText: {
    color: '#126e35',
    fontSize: 11,
    fontWeight: '700',
  },
  idTopRow: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  qrBox: {
    width: 100,
    height: 100,
    marginRight: 14,
  },
  qrPattern: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#0c4820',
    padding: 4,
  },
  qrCell: {
    width: '16.66%',
    aspectRatio: 1,
    backgroundColor: '#fff',
  },
  qrCellDark: {
    backgroundColor: '#0c4820',
  },
  idDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  idField: {
    marginBottom: 8,
  },
  idFieldLabel: {
    fontSize: 10,
    color: '#9ca3af',
    marginBottom: 2,
  },
  idFieldValue: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0a3617',
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#dce8df',
    marginBottom: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 14,
  },
  gridCell: {
    width: '47%',
  },
  gridLabel: {
    fontSize: 9,
    color: '#9ca3af',
    fontWeight: '700',
    letterSpacing: 0.4,
    marginBottom: 2,
  },
  gridValue: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0a3617',
  },
  idFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
  },
  idFooterLeft: {
    fontSize: 10,
    color: '#6b7280',
  },
  idFooterRight: {
    fontSize: 9,
    color: '#00a859',
    fontWeight: '700',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  downloadBtn: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#dce8df',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  downloadBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0a3617',
  },
  shareBtnWrap: {
    flex: 1.4,
    borderRadius: 16,
    overflow: 'hidden',
  },
  shareBtn: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  shareBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0a3617',
    marginBottom: 12,
  },
  vehicleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  vehicleIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#eaf4ee',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  vehicleIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  vehicleInfo: {
    flex: 1,
  },
  vehicleName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0a3617',
    marginBottom: 2,
  },
  vehicleMeta: {
    fontSize: 12,
    color: '#6b7280',
  },
  vehicleCarIcon: {
    fontSize: 18,
    opacity: 0.5,
  },
  stickerBorder: {
    borderRadius: 22,
    padding: 2,
    marginBottom: 14,
  },
  stickerCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
  },
  stickerRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  stickerQr: {
    width: 80,
    height: 80,
    marginRight: 14,
  },
  qrPatternSmall: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderColor: '#0c4820',
    padding: 3,
  },
  qrCellSmall: {
    width: '20%',
    aspectRatio: 1,
    backgroundColor: '#fff',
  },
  stickerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  stickerBrand: {
    fontSize: 9,
    color: '#00a859',
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  stickerName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0c4820',
    marginBottom: 4,
  },
  stickerId: {
    fontSize: 11,
    color: '#6b7280',
    marginBottom: 4,
  },
  stickerMission: {
    fontSize: 12,
    fontWeight: '700',
    color: '#126e35',
  },
  stickerHint: {
    fontSize: 11,
    color: '#9ca3af',
    textAlign: 'center',
  },
  printBtn: {
    backgroundColor: '#f27e20',
    borderRadius: 28,
    paddingVertical: 16,
    alignItems: 'center',
  },
  printBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
});
