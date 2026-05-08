import React from "react";
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
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const KITCHEN_CATEGORIES = [
  {
    id: "1",
    name: "Appliances",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "2",
    name: "Cookware",
    image: "https://images.unsplash.com/photo-1584990347449-a6e4bbabe5bc?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "3",
    name: "Utensils",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=400&q=60",
  }
];

const ESSENTIAL_GEAR = [
  {
    id: "1",
    name: "Commercial Deep Fryer",
    price: "$3,200.00",
    description: "High-capacity dual basket system with precision thermal control for high-volume service.",
    image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80",
    isFavorite: false,
  },
  {
    id: "2",
    name: "Stainless Steel Prep Table",
    price: "$485.00",
    description: "Grade 304 NSF-certified stainless steel surface with welded bottom shelf for storage.",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80",
    isFavorite: false,
  },
  {
    id: "3",
    name: "Chef Knife Set",
    price: "$199.00",
    description: "5-piece forged Damascus steel set with ergonomic G10 handles for elite precision.",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=800&q=80",
    isFavorite: true,
  }
];

export default function KitchenwareScreen({ navigation }) {
  const renderGearItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        {/* Price Tag Overlay */}
        <View style={styles.priceTag}>
          <Text style={styles.priceTagText}>{item.price}</Text>
        </View>
      </View>

      <View style={styles.productInfo}>
        <View style={styles.titleRow}>
          <Text style={styles.productTitle}>{item.name}</Text>
          <TouchableOpacity>
            <Ionicons 
              name={item.isFavorite ? "heart" : "heart-outline"} 
              size={20} 
              color={item.isFavorite ? "#FF1744" : "#8A93A7"} 
            />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.productDesc}>{item.description}</Text>
        
        <TouchableOpacity style={styles.addToCartBtn} activeOpacity={0.8}>
          <Ionicons name="cart" size={18} color="white" style={styles.cartIcon} />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
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
          source={{ uri: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80" }}
          style={styles.heroBanner}
        >
          <LinearGradient
            colors={['rgba(11,14,24,0.1)', 'rgba(11,14,24,0.8)', '#0B0E18']}
            style={styles.heroOverlay}
          >
            <Text style={styles.heroTag}>HEAVY DUTY GEAR</Text>
            <Text style={styles.heroTitle}>Professional{"\n"}Kitchenware</Text>
            <Text style={styles.heroSubtitle}>
              Industrial grade performance engineered for the world's most demanding culinary environments.
            </Text>
          </LinearGradient>
        </ImageBackground>

        {/* Categories Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.categoriesContainer}
        >
          {KITCHEN_CATEGORIES.map((cat) => (
            <TouchableOpacity key={cat.id} style={styles.categoryCard} activeOpacity={0.8}>
              <ImageBackground source={{ uri: cat.image }} style={styles.categoryImage}>
                <LinearGradient
                  colors={['transparent', 'rgba(11,14,24,0.9)']}
                  style={styles.categoryOverlay}
                >
                  <Text style={styles.categoryName}>{cat.name}</Text>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Essential Gear Section */}
        <View style={[styles.sectionHeader, styles.gearHeader]}>
          <Text style={styles.sectionTitle}>Essential Gear</Text>
          <View style={styles.gearActions}>
            <TouchableOpacity style={styles.iconBtn}>
              <Feather name="filter" size={16} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="grid" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Product List */}
        <FlatList
          data={ESSENTIAL_GEAR}
          renderItem={renderGearItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false} // Disable inner scroll
          contentContainerStyle={styles.listContainer}
        />
        
        {/* Bottom padding */}
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
    height: 320,
  },
  heroOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  heroTag: {
    color: "#FF1744",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  heroTitle: {
    color: "white",
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 38,
    marginBottom: 10,
  },
  heroSubtitle: {
    color: "#8A93A7",
    fontSize: 13,
    lineHeight: 20,
    width: "85%",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
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
  categoriesContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  categoryCard: {
    width: 140,
    height: 160,
    borderRadius: 16,
    overflow: "hidden",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
  },
  categoryOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 12,
  },
  categoryName: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  gearHeader: {
    marginTop: 30,
  },
  gearActions: {
    flexDirection: "row",
    gap: 10,
  },
  iconBtn: {
    backgroundColor: "#1A2130",
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
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
  imageWrapper: {
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: 220,
    backgroundColor: "white", // To handle images with transparent backgrounds like the prep table
    resizeMode: "cover",
  },
  priceTag: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#FF1744",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  priceTagText: {
    color: "white",
    fontSize: 12,
    fontWeight: "800",
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
  },
  cartIcon: {
    marginRight: 8,
  },
  addToCartText: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
});