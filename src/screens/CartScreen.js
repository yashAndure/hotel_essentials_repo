import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const INITIAL_CART = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    title: "Industrial Espresso Machine",
    stock: "In Stock",
    model: "Model XS500",
    price: 4200.00,
    qty: 0 // Changed to 0
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
    title: "Commercial Pro Blender",
    stock: "In Stock",
    model: "3HP Motor",
    price: 850.00,
    qty: 0 // Changed to 0
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1",
    title: "Table Linens (Pack of 50)",
    stock: "Low Stock",
    model: "100% Cotton",
    price: 450.00,
    qty: 0 // Changed to 0
  }
];

export default function CartScreen() {
  const [cartItems, setCartItems] = useState(INITIAL_CART);

  // Actions
  const handleClearCart = () => setCartItems([]);

  const handleIncreaseQty = (id) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const handleDecreaseQty = (id) => {
    // Updated to allow decreasing down to 0 instead of 1
    setCartItems(prev => prev.map(item => 
      item.id === id && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
    ));
  };

  const handleDeleteItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = subtotal * 0.085; // 8.5%
  
  // Calculate total items currently selected (sum of all quantities)
  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  
  // Only apply delivery charge if they are actually buying at least 1 item
  const deliveryCharge = totalItemsCount > 0 ? 150.00 : 0;

  // Helper to format currency
  const formatCurrency = (amount) => {
    return "$" + amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.brandRow}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>HE</Text>
            </View>
            <View>
              <Text style={styles.brand}>Hotel Essentials</Text>
              <Text style={styles.subBrand}>ELITE HOSPITALITY SUPPLY</Text>
            </View>
          </View>
          <View style={styles.notification}>
            <Ionicons name="notifications-outline" size={22} color="white" />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Cart Title */}
        <View style={styles.cartHeader}>
          <View style={styles.cartLeft}>
            <Ionicons name="arrow-back" size={22} color="white" />
            <Text style={styles.cartTitle}>Cart</Text>
          </View>
          <TouchableOpacity onPress={handleClearCart}>
            <Text style={styles.clear}>Clear</Text>
          </TouchableOpacity>
        </View>

        {/* Cart Items List */}
        {cartItems.map((item) => (
          <CartItem 
            key={item.id} 
            item={item} 
            onIncrease={() => handleIncreaseQty(item.id)}
            onDecrease={() => handleDecreaseQty(item.id)}
            onDelete={() => handleDeleteItem(item.id)}
            formatCurrency={formatCurrency}
          />
        ))}

        {/* Show empty state message if cart is empty */}
        {cartItems.length === 0 && (
          <Text style={styles.emptyText}>Your cart is currently empty.</Text>
        )}

        {/* Promo Code */}
        <View style={styles.promoCard}>
          <Text style={styles.promoTitle}>PURCHASE ORDER / PROMO CODE</Text>
          <View style={styles.promoRow}>
            <TextInput
              placeholder="Enter code"
              placeholderTextColor="#777"
              style={styles.promoInput}
            />
            <TouchableOpacity style={styles.applyBtn}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Price Summary */}
        <View style={styles.summaryCard}>
          <View style={styles.row}>
            <Text style={styles.label}>Subtotal</Text>
            <Text style={styles.value}>{formatCurrency(subtotal)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Tax (8.5%)</Text>
            <Text style={styles.value}>{formatCurrency(tax)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Delivery Charge</Text>
            <Text style={styles.value}>{formatCurrency(deliveryCharge)}</Text>
          </View>
        </View>

        {/* Checkout Button */}
        <TouchableOpacity disabled={totalItemsCount === 0}>
          <LinearGradient
            colors={totalItemsCount > 0 ? ["#ff4b4b", "#d62828"] : ["#444", "#333"]}
            style={styles.checkoutBtn}
          >
            <Text style={styles.checkoutText}>Review & Checkout</Text>
            <View style={styles.itemsBadge}>
              <Text style={styles.badgeText}>{totalItemsCount} items →</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function CartItem({ item, onIncrease, onDecrease, onDelete, formatCurrency }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={{ flex: 1 }}>
        <Text style={styles.itemTitle}>{item.title}</Text>

        <View style={styles.stockRow}>
          <View style={styles.greenDot} />
          <Text style={styles.stock}>{item.stock} • {item.model}</Text>
        </View>

        <Text style={styles.priceLabel}>PRICE</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>{formatCurrency(item.price)}</Text>

          <View style={styles.qtyBox}>
            <TouchableOpacity onPress={onDecrease}>
              <Text style={styles.qtyBtn}>-</Text>
            </TouchableOpacity>
            
            <Text style={styles.qty}>{item.qty}</Text>
            
            <TouchableOpacity onPress={onIncrease}>
              <Text style={styles.qtyBtn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={onDelete} style={styles.deleteBtn}>
        <Ionicons name="trash-outline" size={18} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f16",
    paddingHorizontal: 16
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#e53935",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  logoText: {
    color: "white",
    fontWeight: "bold"
  },
  brand: {
    color: "white",
    fontWeight: "bold"
  },
  subBrand: {
    color: "gray",
    fontSize: 10
  },
  notification: {
    position: "relative"
  },
  dot: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 4
  },
  cartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 4
  },
  cartLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  cartTitle: {
    color: "white",
    fontSize: 18,
    marginLeft: 10
  },
  clear: {
    color: "#aaa",
    padding: 8
  },
  emptyText: {
    color: "#777",
    textAlign: "center",
    marginTop: 30,
    fontSize: 16
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#1a1f27",
    padding: 14,
    borderRadius: 18,
    marginTop: 16,
    alignItems: "center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 12
  },
  itemTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "600"
  },
  stockRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4
  },
  greenDot: {
    width: 6,
    height: 6,
    backgroundColor: "#22c55e",
    borderRadius: 3,
    marginRight: 5
  },
  stock: {
    color: "#aaa",
    fontSize: 11
  },
  priceLabel: {
    color: "#777",
    fontSize: 10,
    marginTop: 6
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 2
  },
  price: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  qtyBox: {
    flexDirection: "row",
    backgroundColor: "#0e1218",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    alignItems: "center"
  },
  qtyBtn: {
    color: "white",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 2
  },
  qty: {
    color: "white",
    marginHorizontal: 8,
    fontWeight: "bold"
  },
  deleteBtn: {
    padding: 8,
    marginLeft: 10
  },
  promoCard: {
    backgroundColor: "#1a1f27",
    borderRadius: 16,
    padding: 16,
    marginTop: 20
  },
  promoTitle: {
    color: "#aaa",
    fontSize: 11,
    marginBottom: 10
  },
  promoRow: {
    flexDirection: "row"
  },
  promoInput: {
    flex: 1,
    backgroundColor: "#0e1218",
    borderRadius: 10,
    padding: 10,
    color: "white"
  },
  applyBtn: {
    backgroundColor: "#444",
    paddingHorizontal: 16,
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 10
  },
  applyText: {
    color: "white"
  },
  summaryCard: {
    backgroundColor: "#14181f",
    borderRadius: 16,
    padding: 16,
    marginTop: 20
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8
  },
  label: {
    color: "#aaa"
  },
  value: {
    color: "white"
  },
  checkoutBtn: {
    marginTop: 20,
    padding: 16,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  checkoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  itemsBadge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10
  },
  badgeText: {
    color: "white",
    fontSize: 12
  }
});