import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getBottomInset, getTopInset } from '../utils/layout';
import { NEWS_ITEMS, TAG_STYLES } from '../data/newsData';

type Props = {
  onBack: () => void;
};

export default function NewsScreen({ onBack }: Props) {
  return (
    <View style={styles.root}>
      <View style={[styles.header, { paddingTop: getTopInset(10) }]}>
        <Pressable style={styles.headerBtn} onPress={onBack}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>News & Updates</Text>
          <Text style={styles.headerSubtitle}>
            Environmental & mission coverage
          </Text>
        </View>
        <Pressable style={styles.headerBtn}>
          <Text style={styles.bellIcon}>🔔</Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: getBottomInset(32) },
        ]}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.statusLabel}>Admin Managed · Coming soon</Text>

        {NEWS_ITEMS.map(item => {
          const tagStyle = TAG_STYLES[item.tag];
          return (
            <View key={item.id} style={styles.newsCard}>
              <View style={styles.iconCircle}>
                <Text style={styles.iconEmoji}>{item.icon}</Text>
              </View>
              <View style={styles.cardContent}>
                <View style={styles.cardTopRow}>
                  <View
                    style={[styles.tag, { backgroundColor: tagStyle.bg }]}>
                    <Text style={[styles.tagText, { color: tagStyle.text }]}>
                      {item.tag}
                    </Text>
                  </View>
                  <Text style={styles.timeAgo}>{item.timeAgo}</Text>
                </View>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
            </View>
          );
        })}
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
  statusLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0d9488',
    marginBottom: 16,
  },
  newsCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e8f5e9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  iconEmoji: {
    fontSize: 22,
  },
  cardContent: {
    flex: 1,
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '700',
  },
  timeAgo: {
    fontSize: 11,
    color: '#9ca3af',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0a3617',
    lineHeight: 21,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 19,
  },
});
