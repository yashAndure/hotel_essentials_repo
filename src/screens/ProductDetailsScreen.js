import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.appTitle}>Hotel Essentials</Text>
            <Text style={styles.subTitle}>ELITE HOSPITALITY SUPPLY</Text>
          </View>

          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>


        {/* Product Image */}
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.backBtn}>
            <Ionicons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
            }}
            style={styles.image}
          />

          <TouchableOpacity style={styles.heartBtn}>
            <Ionicons name="heart-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>


        {/* Product Info */}
        <View style={styles.infoContainer}>

          <View style={styles.row}>
            <Text style={styles.stock}>IN STOCK</Text>

            <View style={styles.ratingRow}>
              <Ionicons name="star" color="#FFD700" size={16} />
              <Text style={styles.rating}>4.8</Text>
            </View>
          </View>


          <Text style={styles.title}>La Marzocco Linea Mini</Text>
          <Text style={styles.subtitle}>
            Professional grade espresso machine for home.
          </Text>


          {/* Bulk Pricing */}
          <Text style={styles.bulkTitle}>Bulk Pricing</Text>

          <View style={styles.priceRow}>

            {/* Standard */}
            <View style={styles.priceCard}>
              <Text style={styles.priceType}>STANDARD</Text>
              <Text style={styles.price}>$5,900</Text>
              <Text style={styles.unit}>/unit</Text>
            </View>

            {/* Discount */}
            <View style={styles.priceCardActive}>
              <Text style={styles.priceType}>5-10 UNITS</Text>
              <Text style={styles.price}>$5,600</Text>
              <Text style={styles.unit}>/unit</Text>
            </View>

          </View>


          {/* Specifications */}
          <TouchableOpacity style={styles.optionRow}>
            <Text style={styles.optionText}>Specifications</Text>
            <Ionicons name="chevron-down" size={20} color="white" />
          </TouchableOpacity>


          {/* Delivery */}
          <TouchableOpacity style={styles.optionRow}>
            <Text style={styles.optionText}>Delivery Info</Text>
            <Ionicons name="chevron-down" size={20} color="white" />
          </TouchableOpacity>


          {/* Buttons */}
          <View style={styles.btnRow}>

            <TouchableOpacity style={styles.quoteBtn}>
              <Text style={styles.quoteText}>Request Quote</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cartBtn}>
              <Ionicons name="cart-outline" size={18} color="white" />
              <Text style={styles.cartText}>Add to Cart</Text>
            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0B0F14"
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16
  },

  appTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  },

  subTitle: {
    color: "#777",
    fontSize: 10
  },

  imageContainer: {
    position: "relative",
    marginHorizontal: 16
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 16
  },

  backBtn: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 2
  },

  heartBtn: {
    position: "absolute",
    right: 10,
    top: 10
  },

  infoContainer: {
    padding: 16
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  stock: {
    color: "#7FFF7F",
    fontSize: 12
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },

  rating: {
    color: "white"
  },

  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10
  },

  subtitle: {
    color: "#888",
    marginTop: 4
  },

  bulkTitle: {
    color: "white",
    marginTop: 20,
    fontSize: 16
  },

  priceRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10
  },

  priceCard: {
    flex: 1,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#333"
  },

  priceCardActive: {
    flex: 1,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2ecc71"
  },

  priceType: {
    color: "#aaa",
    fontSize: 12
  },

  price: {
    color: "white",
    fontSize: 20,
    marginTop: 6
  },

  unit: {
    color: "#888",
    fontSize: 12
  },

  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#222"
  },

  optionText: {
    color: "white",
    fontSize: 14
  },

  btnRow: {
    flexDirection: "row",
    marginTop: 20,
    gap: 10
  },

  quoteBtn: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#444",
    alignItems: "center"
  },

  quoteText: {
    color: "white"
  },

  cartBtn: {
    flex: 1,
    backgroundColor: "#E63946",
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    gap: 6
  },

  cartText: {
    color: "white",
    fontWeight: "600"
  }

});