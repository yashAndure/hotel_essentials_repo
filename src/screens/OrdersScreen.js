import React from "react";
import {
View,
Text,
StyleSheet,
FlatList,
Image,
TextInput,
TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const orders = [
{
id:"1",
orderId:"#ORD-2023-8891",
date:"Oct 24, 2023",
title:"Kitchen Essentials Restock",
status:"Processing",
amount:"$2,450.00",
images:[
"https://images.unsplash.com/photo-1586201375761-83865001e31c",
"https://images.unsplash.com/photo-1582582429416-1fda2a6a54a2",
"https://images.unsplash.com/photo-1604908176997-43158e7f3d51"
],
extra:"+4"
},

{
id:"2",
orderId:"#ORD-2023-8752",
date:"Oct 18, 2023",
title:"Fine Dining Glassware",
status:"Shipped",
amount:"$890.50",
images:[
"https://images.unsplash.com/photo-1604908554047-03e8b1f1e3a2",
"https://images.unsplash.com/photo-1588854337221-4cf9fa96059c"
]
},

{
id:"3",
orderId:"#ORD-2023-8100",
date:"Sep 30, 2023",
title:"Chef Knives Set",
status:"Delivered",
amount:"$1,200.00",
images:[
"https://images.unsplash.com/photo-1593618998160-e34014e67546"
]
}
];

export default function OrdersScreen(){

const getStatusColor = (status)=>{
if(status==="Processing") return "#ffb300";
if(status==="Shipped") return "#3b82f6";
if(status==="Delivered") return "#22c55e";
};

const renderItem = ({item}) =>(

<LinearGradient
colors={["rgba(255,255,255,0.08)","rgba(255,255,255,0.02)"]}
style={styles.card}
>

<View style={styles.topRow}>

<View>
<Text style={styles.orderMeta}>
{item.orderId} • {item.date}
</Text>

<Text style={styles.title}>{item.title}</Text>
</View>

<View style={[styles.statusBadge,{backgroundColor:getStatusColor(item.status)}]}>
<Text style={styles.statusText}>{item.status}</Text>
</View>

</View>

<View style={styles.imageRow}>

{item.images.map((img,index)=>(
<Image key={index} source={{uri:img}} style={styles.productImage}/>
))}

{item.extra && (
<View style={styles.extraBox}>
<Text style={styles.extraText}>{item.extra}</Text>
</View>
)}

</View>

<View style={styles.divider}/>

<View style={styles.bottomRow}>

<View>
<Text style={styles.total}>TOTAL AMOUNT</Text>
<Text style={styles.amount}>{item.amount}</Text>
</View>

<TouchableOpacity style={styles.invoiceBtn}>
<Ionicons name="download-outline" size={18} color="white"/>
<Text style={styles.invoiceText}>Invoice</Text>
</TouchableOpacity>

</View>

</LinearGradient>
);

return(

<SafeAreaView style={styles.container}>

<View style={styles.header}>

<Ionicons name="arrow-back" size={24} color="white"/>

<View>
<Text style={styles.headerTitle}>My Orders</Text>
<Text style={styles.subHeader}>ORDER HISTORY & TRACKING</Text>
</View>

<Ionicons name="options-outline" size={22} color="white"/>

</View>

<View style={styles.searchBar}>
<Ionicons name="search" size={18} color="gray"/>
<TextInput
placeholder="Search by Order ID or Item..."
placeholderTextColor="gray"
style={styles.searchInput}
/>
</View>

<FlatList
data={orders}
renderItem={renderItem}
keyExtractor={(item)=>item.id}
showsVerticalScrollIndicator={false}
/>

</SafeAreaView>
);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#0c0f14",
padding:16
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:20
},

headerTitle:{
color:"white",
fontSize:20,
fontWeight:"bold"
},

subHeader:{
color:"gray",
fontSize:11
},

searchBar:{
flexDirection:"row",
backgroundColor:"#1a1d24",
borderRadius:20,
padding:12,
alignItems:"center",
marginBottom:20
},

searchInput:{
marginLeft:10,
color:"white",
flex:1
},

card:{
padding:18,
borderRadius:22,
marginBottom:18,
borderWidth:1,
borderColor:"rgba(255,255,255,0.08)"
},

topRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"flex-start"
},

orderMeta:{
color:"gray",
fontSize:12,
marginBottom:4
},

title:{
color:"white",
fontSize:17,
fontWeight:"600"
},

statusBadge:{
paddingHorizontal:10,
paddingVertical:4,
borderRadius:10
},

statusText:{
color:"black",
fontSize:11,
fontWeight:"600"
},

imageRow:{
flexDirection:"row",
marginTop:14
},

productImage:{
width:46,
height:46,
borderRadius:10,
marginRight:10
},

extraBox:{
width:46,
height:46,
borderRadius:10,
backgroundColor:"#2a2f3a",
justifyContent:"center",
alignItems:"center"
},

extraText:{
color:"white"
},

divider:{
height:1,
backgroundColor:"rgba(255,255,255,0.08)",
marginVertical:14
},

bottomRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

total:{
color:"gray",
fontSize:11
},

amount:{
color:"white",
fontSize:18,
fontWeight:"bold"
},

invoiceBtn:{
flexDirection:"row",
backgroundColor:"#22262f",
paddingHorizontal:14,
paddingVertical:8,
borderRadius:12,
alignItems:"center"
},

invoiceText:{
color:"white",
marginLeft:6
}

});