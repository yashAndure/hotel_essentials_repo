import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Top Header */}
        <View style={styles.topHeader}>
          <View style={styles.brandRow}>

            <View>
              <Text style={styles.brandTitle}>Hotel Essentials</Text>
              <Text style={styles.brandSub}>ELITE HOSPITALITY SUPPLY</Text>
            </View>
          </View>

          <View style={styles.notification}>
            <Ionicons name="notifications-outline" size={20} color="white" />
            <View style={styles.redDot}/>
          </View>
        </View>


        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={22} color="white"/>
          </TouchableOpacity>

          <Text style={styles.profileTitle}>Profile</Text>

          <TouchableOpacity>
            <Ionicons name="settings-outline" size={22} color="white"/>
          </TouchableOpacity>
        </View>


        {/* Profile Card */}
        <LinearGradient
          colors={["#1d2430","#0e131a"]}
          style={styles.profileCard}
        >

          <Image
            source={{uri:"https://i.pravatar.cc/150"}}
            style={styles.avatar}
          />

          <Text style={styles.name}>Eleanor Rigby</Text>

          <Text style={styles.role}>
            SENIOR PROCUREMENT MANAGER
          </Text>

          <Text style={styles.company}>
            Grand Plaza Hotels
          </Text>

          <View style={styles.verifiedBadge}>
            <View style={styles.greenDot}/>
            <Text style={styles.verifiedText}>
              ENTERPRISE VERIFIED
            </Text>
          </View>

        </LinearGradient>


        {/* Business Information */}
        <Text style={styles.sectionTitle}>Business Information</Text>


        {/* Tax ID */}
        <View style={styles.infoCard}>

          <Text style={styles.label}>TAX ID</Text>

          <View style={styles.row}>
            <Text style={styles.value}>
              US - 8821 - 990 - X
            </Text>

            <Ionicons name="copy-outline" size={18} color="gray"/>
          </View>

        </View>


        {/* Billing Address */}
        <View style={styles.infoCard}>

          <Text style={styles.label}>
            PRIMARY BILLING ADDRESS
          </Text>

          <Text style={styles.value}>
            Grand Plaza HQ, Finance Dept.
          </Text>

          <Text style={styles.value}>
            101 Luxury Avenue, Suite 500
          </Text>

          <Text style={styles.value}>
            New York, NY 10012
          </Text>

          <TouchableOpacity style={{alignSelf:"flex-end"}}>
            <Text style={styles.edit}>EDIT</Text>
          </TouchableOpacity>

        </View>


        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.quickRow}>

          <View style={styles.quickCard}>
            <MaterialIcons name="local-shipping" size={28} color="red"/>
            <Text style={styles.quickText}>Add Shipping Address</Text>
          </View>

          <View style={styles.quickCard}>
            <MaterialIcons name="credit-card" size={26} color="red"/>
            <Text style={styles.quickText}>Add Payment Method</Text>
          </View>

        </View>


        {/* Business Unit */}
        <View style={styles.linkCard}>

          <MaterialIcons name="business" size={24} color="red"/>

          <View style={{flex:1,marginLeft:12}}>
            <Text style={styles.linkTitle}>
              Link New Business Unit
            </Text>

            <Text style={styles.linkSub}>
              Connect another hotel property
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={22} color="gray"/>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#0c1016",
paddingHorizontal:16
},

topHeader:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:10
},

brandRow:{
flexDirection:"row",
alignItems:"center"
},

brandTitle:{
color:"white",
fontSize:20,
fontWeight:"bold"
},

brandSub:{
color:"gray",
fontSize:10
},

notification:{
position:"relative"
},

redDot:{
position:"absolute",
right:-2,
top:-2,
width:8,
height:8,
backgroundColor:"red",
borderRadius:4
},

profileHeader:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginVertical:20
},

profileTitle:{
color:"white",
fontSize:18,
fontWeight:"bold"
},

profileCard:{
borderRadius:20,
padding:25,
alignItems:"center",
marginBottom:25
},

avatar:{
width:80,
height:80,
borderRadius:40,
borderWidth:2,
borderColor:"red",
marginBottom:10
},

name:{
color:"white",
fontSize:20,
fontWeight:"bold"
},

role:{
color:"red",
fontSize:12,
marginTop:4
},

company:{
color:"gray",
marginTop:4
},

verifiedBadge:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#1b2a24",
paddingHorizontal:12,
paddingVertical:6,
borderRadius:20,
marginTop:10
},

greenDot:{
width:6,
height:6,
backgroundColor:"#00ff9c",
borderRadius:3,
marginRight:6
},

verifiedText:{
color:"#00ff9c",
fontSize:10
},

sectionTitle:{
color:"white",
fontSize:16,
marginBottom:10
},

infoCard:{
backgroundColor:"#151a21",
padding:16,
borderRadius:16,
marginBottom:12
},

label:{
color:"gray",
fontSize:11,
marginBottom:4
},

value:{
color:"white",
fontSize:14
},

row:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

edit:{
color:"red",
marginTop:10
},

quickRow:{
flexDirection:"row",
justifyContent:"space-between"
},

quickCard:{
backgroundColor:"#151a21",
width:"48%",
padding:20,
borderRadius:16,
alignItems:"center"
},

quickText:{
color:"white",
marginTop:10,
textAlign:"center",
fontSize:12
},

linkCard:{
backgroundColor:"#151a21",
flexDirection:"row",
alignItems:"center",
padding:16,
borderRadius:16,
marginTop:12
},

linkTitle:{
color:"white",
fontWeight:"bold"
},

linkSub:{
color:"gray",
fontSize:12
}

});