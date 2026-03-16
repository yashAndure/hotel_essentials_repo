import React from "react";
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

export default function CartScreen(){

return(

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
<Ionicons name="notifications-outline" size={22} color="white"/>
<View style={styles.dot}/>
</View>

</View>


{/* Cart Title */}
<View style={styles.cartHeader}>

<View style={styles.cartLeft}>
<Ionicons name="arrow-back" size={22} color="white"/>
<Text style={styles.cartTitle}>Cart (3)</Text>
</View>

<Text style={styles.clear}>Clear</Text>

</View>


{/* Item 1 */}
<CartItem
image="https://images.unsplash.com/photo-1511920170033-f8396924c348"
title="Industrial Espresso Machine"
stock="In Stock"
model="Model XS500"
price="$4,200.00"
qty="1"
/>


{/* Item 2 */}
<CartItem
image="https://images.unsplash.com/photo-1585238342024-78d387f4a707"
title="Commercial Pro Blender"
stock="In Stock"
model="3HP Motor"
price="$850.00"
qty="2"
/>


{/* Item 3 */}
<CartItem
image="https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1"
title="Table Linens (Pack of 50)"
stock="Low Stock"
model="100% Cotton"
price="$450.00"
qty="5"
/>


{/* Promo Code */}
<View style={styles.promoCard}>

<Text style={styles.promoTitle}>
PURCHASE ORDER / PROMO CODE
</Text>

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
<Text style={styles.value}>$8,150.00</Text>
</View>

<View style={styles.row}>
<Text style={styles.label}>Tax (8.5%)</Text>
<Text style={styles.value}>$692.75</Text>
</View>

<View style={styles.row}>
<Text style={styles.label}>Delivery Charge</Text>
<Text style={styles.value}>$150.00</Text>
</View>

</View>


{/* Checkout Button */}
<LinearGradient
colors={["#ff4b4b","#d62828"]}
style={styles.checkoutBtn}
>

<Text style={styles.checkoutText}>
Review & Checkout
</Text>

<View style={styles.itemsBadge}>
<Text style={styles.badgeText}>3 items →</Text>
</View>

</LinearGradient>

<View style={{height:40}}/>

</ScrollView>
</SafeAreaView>

);
}


function CartItem({image,title,stock,model,price,qty}){

return(

<View style={styles.card}>

<Image source={{uri:image}} style={styles.image}/>

<View style={{flex:1}}>

<Text style={styles.itemTitle}>{title}</Text>

<View style={styles.stockRow}>
<View style={styles.greenDot}/>
<Text style={styles.stock}>{stock} • {model}</Text>
</View>

<Text style={styles.priceLabel}>PRICE</Text>

<View style={styles.priceRow}>

<Text style={styles.price}>{price}</Text>

<View style={styles.qtyBox}>
<Text style={styles.qtyBtn}>-</Text>
<Text style={styles.qty}>{qty}</Text>
<Text style={styles.qtyBtn}>+</Text>
</View>

</View>

</View>

<Ionicons name="trash-outline" size={18} color="gray"/>

</View>

);
}


const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#0b0f16",
paddingHorizontal:16
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:10
},

brandRow:{
flexDirection:"row",
alignItems:"center"
},

logo:{
width:36,
height:36,
borderRadius:18,
backgroundColor:"#e53935",
justifyContent:"center",
alignItems:"center",
marginRight:10
},

logoText:{
color:"white",
fontWeight:"bold"
},

brand:{
color:"white",
fontWeight:"bold"
},

subBrand:{
color:"gray",
fontSize:10
},

notification:{
position:"relative"
},

dot:{
position:"absolute",
top:-2,
right:-2,
width:8,
height:8,
backgroundColor:"red",
borderRadius:4
},

cartHeader:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:20
},

cartLeft:{
flexDirection:"row",
alignItems:"center"
},

cartTitle:{
color:"white",
fontSize:18,
marginLeft:10
},

clear:{
color:"#aaa"
},

card:{
flexDirection:"row",
backgroundColor:"#1a1f27",
padding:14,
borderRadius:18,
marginTop:16,
alignItems:"center"
},

image:{
width:70,
height:70,
borderRadius:12,
marginRight:12
},

itemTitle:{
color:"white",
fontSize:14,
fontWeight:"600"
},

stockRow:{
flexDirection:"row",
alignItems:"center",
marginTop:4
},

greenDot:{
width:6,
height:6,
backgroundColor:"#22c55e",
borderRadius:3,
marginRight:5
},

stock:{
color:"#aaa",
fontSize:11
},

priceLabel:{
color:"#777",
fontSize:10,
marginTop:6
},

priceRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:2
},

price:{
color:"white",
fontSize:16,
fontWeight:"bold"
},

qtyBox:{
flexDirection:"row",
backgroundColor:"#0e1218",
paddingHorizontal:8,
paddingVertical:4,
borderRadius:10,
alignItems:"center"
},

qtyBtn:{
color:"white",
fontSize:16,
paddingHorizontal:6
},

qty:{
color:"white"
},

promoCard:{
backgroundColor:"#1a1f27",
borderRadius:16,
padding:16,
marginTop:20
},

promoTitle:{
color:"#aaa",
fontSize:11,
marginBottom:10
},

promoRow:{
flexDirection:"row"
},

promoInput:{
flex:1,
backgroundColor:"#0e1218",
borderRadius:10,
padding:10,
color:"white"
},

applyBtn:{
backgroundColor:"#444",
paddingHorizontal:16,
justifyContent:"center",
borderRadius:10,
marginLeft:10
},

applyText:{
color:"white"
},

summaryCard:{
backgroundColor:"#14181f",
borderRadius:16,
padding:16,
marginTop:20
},

row:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:8
},

label:{
color:"#aaa"
},

value:{
color:"white"
},

checkoutBtn:{
marginTop:20,
padding:16,
borderRadius:14,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

checkoutText:{
color:"white",
fontWeight:"bold",
fontSize:16
},

itemsBadge:{
backgroundColor:"rgba(255,255,255,0.2)",
paddingHorizontal:10,
paddingVertical:4,
borderRadius:10
},

badgeText:{
color:"white",
fontSize:12
}

});