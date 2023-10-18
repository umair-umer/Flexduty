import React from 'react'
import {View,StyleSheet,Dimensions,Text, Image, TouchableOpacity} from 'react-native';
const {width,height}=Dimensions.get("window");

function TimeSheetscreen() {
  return (
    <View style={styles.main}>
    <Text style={styles.heading}>
    Timesheets
    </Text>
    <View style={styles.pendingcon}>
       <View style={styles.pendingbtn}>
        <Text style={{color:"#FF66C3",fontWeight:"400"}} >
          Pending
        </Text>
        
        </View> 
        <Text style={{color:"#989898",fontWeight:"500",right:width*0.05}}>
            All
        </Text>
    </View>
   
   </View>
  )
}

const styles = StyleSheet.create({

    main:{
    
         width: "100%",
         height: height * 11,
         backgroundColor: "#fff",
         display: "flex",
         alignItems:"center",
    },
    heading:{
        fontSize: 16,
        color: "#FF66C3",
        fontWeight: "500",
        marginTop : height * 0.03,
        
    
      },
    pendingcon:{

          width:width*0.9,
          height:height*0.05,
          backgroundColor:"#F6F6F6",
          marginVertical:height*0.05,
          flexDirection:"row",
          justifyContent:"space-between",
          paddingHorizontal:width*0.10,
          alignItems:"center"
    },
    pendingbtn:{

        width:width*0.3,
        height:height*0.038,
        borderColor:"#FF66C3",
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5
    }

    })

export default TimeSheetscreen
