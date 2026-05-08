import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  ImageBackground
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const SUB_CATEGORIES = ["All Categories", "Towels", "Bed Sheets", "Table Linens", "Pillows"];

const PRODUCTS = [
  {
    id: "201",
    name: "Egyptian Cotton Towel Set",
    price: "$124.00",
    description: "900 GSM ultra-absorbent long-staple fibers for ultimate guest comfort.",
    image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "202",
    name: "600 Thread Count Sheets",
    price: "$189.00",
    description: "Sateen weave, mercerized finish for a silky touch and durable wash cycle.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "203",
    name: "White Linen Tablecloth",
    price: "$76.00",
    description: "Commercial grade heavy linen blend with soil-release technology.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=600&q=80"
  }
];

export default function LinensScreen({ navigation }) {
  
  const renderProduct = ({ item }) => (
    // CHANGED: View to TouchableOpacity with navigation
    <TouchableOpacity 
      style={styles.productCard}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
      
      <View style={styles.productDetails}>
        <View style={styles.nameRow}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
        
        <Text style={styles.productDesc}>{item.description}</Text>
        
        <TouchableOpacity style={styles.bulkOrderBtn}>
          <Ionicons name="bag-handle" size={18} color="white" />
          <Text style={styles.bulkOrderText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#ff8c91" />
          </TouchableOpacity>
          <Text style={styles.brandTitle}>Hotel Essentials</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <ImageBackground 
          source={{ uri: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80' }} 
          style={styles.heroImage}
        >
          <LinearGradient
            colors={['transparent', 'rgba(10,14,20,0.8)', '#0a0e14']}
            style={styles.heroOverlay}
          >
            <Text style={styles.heroTag}>EXCLUSIVE COLLECTION</Text>
            <Text style={styles.heroTitle}>Luxury Bedding & Bath</Text>
            <Text style={styles.heroSub}>
              Elevate your guest experience with the finest textiles curated for five-star hospitality standards.
            </Text>
          </LinearGradient>
        </ImageBackground>

        {/* Sub-Categories horizontal list */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.subCatContainer}
        >
          {SUB_CATEGORIES.map((cat, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.subCatItem, index === 0 && styles.subCatActive]}
            >
              {index === 0 && <Ionicons name="grid" size={14} color="black" style={{ marginRight: 5 }} />}
              <Text style={[styles.subCatText, index === 0 && styles.subCatTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Product Grid (Single column for better native readability) */}
        <FlatList
          data={PRODUCTS}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.listPadding}
        />

        {/* Heritage Series Promo */}
        <View style={styles.promoCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80' }} 
            style={styles.promoImage} 
          />
          <View style={styles.promoContent}>
            <Text style={styles.promoTitle}>The Heritage Series</Text>
            <Text style={styles.promoDesc}>
              stress-tested for 200+ industrial laundry cycles without losing integrity.
            </Text>
            <View style={styles.promoActions}>
              <TouchableOpacity style={styles.specBtn}>
                <Text style={styles.specText}>SPEC SHEET</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quoteBtn}>
                <Text style={styles.quoteText}>BULK QUOTE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        {/* Bottom Padding for Nav Bar */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0e14" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 60,
  },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  brandTitle: { color: "white", fontSize: 20, fontWeight: "800", letterSpacing: -1 },
  
  heroImage: { width: '100%', height: 500 },
  heroOverlay: { flex: 1, justifyContent: 'flex-end', padding: 25 },
  heroTag: { color: '#ff8c91', letterSpacing: 3, fontSize: 12, fontWeight: '700', marginBottom: 8 },
  heroTitle: { color: 'white', fontSize: 42, fontWeight: '800', lineHeight: 45 },
  heroSub: { color: '#a8abb3', fontSize: 16, marginTop: 10, lineHeight: 22 },

  subCatContainer: { paddingHorizontal: 20, marginVertical: 25 },
  subCatItem: { 
    backgroundColor: '#20262f', 
    paddingHorizontal: 20, 
    paddingVertical: 12, 
    borderRadius: 12, 
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  subCatActive: { backgroundColor: '#ff747c' },
  subCatText: { color: 'white', fontWeight: '600', fontSize: 14 },
  subCatTextActive: { color: 'black' },

  listPadding: { paddingHorizontal: 20 },
  productCard: { backgroundColor: '#0f141a', borderRadius: 20, marginBottom: 25, overflow: 'hidden' },
  imageContainer: { height: 280, width: '100%' },
  productImage: { width: '100%', height: '100%', opacity: 0.8 },
  productDetails: { padding: 20 },
  nameRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  productName: { color: 'white', fontSize: 18, fontWeight: '700', flex: 1 },
  productPrice: { color: '#ff8c91', fontSize: 18, fontWeight: '700' },
  productDesc: { color: '#a8abb3', fontSize: 14, marginVertical: 12 },
  bulkOrderBtn: { 
    backgroundColor: '#e31c41', 
    padding: 15, 
    borderRadius: 12, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    gap: 8
  },
  bulkOrderText: { color: 'white', fontWeight: '800', fontSize: 12, letterSpacing: 1 },

  promoCard: { marginHorizontal: 20, backgroundColor: '#0f141a', borderRadius: 30, overflow: 'hidden', padding: 15 },
  promoImage: { width: '100%', height: 200, borderRadius: 20 },
  promoContent: { padding: 20, alignItems: 'center' },
  promoTitle: { color: 'white', fontSize: 24, fontWeight: '800' },
  promoDesc: { color: '#a8abb3', textAlign: 'center', marginTop: 10 },
  promoActions: { flexDirection: 'row', gap: 10, marginTop: 20 },
  specBtn: { backgroundColor: '#ff8c91', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 10 },
  specText: { color: 'black', fontWeight: '800', fontSize: 11 },
  quoteBtn: { borderWidth: 1, borderColor: '#44484f', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 10 },
  quoteText: { color: 'white', fontWeight: '800', fontSize: 11 },
});