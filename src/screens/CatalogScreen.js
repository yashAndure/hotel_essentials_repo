import React from "react";
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#0F172A", padding: 15 }}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Hotel Essentials</Text>
          <Text style={{ color: "#94A3B8", fontSize: 12 }}>Find premium inventory</Text>
        </View>
        <Ionicons name="notifications-outline" size={22} color="white" />
      </View>

      {/* Search */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#1E293B",
          borderRadius: 12,
          paddingHorizontal: 10,
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <Ionicons name="search" size={18} color="#94A3B8" />
        <TextInput
          placeholder="Search premium inventory..."
          placeholderTextColor="#94A3B8"
          style={{ flex: 1, marginLeft: 10, color: "white" }}
        />
      </View>

      {/* Filters */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 15 }}>
        {["All", "Kitchen", "Tableware", "Liners"].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: index === 0 ? "#EF4444" : "#1E293B",
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 20,
              marginRight: 10,
            }}
          >
            <Text style={{ color: "white" }}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Trending */}
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
          Trending
        </Text>

        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          {/* Big Card */}
          <View style={{ flex: 1, marginRight: 10 }}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1586201375761-83865001e31c" }}
              style={{ width: "100%", height: 160, borderRadius: 15 }}
            />
            <Text style={{ color: "white", marginTop: 8, fontWeight: "bold" }}>
              Ovens & Ranges
            </Text>
            <Text style={{ color: "#94A3B8", fontSize: 12 }}>
              Premium professional kitchen
            </Text>
          </View>

          {/* Side Cards */}
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View>
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1604908176997-4317f6f1e8d1" }}
                style={{ width: "100%", height: 70, borderRadius: 12 }}
              />
              <Text style={{ color: "white", fontSize: 12 }}>Cooking</Text>
            </View>
            <View>
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1583778176476-4a8b02a64c23" }}
                style={{ width: "100%", height: 70, borderRadius: 12 }}
              />
              <Text style={{ color: "white", fontSize: 12 }}>Cutlery</Text>
            </View>
          </View>
        </View>

        {/* Categories */}
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
          Categories
        </Text>

        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {[
            { name: "Cookware", img: "https://images.unsplash.com/photo-1584990347449-a9f3d1a1e54f" },
            { name: "Plumbing", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952" },
            { name: "Prep", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea" },
            { name: "Furniture", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
            { name: "Apparel", img: "https://images.unsplash.com/photo-1521334884684-d80222895322" },
          ].map((item, index) => (
            <View
              key={index}
              style={{
                width: "48%",
                backgroundColor: "#1E293B",
                borderRadius: 15,
                padding: 10,
                marginBottom: 10,
              }}
            >
              <Image
                source={{ uri: item.img }}
                style={{ width: "100%", height: 80, borderRadius: 10 }}
              />
              <Text style={{ color: "white", marginTop: 5 }}>{item.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: "#1E293B",
        }}
      >
        <Ionicons name="home" size={22} color="#EF4444" />
        <Ionicons name="search" size={22} color="#94A3B8" />
        <Ionicons name="cart" size={22} color="#94A3B8" />
        <Ionicons name="grid" size={22} color="#94A3B8" />
        <Ionicons name="person" size={22} color="#94A3B8" />
      </View>
    </View>
  );
}
