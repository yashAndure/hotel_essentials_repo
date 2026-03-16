import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const C = {
  bg: '#111111',
  surface: '#1a1a1a',
  card: '#1e1e1e',
  border: '#2a2a2a',
  accent: '#e53935',
  text: '#f0f0f0',
  textSub: '#888',
  textMuted: '#555',
  chip: '#252525',
};

export default function CatalogScreen() {

  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Kitchen', 'Tableware', 'Linens'];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={C.bg} />

      {/* Top Nav */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Text style={styles.menuIcon}>≡</Text>
        </TouchableOpacity>

        <Text style={styles.topBarTitle}>Hotel Essential</Text>

        <View style={{ width: 30 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
      >

        {/* Header */}
        <View style={styles.headerCard}>
          <View style={styles.headerLeft}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoText}>HE</Text>
            </View>

            <View>
              <Text style={styles.brandName}>Hotel Essentials</Text>
              <Text style={styles.brandSub}>ELITE HOSPITALITY SUPPLY</Text>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={styles.bellIcon}>🔔</Text>
          </TouchableOpacity>
        </View>


        {/* Search */}
        <View style={styles.searchRow}>

          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>⌕</Text>

            <TextInput
              placeholder="Search premium inventory..."
              placeholderTextColor={C.textMuted}
              style={styles.searchInput}
            />

          </View>

          <TouchableOpacity style={styles.filterBtn}>
            <Text style={{ color: C.textSub }}>⧉</Text>
          </TouchableOpacity>

        </View>


        {/* Filter Chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          {filters.map((f) => (
            <TouchableOpacity
              key={f}
              onPress={() => setActiveFilter(f)}
              style={[
                styles.chip,
                activeFilter === f && styles.chipActive,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  activeFilter === f && styles.chipTextActive,
                ]}
              >
                {f}
              </Text>
            </TouchableOpacity>
          ))}

        </ScrollView>


        {/* Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending</Text>

          <TouchableOpacity>
            <Text style={styles.viewReport}>VIEW REPORT</Text>
          </TouchableOpacity>
        </View>


        {/* Hero Card */}
        <View style={styles.heroCard}>

          <Text style={styles.heroTitle}>
            Ovens & Ranges
          </Text>

          <Text style={styles.heroDesc}>
            Experience professional grade culinary heat designed
            for high-volume service.
          </Text>

        </View>


        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>

        <View style={styles.categoryGrid}>

          <View style={styles.categoryItem}>
            <Text style={styles.categoryEmoji}>♨️</Text>
            <Text style={styles.categoryLabel}>COOKWARE</Text>
          </View>

          <View style={styles.categoryItem}>
            <Text style={styles.categoryEmoji}>💧</Text>
            <Text style={styles.categoryLabel}>PLUMBING</Text>
          </View>

          <View style={styles.categoryItem}>
            <Text style={styles.categoryEmoji}>⚙️</Text>
            <Text style={styles.categoryLabel}>PREP</Text>
          </View>

          <View style={styles.categoryItem}>
            <Text style={styles.categoryEmoji}>🪑</Text>
            <Text style={styles.categoryLabel}>FURNITURE</Text>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: C.bg,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },

  menuIcon: {
    fontSize: 22,
    color: C.text,
  },

  topBarTitle: {
    color: C.text,
    fontSize: 18,
    fontWeight: 'bold',
  },

  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: C.surface,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoCircle: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: C.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  logoText: {
    color: 'white',
    fontWeight: 'bold',
  },

  brandName: {
    color: C.text,
    fontWeight: 'bold',
  },

  brandSub: {
    color: C.textSub,
    fontSize: 11,
  },

  bellIcon: {
    fontSize: 20,
  },

  searchRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: C.surface,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    color: C.text,
    marginLeft: 8,
  },

  searchIcon: {
    color: C.textSub,
  },

  filterBtn: {
    backgroundColor: C.surface,
    marginLeft: 8,
    padding: 12,
    borderRadius: 10,
  },

  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: C.chip,
    borderRadius: 20,
    marginRight: 8,
  },

  chipActive: {
    backgroundColor: C.accent,
  },

  chipText: {
    color: C.textSub,
  },

  chipTextActive: {
    color: 'white',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  sectionTitle: {
    color: C.text,
    fontSize: 18,
    fontWeight: 'bold',
  },

  viewReport: {
    color: C.accent,
  },

  heroCard: {
    backgroundColor: C.surface,
    padding: 20,
    borderRadius: 12,
    marginTop: 10,
  },

  heroTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  heroDesc: {
    color: C.textSub,
    marginTop: 5,
  },

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },

  categoryItem: {
    width: (width - 48) / 2,
    backgroundColor: C.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    marginRight: 10,
  },

  categoryEmoji: {
    fontSize: 22,
    marginBottom: 6,
  },

  categoryLabel: {
    color: 'white',
    fontWeight: 'bold',
  },

});