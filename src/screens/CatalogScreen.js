import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const isMobile = width < 600;

const categories = [
  { id: 1, title: 'Cookware', image: require('../../assets/cookware.jpeg') },
  { id: 2, title: 'Plumbing', image: require('../../assets/plumbing.jpeg') },
  { id: 3, title: 'Prep', image: require('../../assets/prep.jpeg') },
  { id: 4, title: 'Furniture', image: require('../../assets/furniture.jpeg') },
  { id: 5, title: 'Apparel', image: require('../../assets/apparel.jpeg') },
  { id: 6, title: 'View All', image: require('../../assets/viewall.jpeg') },
];

function CategoryCard({ item }) {
  return (
    <View style={styles.gridItem}>
      {/* Navigation removed, styling & touch feedback preserved */}
      <TouchableOpacity activeOpacity={0.9}>
        <ImageBackground
          source={item.image}
          style={styles.catImage}
          imageStyle={{ borderRadius: 16 }}
        >
          <View style={styles.overlay}>
            <Text style={styles.gridText}>{item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

export default function CatalogScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* --- HEADER SECTION --- */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Hotel Essentials</Text>
          <Text style={styles.headerSubtitle}>ELITE HOSPITALITY SUPPLY</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#aaa" />
        <TextInput
          placeholder="Search premium inventory..."
          placeholderTextColor="#aaa"
          style={styles.input}
        />
        <TouchableOpacity>
          <Ionicons name="options-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* View Reports */}
      <TouchableOpacity style={styles.reportBtn}>
        <Text style={styles.reportText}>View Reports</Text>
      </TouchableOpacity>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        numColumns={isMobile ? 2 : 3}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Text style={styles.heading}>Trending</Text>

            {/* BIG CARD */}
            <TouchableOpacity
              style={styles.bigCard}
              activeOpacity={0.9}
            >
              <ImageBackground
                source={require('../../assets/oven.jpeg')}
                style={styles.bigImage}
                imageStyle={{ borderRadius: 18 }}
              >
                <View style={styles.overlayBig}>
                  <Text style={styles.cardTitle}>Ovens & Ranges</Text>
                  <Text style={styles.cardDesc}>
                    Experience professional grade culinary heat designed for high-volume service.
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <View style={styles.row}>
              {/* SMALL CARD 1 */}
              <TouchableOpacity style={styles.smallCard}>
                <ImageBackground
                  source={require('../../assets/cooling.jpeg')}
                  style={styles.smallImage}
                  imageStyle={{ borderRadius: 16 }}
                >
                  <View style={styles.smallTextContainer}>
                    <Text style={styles.smallText}>Cooling</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {/* SMALL CARD 2 */}
              <TouchableOpacity style={styles.smallCard}>
                <ImageBackground
                  source={require('../../assets/cutlery.jpeg')}
                  style={styles.smallImage}
                  imageStyle={{ borderRadius: 16 }}
                >
                  <View style={styles.smallTextContainer}>
                    <Text style={styles.smallText}>Cutlery</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.catHeader}>
              <Text style={styles.heading}>Categories</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        renderItem={({ item }) => <CategoryCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d0f14', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, marginBottom: 20 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: '800', letterSpacing: 0.5 },
  headerSubtitle: { color: '#8e8e93', fontSize: 10, fontWeight: '600', marginTop: 2, letterSpacing: 1.2, textTransform: 'uppercase' },
  notificationBtn: { padding: 4 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1a1d24', borderRadius: 12, paddingHorizontal: 12, paddingVertical: 10, marginBottom: 16 },
  input: { flex: 1, marginLeft: 8, color: '#fff', fontSize: 16 },
  reportBtn: { backgroundColor: '#ff4d4d', padding: 12, borderRadius: 12, alignItems: 'center', marginBottom: 16 },
  reportText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  heading: { color: '#fff', fontSize: 22, marginVertical: 12, fontWeight: '700' },
  bigCard: { marginBottom: 16 },
  bigImage: { height: isMobile ? 180 : 260, justifyContent: 'flex-end' },
  overlayBig: { backgroundColor: 'rgba(0,0,0,0.6)', padding: 16, borderBottomLeftRadius: 18, borderBottomRightRadius: 18 },
  cardTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  cardDesc: { color: '#ccc', fontSize: 13, marginTop: 4, lineHeight: 18 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  smallCard: { flex: 1, marginHorizontal: 4 },
  smallImage: { height: 120, justifyContent: 'flex-end' },
  smallTextContainer: { backgroundColor: 'rgba(0,0,0,0.5)', padding: 10, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
  smallText: { color: '#fff', fontWeight: '600' },
  catHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  seeAll: { color: '#ff4d4d', fontWeight: '600', fontSize: 14 },
  gridItem: { flex: 1, margin: 6 },
  catImage: { height: isMobile ? 120 : 160, width: '100%', justifyContent: 'flex-end' },
  overlay: { backgroundColor: 'rgba(0,0,0,0.5)', padding: 10, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
  gridText: { color: '#fff', fontWeight: 'bold', fontSize: 14 }
});