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
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

const products = [
  {
    id: "1",
    name: "Damascus Chef Knife 8”",
    price: "$145.00",
    oldPrice: "$180.00",
    status: "IN STOCK",
    image:
      "https://images.unsplash.com/photo-1593618998160-e34014e67546",
  },
  {
    id: "2",
    name: "Crystal Wine Glass Set",
    price: "$89.99",
    status: "LOW STOCK",
    image:
      "https://i.etsystatic.com/20019221/r/il/db25e5/4926097129/il_1080xN.4926097129_su0b.jpg",
  },
];

export default function HomeScreen() {

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />

      <View style={styles.stockBadge}>
        <Text style={styles.stockText}>{item.status}</Text>
      </View>

      <TouchableOpacity style={styles.heart}>
        <AntDesign name="hearto" size={18} color="white" />
      </TouchableOpacity>

      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.sku}>SKU: CK-8821</Text>

      {item.oldPrice && (
        <Text style={styles.oldPrice}>{item.oldPrice}</Text>
      )}

      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>

        <TouchableOpacity style={styles.cartBtn}>
          <Feather name="shopping-cart" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Hotel Essentials</Text>
            <Text style={styles.subtitle}>
              ELITE HOSPITALITY SUPPLY
            </Text>
          </View>

          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>


        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#aaa" />

          <TextInput
            placeholder="Search premium inventory..."
            placeholderTextColor="#777"
            style={styles.searchInput}
          />

          <Feather name="sliders" size={18} color="#aaa" />
        </View>


        {/* Categories */}
        <View style={styles.categories}>

          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeText}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Kitchen</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Tableware</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Linens</Text>
          </TouchableOpacity>

        </View>


        {/* Banner */}
        <View style={styles.banner}>

          <Text style={styles.bannerTag}>NEW DROP</Text>

          <Text style={styles.bannerTitle}>
            Professional Chef Series
          </Text>

          <Text style={styles.bannerDesc}>
            Next-gen copper alloy sets for the...
          </Text>

          <TouchableOpacity style={styles.bannerBtn}>
            <Text style={styles.bannerBtnText}>
              View Collection →
            </Text>
          </TouchableOpacity>

        </View>


        {/* Quick reorder */}
        <View style={styles.quickHeader}>

          <Text style={styles.sectionTitle}>
            Quick Reorder
          </Text>

          <Text style={styles.viewHistory}>
            VIEW HISTORY
          </Text>

        </View>


        <View style={styles.quickCard}>
 
          <Image
            source={{
              uri: "https://thumbs.dreamstime.com/b/set-beautiful-white-ceramic-dinner-relief-plates-black-background-saucer-dessert-plate-92053526.jpg",
            }}
            style={styles.quickImg}
          />

          <View style={{ flex: 1 }}>

            <Text style={styles.quickName}>
              Porcelain Dinner Plate
            </Text>

            <Text style={styles.sku}>
              SKU: PD-4022
            </Text>

            <Text style={styles.quickPrice}>
              $124.00/cs
            </Text>

          </View>

          <TouchableOpacity style={styles.addBtn}>
            <Text style={{ color: "white", fontSize: 20 }}>+</Text>
          </TouchableOpacity>

        </View>


        {/* Featured Products */}
        <Text style={styles.sectionTitle}>
          Featured Products
        </Text>

        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0B0E18",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#aaa",
    fontSize: 10,
  },

  searchBox: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#141926",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
  },

  searchInput: {
    flex: 1,
    color: "white",
    marginHorizontal: 10,
  },

  categories: {
    flexDirection: "row",
    marginTop: 20,
  },

  activeTab: {
    backgroundColor: "red",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  activeText: {
    color: "white",
  },

  tab: {
    backgroundColor: "#141926",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  tabText: {
    color: "#aaa",
  },

  banner: {
    backgroundColor: "#141926",
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
  },

  bannerTag: {
    color: "red",
    fontSize: 12,
  },

  bannerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },

  bannerDesc: {
    color: "#aaa",
    marginVertical: 8,
  },

  bannerBtn: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
  },

  bannerBtnText: {
    color: "white",
  },

  quickHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  sectionTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },

  viewHistory: {
    color: "red",
    fontSize: 12,
  },

  quickCard: {
    flexDirection: "row",
    backgroundColor: "#141926",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
  },

  quickImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },

  quickName: {
    color: "white",
  },

  quickPrice: {
    color: "#aaa",
  },

  addBtn: {
    backgroundColor: "red",
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  productCard: {
    backgroundColor: "#141926",
    borderRadius: 20,
    padding: 10,
    width: 180,
    marginRight: 15,
  },

  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },

  stockBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "green",
    paddingHorizontal: 8,
    borderRadius: 10,
  },

  stockText: {
    color: "white",
    fontSize: 10,
  },

  heart: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  productName: {
    color: "white",
    marginTop: 8,
  },

  sku: {
    color: "#888",
    fontSize: 11,
  },

  oldPrice: {
    color: "#888",
    textDecorationLine: "line-through",
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },

  cartBtn: {
    backgroundColor: "#222",
    padding: 8,
    borderRadius: 10,
  },

});