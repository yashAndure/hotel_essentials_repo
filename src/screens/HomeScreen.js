import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// OPTIMIZED: Small resolutions (w=400, q=60) for fast loading lists
const hotEquipment = [
  { id: "1", name: "Deep Fryer", image: "https://images.unsplash.com/photo-1626804475297-41609ea004eb?auto=format&fit=crop&w=400&q=60", price: "$1,200.00" },
  { id: "2", name: "Griller", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=60", price: "$850.00" },
  { id: "3", name: "Rotary Oven", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=60", price: "$3,400.00" },
];

const coldEquipment = [
  { id: "1", name: "Deep Freezer", image: "https://images.unsplash.com/photo-1581005118783-f6236b3341b5?auto=format&fit=crop&w=400&q=60", price: "$2,100.00" },
  { id: "2", name: "Ice Machine", image: "https://images.unsplash.com/photo-1594917088924-f7df5cb15da8?auto=format&fit=crop&w=400&q=60", price: "$1,450.00" },
  { id: "3", name: "Display Fridge", image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=400&q=60", price: "$3,200.00" },
];

const products = [
  { id: "1", name: "Damascus Chef Knife 8”", price: "$145.00", oldPrice: "$180.00", status: "IN STOCK", image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=400&q=60" },
  { id: "2", name: "Crystal Wine Glass Set", price: "$89.99", status: "LOW STOCK", image: "https://images.unsplash.com/photo-1582582494700-2e8c2d0b4f5c?auto=format&fit=crop&w=400&q=60" },
];

const categories = [
  { id: "1", name: "All", image: "https://cdn-icons-png.flaticon.com/128/1828/1828919.png" },
  { id: "2", name: "Kitchen", image: "https://cdn-icons-png.flaticon.com/128/1046/1046857.png" },
  { id: "3", name: "Tableware", image: "https://cdn-icons-png.flaticon.com/128/2838/2838912.png" },
  { id: "4", name: "Linens", image: "https://cdn-icons-png.flaticon.com/128/892/892458.png" },
];

const quickOrders = [
  { id: "1", name: "Porcelain Dinner Plate", price: "$124.00/cs", sku: "PL-100", image: "https://images.unsplash.com/photo-1614014930188-51f7bb9b940d?auto=format&fit=crop&w=400&q=60" },
  { id: "2", name: "Chef Knife Premium", price: "$210.00", sku: "KN-200", image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=400&q=60" },
  { id: "3", name: "Luxury Glass Set", price: "$95.00", sku: "GL-300", image: "https://images.unsplash.com/photo-1582582494700-2e8c2d0b4f5c?auto=format&fit=crop&w=400&q=60" },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  // FEATURED PRODUCTS (Clickable)
  const renderProduct = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.stockBadge}>
        <Text style={styles.stockText}>{item.status}</Text>
      </View>
      <TouchableOpacity style={styles.heart}>
        <AntDesign name="heart" size={18} color="red" />
      </TouchableOpacity>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.sku}>SKU: CK-8821</Text>
      {item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.cartBtn}>
          <Feather name="shopping-cart" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Hotel Essentials</Text>
          <Text style={styles.subtitle}>ELITE HOSPITALITY SUPPLY</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#aaa" />
        <TextInput placeholder="Search premium inventory..." placeholderTextColor="#777" style={styles.searchInput} />
        <Feather name="sliders" size={18} color="#aaa" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* ========================================= */}
        {/* CATEGORIES SECTION (Updated Navigation) */}
        {/* ========================================= */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
          {categories.map((item, index) => (
            <TouchableOpacity 
              key={item.id} 
              style={index === 0 ? styles.activeCategoryCard : styles.categoryCard}
              onPress={() => {
                if (item.name === "Linens") {
                  navigation.navigate("Linens");
                } else if (item.name === "Kitchen") {
                  navigation.navigate("Kitchen");
                } else if (item.name === "Tableware") {
                  navigation.navigate("Tableware");
                }
              }}
            >
              <Image source={{ uri: item.image }} style={styles.categoryImage} />
              <Text style={index === 0 ? styles.activeCategoryText : styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Banner */}
        <ImageBackground 
          source={{ uri: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=60" }} 
          style={styles.banner} 
          imageStyle={styles.bannerImage}
        >
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTag}>NEW DROP</Text>
            <Text style={styles.bannerTitle}>Professional Chef Series</Text>
            <Text style={styles.bannerDesc}>Next-gen copper alloy sets for the modern kitchen</Text>
            <View style={styles.bannerBtn}>
              <Text style={styles.bannerBtnText}>View Collection →</Text>
            </View>
          </View>
        </ImageBackground>

        {/* QUICK REORDER */}
        <View style={styles.quickHeader}>
          <Text style={styles.sectionTitle}>Quick Reorder</Text>
          <TouchableOpacity><Text style={styles.viewHistory}>VIEW HISTORY</Text></TouchableOpacity>
        </View>

        <FlatList
          data={quickOrders}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.quickListContent}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.quickCard}
              onPress={() => navigation.navigate("ProductDetails", { product: item })}
            >
              <View style={styles.quickImageWrapper}>
                <Image source={{ uri: item.image }} style={styles.quickImg} />
              </View>
              <Text style={styles.quickName}>{item.name}</Text>
              <Text style={styles.quickSku}>SKU: {item.sku}</Text>
              <View style={styles.quickBottomRow}>
                <Text style={styles.quickPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addBtn}>
                  <Text style={styles.addBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Featured Products */}
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <FlatList data={products} renderItem={renderProduct} keyExtractor={(item) => item.id} horizontal showsHorizontalScrollIndicator={false} />

        {/* HOT EQUIPMENT */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.equipmentSectionTitle}>HOT EQUIPMENT</Text>
          <TouchableOpacity><Text style={styles.viewMoreText}>View More ›</Text></TouchableOpacity>
        </View>

        <View style={styles.hotBannerCard}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=60" }} style={styles.hotBannerImage} />
          <View style={styles.hotDotsWrapper}>
            <View style={[styles.hotDot, { top: 90, left: 85 }]} />
            <View style={[styles.hotDot, { top: 210, right: 75 }]} />
            <View style={[styles.hotDot, { bottom: 110, left: 135 }]} />
          </View>
          <View style={styles.hotBannerOverlay}>
            <Text style={styles.hotBannerSmallText}>INDUSTRIAL GRADE</Text>
            <Text style={styles.hotBannerTitle}>Master Professional{"\n"}Grills & Fryers</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.hotScrollContent}>
          {hotEquipment.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.hotSmallCard}
              onPress={() => navigation.navigate("ProductDetails", { product: item })}
            >
              <Image source={{ uri: item.image }} style={styles.hotSmallImage} />
              <Text style={styles.hotSmallLabel}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* COLD EQUIPMENT */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.equipmentSectionTitle}>COLD EQUIPMENT</Text>
          <TouchableOpacity><Text style={styles.viewMoreText}>View More ›</Text></TouchableOpacity>
        </View>

        <View style={styles.coldBannerCard}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=60" }} style={styles.coldBannerImage} />
          <View style={styles.coldBannerOverlay}>
            <Text style={styles.coldBannerTitle}>Cold Storage</Text>
            <Text style={styles.coldBannerDesc}>Keep it fresh with top-tier refrigeration.</Text>
            <View style={styles.exploreBtn}>
              <Text style={styles.exploreBtnText}>Explore Freezers</Text>
            </View>
          </View>
        </View>

        <View style={styles.coldCircleRow}>
          {coldEquipment.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.coldCircleItem}
              onPress={() => navigation.navigate("ProductDetails", { product: item })}
            >
              <View style={styles.coldCircleImageWrap}>
                <Image source={{ uri: item.image }} style={styles.coldCircleImage} />
              </View>
              <Text style={styles.coldCircleLabel}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* PRODUCT SHOWCASE CARD */}
        <View style={styles.showcaseCard}>
          <View style={styles.showcaseInner}>
            <Image source={{ uri: "https://images.unsplash.com/photo-1571172964276-91faaa704e1b?auto=format&fit=crop&w=600&q=60" }} style={styles.showcaseImage} />
            <Text style={styles.verticalText}>AESTHETIC PRECISION</Text>
            <View style={styles.arrowRow}>
              <TouchableOpacity style={styles.arrowBtn}><Text style={styles.arrowText}>‹</Text></TouchableOpacity>
              <TouchableOpacity style={styles.arrowBtn}><Text style={styles.arrowText}>›</Text></TouchableOpacity>
            </View>
          </View>

          <View style={styles.showcaseBottomRow}>
            <Text style={styles.showcaseName}>The Merchandiser</Text>
            <Text style={styles.showcasePrice}>$2,780</Text>
          </View>

          <Text style={styles.showcaseDesc}>GLASS DOOR PRESERVATION SYSTEM DESIGNED FOR LUXURY ENVIRONMENTS. MINIMALIST FRAME. MAXIMUM CLARITY.</Text>

          <TouchableOpacity style={styles.requestBtn}>
            <Text style={styles.requestBtnText}>REQUEST SPECIFICATION</Text>
          </TouchableOpacity>
        </View>
        
        {/* Bottom padding for tabs */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B0E18", paddingTop: 50, paddingHorizontal: 16 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  title: { color: "white", fontSize: 20, fontWeight: "bold" },
  subtitle: { color: "#aaa", fontSize: 10 },
  searchBox: { marginTop: 20, flexDirection: "row", backgroundColor: "#141926", borderRadius: 30, padding: 10, alignItems: "center" },
  searchInput: { flex: 1, color: "white", marginHorizontal: 10 },
  categories: { paddingVertical: 18, paddingRight: 10 },
  categoryCard: { width: 90, height: 95, backgroundColor: "#f5f7fb", borderRadius: 22, alignItems: "center", justifyContent: "center", marginRight: 14, borderWidth: 1, borderColor: "rgba(255,255,255,0.06)" },
  activeCategoryCard: { width: 90, height: 95, backgroundColor: "#FF1744", borderRadius: 22, alignItems: "center", justifyContent: "center", marginRight: 14, shadowColor: "#FF1744", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.35, shadowRadius: 10, elevation: 8 },
  categoryImage: { width: 34, height: 34, resizeMode: "contain", marginBottom: 8 },
  categoryText: { color: "#535457", fontSize: 13, fontWeight: "600" },
  activeCategoryText: { color: "#fff", fontSize: 13, fontWeight: "700" },
  banner: { height: 200, marginTop: 20, borderRadius: 20, overflow: "hidden", justifyContent: "center" },
  bannerImage: { borderRadius: 20 },
  bannerOverlay: { flex: 1, backgroundColor: "rgba(5,8,18,0.55)", padding: 20, justifyContent: "center" },
  bannerTag: { alignSelf: "flex-start", color: "#fff", fontSize: 11, fontWeight: "700", backgroundColor: "rgba(255,255,255,0.12)", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12, marginBottom: 10 },
  bannerTitle: { color: "white", fontSize: 26, fontWeight: "bold", marginBottom: 6 },
  bannerDesc: { color: "#D0D3DA", fontSize: 13, marginBottom: 16, width: "75%" },
  bannerBtn: { backgroundColor: "#ff1744", paddingVertical: 10, paddingHorizontal: 18, borderRadius: 24, alignSelf: "flex-start" },
  bannerBtnText: { color: "white", fontWeight: "700", fontSize: 13 },
  quickHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 24, marginBottom: 14 },
  sectionTitle: { color: "#FFFFFF", fontSize: 18, fontWeight: "700" },
  viewHistory: { color: "#FF4D4F", fontSize: 12, fontWeight: "700", letterSpacing: 0.5 },
  quickListContent: { paddingRight: 8 },
  quickCard: { width: 200, backgroundColor: "#141926", borderRadius: 22, padding: 8, marginRight: 14, borderWidth: 1, borderColor: "rgba(255,255,255,0.05)" },
  quickImageWrapper: { width: "100%", height: 110, borderRadius: 16, overflow: "hidden", marginBottom: 12, backgroundColor: "#1C2233", alignItems: "center", justifyContent: "center" },
  quickImg: { width: "100%", height: "100%", resizeMode: "cover" },
  quickName: { color: "#FFFFFF", fontSize: 14, fontWeight: "600", marginBottom: 4 },
  quickSku: { color: "#8A93A7", fontSize: 11, marginBottom: 8 },
  quickBottomRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  quickPrice: { color: "#FF4D4F", fontSize: 15, fontWeight: "700" },
  addBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: "#FF1744", alignItems: "center", justifyContent: "center" },
  addBtnText: { color: "#FFFFFF", fontSize: 20, fontWeight: "700", marginTop: -1 },
  productCard: { backgroundColor: "#141926", borderRadius: 20, padding: 10, width: 180, marginRight: 15 },
  productImage: { width: "100%", height: 120, borderRadius: 15 },
  stockBadge: { position: "absolute", top: 10, left: 10, backgroundColor: "green", paddingHorizontal: 8, borderRadius: 10 },
  stockText: { color: "white", fontSize: 10 },
  heart: { position: "absolute", top: 20, right: 20 },
  productName: { color: "white", marginTop: 8 },
  sku: { color: "#888", fontSize: 11 },
  oldPrice: { color: "#888", textDecorationLine: "line-through" },
  priceRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  price: { color: "red", fontSize: 16, fontWeight: "bold" },
  cartBtn: { backgroundColor: "#222", padding: 8, borderRadius: 10 },
  sectionHeaderRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 28, marginBottom: 14 },
  equipmentSectionTitle: { color: "#FFFFFF", fontSize: 22, fontWeight: "700" },
  viewMoreText: { color: "#D8D8D8", fontSize: 15, fontWeight: "500" },
  hotBannerCard: { width: "100%", height: 430, borderRadius: 34, overflow: "hidden", backgroundColor: "#12332E", marginBottom: 16 },
  hotBannerImage: { width: "100%", height: "100%", position: "absolute" },
  hotDotsWrapper: { position: "absolute", width: "100%", height: "100%", zIndex: 2 },
  hotDot: { position: "absolute", width: 34, height: 34, borderRadius: 17, backgroundColor: "rgba(255,255,255,0.65)", borderWidth: 6, borderColor: "rgba(255,255,255,0.35)" },
  hotBannerOverlay: { flex: 1, justifyContent: "flex-end", paddingHorizontal: 24, paddingBottom: 28, backgroundColor: "rgba(0,0,0,0.18)" },
  hotBannerSmallText: { color: "#EAEAEA", fontSize: 12, letterSpacing: 3, marginBottom: 10, fontWeight: "600" },
  hotBannerTitle: { color: "#FFFFFF", fontSize: 26, fontWeight: "700", lineHeight: 34 },
  hotScrollContent: { paddingRight: 8, marginBottom: 26 },
  hotSmallCard: { width: 118, backgroundColor: "#F4F4F4", borderRadius: 18, paddingVertical: 12, paddingHorizontal: 10, alignItems: "center", marginRight: 12 },
  hotSmallImage: { width: 72, height: 72, borderRadius: 8, marginBottom: 10 },
  hotSmallLabel: { color: "#1C2333", fontSize: 12, fontWeight: "700", textAlign: "center" },
  coldBannerCard: { width: "100%", height: 200, borderRadius: 28, overflow: "hidden", marginBottom: 18, backgroundColor: "#1B2F36" },
  coldBannerImage: { width: "100%", height: "100%", position: "absolute" },
  coldBannerOverlay: { flex: 1, justifyContent: "center", paddingHorizontal: 20, backgroundColor: "rgba(0,0,0,0.22)" },
  coldBannerTitle: { color: "#FFFFFF", fontSize: 20, fontWeight: "700", marginBottom: 6 },
  coldBannerDesc: { color: "#E3E3E3", fontSize: 13, marginBottom: 14 },
  exploreBtn: { backgroundColor: "#FFFFFF", paddingHorizontal: 18, paddingVertical: 10, borderRadius: 24, alignSelf: "flex-start" },
  exploreBtnText: { color: "#1B1E27", fontSize: 14, fontWeight: "700" },
  coldCircleRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 28 },
  coldCircleItem: { alignItems: "center", width: "31%" },
  coldCircleImageWrap: { width: 74, height: 74, borderRadius: 37, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", marginBottom: 10 },
  coldCircleImage: { width: 50, height: 50, borderRadius: 6 },
  coldCircleLabel: { color: "#FFFFFF", fontSize: 11, fontWeight: "700", textAlign: "center" },
  showcaseCard: { backgroundColor: "#313b53", borderRadius: 40, padding: 20, marginBottom: 20 },
  showcaseInner: { backgroundColor: "#141926", borderRadius: 30, paddingVertical: 28, paddingHorizontal: 18, alignItems: "center", position: "relative" },
  showcaseImage: { width: 150, height: 180, borderRadius: 24, marginBottom: 18 },
  verticalText: { position: "absolute", right: 8, top: 90, color: "rgba(255,255,255,0.35)", fontSize: 11, letterSpacing: 3, transform: [{ rotate: "90deg" }] },
  arrowRow: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
  arrowBtn: { marginHorizontal: 18 },
  arrowText: { color: "#D6D6D6", fontSize: 28, fontWeight: "400" },
  showcaseBottomRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 18, marginBottom: 10 },
  showcaseName: { color: "#FFFFFF", fontSize: 18, fontStyle: "italic" },
  showcasePrice: { color: "#B78A56", fontSize: 18, fontWeight: "500" },
  showcaseDesc: { color: "rgba(255,255,255,0.55)", fontSize: 12, lineHeight: 20, textTransform: "uppercase", marginBottom: 20 },
  requestBtn: { borderWidth: 1, borderColor: "rgba(255,255,255,0.12)", borderRadius: 16, paddingVertical: 16, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255,255,255,0.03)" },
  requestBtnText: { color: "#FFFFFF", fontSize: 12, fontWeight: "700", letterSpacing: 3 }
});