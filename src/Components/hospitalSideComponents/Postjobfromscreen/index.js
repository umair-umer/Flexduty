import React from 'react'
import {Text,Dimensions,View,StyleSheet,TouchableOpacity, TextInput,CheckBox, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const {width,height}=Dimensions.get("window");
function JobfromScreen({navigation}) {
  return (
    <View style={styles.main}>
        <ScrollView>
    <Text style={styles.heading}>
     Post Shifts
    </Text>
 <View style={styles.inp}>
    <Text style={styles.text}>Where</Text>
    <TextInput
    placeholder='City name '
    style={styles.input}
    >
    </TextInput>
 </View>

 <View style={styles.inp}>
    <Text style={styles.text}>Who</Text>
    <TextInput
    placeholder='Nurse $28.00'
    style={styles.input}
    >
    </TextInput>
 </View>

 <View style={styles.inp}>
    <Text style={styles.text}>When</Text>
    <TextInput
    placeholder='14 Aug 23 08:00 - 09:00'
    style={styles.input}
    >
    </TextInput>
 </View>

 <View style={styles.inp}>
    <Text style={styles.text}>Skills Required</Text>
    <TextInput
    placeholder='Skills Required'
    style={styles.input}
    >
    </TextInput>
 </View>

 <View style={styles.inp}>
    <Text style={styles.text}>Shifts</Text>
    <TextInput
    placeholder='Day and Night'
    style={styles.input}
    >
    </TextInput>
 </View>


 <View style={styles.inp}>
    <Text style={styles.text}>Emergency contact</Text>
    <TextInput
    placeholder='Emergency contact'
    style={styles.input}
    >
    </TextInput>
 </View>


 <View style={styles.inp}>
    <Text style={styles.text}>Unit name</Text>
    <TextInput
    placeholder='Unit name'
    style={styles.input}
    >
    </TextInput>
 </View>


 <View style={styles.inp}>
    <Text style={styles.text}>Post code</Text>
    <TextInput
    placeholder='Post code'
    style={styles.input}
    >
    </TextInput>
 </View>
 
 <View style={styles.inp1}>
   <Text style={styles.text}>Regular Post</Text>
    <Text style={styles.text}>instant Post</Text>
    <Text style={styles.text}>As soon as Possible</Text>
 </View>


 <View style={styles.btn}>
    <TouchableOpacity style={styles.btn2}
    onPress={()=>navigation.navigate('post')}
    >
        <Text style={styles.text2}>Post Shift</Text>
    </TouchableOpacity>
</View>
</ScrollView>
</View> 
  )
}


const styles = StyleSheet.create({

    main:{
    
         width: "100%",
         backgroundColor: "#fff",
         
    },
    heading:{
        fontSize: 16,
        color: "#FF66C3",
        fontWeight: "500",
        marginRight: width * 0.8,
    
      },
    inp:{
         margin: width * 0.01
    },
    inp1:{
      margin: width * 0.02
 },
    input:{
          
        backgroundColor: "#F6F6F6",
        borderRadius:5, 
    },
    text:{
         fontSize:15,
         fontWeight:"500",

    },
    text2:{
        fontSize: 14,
        fontWeight:"700",
        color:"#fff",
        textAlign:"center",
        marginTop: height * 0.01
    },
    btn2:{

        width: width * 0.9,
        height : height * 0.04,
        backgroundColor: "#FF66C3",
        borderRadius: 5
    },
    btn:{

        padding: height * 0.03,
    },
    
    })

export default JobfromScreen
