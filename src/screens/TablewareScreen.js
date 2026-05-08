import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const CATEGORIES = ["Plates", "Glassware", "Cutlery"];

const PRODUCTS = [
  {
    id: "1",
    name: "Bone China Dinner Set",
    price: "€850",
    description: "24 piece professional grade set. High alumina content for chip resistance and translucent finish.",
    qty: "QTY: 10 / BOX",
    image: "https://images.unsplash.com/photo-1614014930188-51f7bb9b940d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Crystal Wine Glasses",
    price: "€1,200",
    description: "450ml blown lead-free crystal. Ultra-thin rim design for superior sensory tasting experience.",
    qty: "QTY: 24 / BOX",
    image: "https://images.unsplash.com/photo-1582582494700-2e8c2d0b4f5c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "Silverware Set",
    price: "€1,550",
    description: "18/10 Stainless steel with 24-karat silver plating. Ergonomic weight distribution for premium feel.",
    qty: "QTY: 60 / BOX",
    image: "https://images.unsplash.com/photo-1590453303666-419b5d3c8cfa?auto=format&fit=crop&w=800&q=80",
  }
];

export default function TablewareScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState("Plates");

  const renderProduct = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard} 
      activeOpacity={0.9}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      
      <View style={styles.productInfo}>
        <View style={styles.titleRow}>
          <Text style={styles.productTitle}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
        
        <Text style={styles.productDesc}>{item.description}</Text>
        
        <TouchableOpacity style={styles.addToCartBtn} activeOpacity={0.8}>
          <Ionicons name="cart" size={18} color="white" style={styles.cartIcon} />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        
        <Text style={styles.qtyText}>{item.qty}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.menuBtn}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hotel Essentials</Text>
        <TouchableOpacity>
          <Ionicons name="notifications" size={22} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Banner */}
        <ImageBackground
          source={{ uri: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80" }}
          style={styles.heroBanner}
        >
          <LinearGradient
            colors={['transparent', 'rgba(11,14,24,0.9)']}
            style={styles.heroOverlay}
          >
            <Text style={styles.heroTag}>EXCLUSIVE OFFER</Text>
            <Text style={styles.heroTitle}>Fine Dining{"\n"}Collections</Text>
            <TouchableOpacity style={styles.exploreBtn}>
              <Text style={styles.exploreBtnText}>EXPLORE CATALOG</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>

        {/* Categories / Tabs */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.categoryContainer}
        >
          {CATEGORIES.map((cat, index) => {
            const isActive = activeCategory === cat;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.categoryPill, isActive && styles.activeCategoryPill]}
                onPress={() => setActiveCategory(cat)}
              >
                <Text style={[styles.categoryText, isActive && styles.activeCategoryText]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Selections</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>

        {/* Product List */}
        <FlatList
          data={PRODUCTS}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          scrollEnabled={false} // Disable inner scroll since we are in a ScrollView
          contentContainerStyle={styles.listContainer}
        />
        
        {/* Bottom padding for tab bar spacing */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0E18",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuBtn: {
    paddingRight: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  heroBanner: {
    width: "100%",
    height: 280,
  },
  heroOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  heroTag: {
    color: "#FF1744",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 8,
  },
  heroTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 36,
    marginBottom: 16,
  },
  exploreBtn: {
    backgroundColor: "#FF1744",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  exploreBtnText: {
    color: "white",
    fontSize: 12,
    fontWeight: "800",
  },
  categoryContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 12,
  },
  categoryPill: {
    backgroundColor: "#1A2130",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  activeCategoryPill: {
    backgroundColor: "#FF1744",
    borderColor: "#FF1744",
  },
  categoryText: {
    color: "#8A93A7",
    fontSize: 13,
    fontWeight: "600",
  },
  activeCategoryText: {
    color: "white",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  viewAllText: {
    color: "#FF1744",
    fontSize: 12,
    fontWeight: "700",
  },
  listContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  productCard: {
    backgroundColor: "#141926",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  productImage: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
  },
  productInfo: {
    padding: 20,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  productTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
  },
  productPrice: {
    color: "#FF1744",
    fontSize: 16,
    fontWeight: "700",
  },
  productDesc: {
    color: "#8A93A7",
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 20,
  },
  addToCartBtn: {
    backgroundColor: "#FF1744",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  cartIcon: {
    marginRight: 8,
  },
  addToCartText: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  qtyText: {
    color: "#535C73",
    fontSize: 10,
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "600",
  },
});