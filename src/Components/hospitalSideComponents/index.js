import React from 'react'
import {Text,Dimensions,View,StyleSheet,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'

const {width,height}=Dimensions.get("window");
function PostshiftScreen({navigation}) {
  return (
    <View style={styles.main}>
    <Text style={styles.heading}>
    How would you like to post this shift?
    </Text>

  <View style={styles.warn}>
     <Text style={styles.autofill}>Auto-fill (Default)</Text>
     <Text style={styles.automatic}>Automatically send shifts to each group</Text>
     <Text style={styles.staff}>Permanent staff</Text>
     <Text style={styles.staff}>Health Care Professional Staffing Solutions
        marketplace</Text>
  </View>

<View style={styles.box}>
    <View style={styles.PosText}>
        <Text style={styles.text}>
            Post to Health Care Professional Staffing Solutions
        </Text>
        <Text style={styles.p}>Skip your permanent staff and post to Health Care
             Professional Staffing Solutions marketplace
        </Text>
    </View>

    <View style={styles.PosText}>
        <Text style={styles.text}>
        Pre-arranged
        </Text>
        <Text style={styles.p}>
        Invite permanent or Health Care Professional Staffing Solutions
        staff whom you’ve already shifts with
        </Text>
    </View>

</View>


<View style={styles.btn}>
    <TouchableOpacity style={styles.btn1}
    onPress={()=>navigation.navigate('shifts')}
    >
        <Text style={styles.text1}>Start over</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn2}
    onPress={()=>navigation.navigate('postshifts')}
    >
        <Text style={styles.text2}>Post Shift</Text>
    </TouchableOpacity>
</View>


<View style={styles.tabs}>
    <View style={styles.tabsIcons}>
    <TouchableOpacity>
    <AntDesign name="home" size={20} color="#FF66C3" style={styles.tabsIcons} />
        <Text style={styles.tabText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <MaterialIcons name="shopping-bag" size={20} color="#FF66C3" style={styles.tabsIcons} />
        <View style={styles.tabText}
         onPress={()=>navigation.navigate('ApplicantShift')}
        >
        <Text style={styles.tabText}>
        Shift
       </Text>
        
        </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <Feather name="folder" size={20} color="#FF66C3" style={styles.tabsIcons1} />
        <Text style={styles.tabText}
        
        >TimeSheet</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Feather name="users" size={20} color="#FF66C3" style={styles.tabsIcons}  />
        <Text style={styles.tabText}>Workers</Text>
    </TouchableOpacity>
</View>
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
         alignItems:"center"
    },
    heading:{
        fontSize: 16,
        color: "#FF66C3",
        fontWeight: "500",
        marginRight: width * 0.2,
        marginTop : height * 0.02
    
      },
    warn:{
    
         width: width * 0.9,
         height: height * 0.28,
         borderColor: "#FF66C3",
         borderWidth: 1,
         borderRadius: 5,
         marginTop : height * 0.02
    },
    
    autofill:{
    
         fontSize: 17,
         color: "#000",
         fontWeight: "500",
         margin: width * 0.02
    },
    automatic:{
    
        fontSize: 17,
        color: "#989898",
        fontWeight: "500",
        margin: width * 0.02
    },
    staff:{
        fontSize: 17,
        color: "#989898",
        fontWeight: "500",
        margin: width * 0.02,
    },
    box:{
         width: "100%",
         height : height * 0.3,
         backgroundColor: "#F8F8F8",
         marginTop : height * 0.02
    },
    
    PosText:{
         
        padding: width * 0.04,
        
    },
    text:{
         fontSize: 14,
         fontWeight:"700",
         color:"#8A8A8A"
    },
    p:{
    
        color: "#989898",
        fontSize: 15,
        fontWeight:"400"
    },
    btn:{
    
        padding: height * 0.05,
    },
    
    btn1:{
    
        width: width * 0.8,
        height : height * 0.04,
        backgroundColor: "#fff",
        borderRadius: 5
    },
    
    btn2:{
    
        width: width * 0.8,
        height : height * 0.04,
        backgroundColor: "#FF66C3",
        borderRadius: 5
    },
    text1:{
        fontSize: 14,
        fontWeight:"700",
        color:"#8A8A8A",
        textAlign:"center"
    },
    text2:{
        fontSize: 14,
        fontWeight:"700",
        color:"#fff",
        textAlign:"center",
        marginTop: height * 0.01
    },
    tabs:{
        width: "100%",
        backgroundColor:"#fff",
        paddingTop: height * 0.04,
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    
    },
    tabsIcons:{
    
         width:"85%",
         flexDirection:"row",
         justifyContent:"space-between",
         marginLeft:width*0.027,
         fontWeight:"bold",
         fontSize:27,
         color:"#FF66C3"  
    },
    tabsIcons1:{
    
        width:"85%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:width*0.06,
        fontWeight:"bold",
        fontSize:27,
        color:"#FF66C3" 
   },
    tabText:{
         fontSize:16,
         color: "#000",
         fontWeight: "500",
         left:width*0.007,
    
    }
    
    })

export default PostshiftScreen
