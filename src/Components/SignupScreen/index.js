import React from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, CheckBox, ImageBackground } from "react-native"
const { width, height } = Dimensions.get('window')
import BG from '../../images/bg.png'
function SignupScreen({navigation}) {
  return (
    <ImageBackground source={BG}>
    <View style={styles.main}>
    <Text style={styles.heading} >Care Giver / Recruiting Agencies</Text>
          <View style={styles.form}  >
            <View style={styles.btn}>
              <TouchableOpacity style={styles.btn1}
               onPress={() => navigation.navigate('home')}
              >
                <Text style={styles.text1}>Care Giver / RA</Text>
              </TouchableOpacity>
    
              <TouchableOpacity style={styles.btn2}
               onPress={() => navigation.navigate('registeration')}
              >
                <Text style={styles.text2}>Care Home </Text>
              </TouchableOpacity>
            </View>
    
            <View >
              <TextInput 
                placeholder="Username"
                placeholderTextColor={"grey"}
                placeholderTextSize={30}
                style={styles.inp}
              >
              </TextInput>
              <TextInput 
                placeholder="Email Address"
                placeholderTextColor={"grey"}
                placeholderTextSize={30}
                style={styles.inp}
              >
              </TextInput>
    
              <TextInput 
                placeholder="Password"
                placeholderTextColor={"grey"}
                placeholderTextSize={30}
                style={styles.inp}
              >
              </TextInput>
    
              <TextInput 
                placeholder="Confirm Password"
                placeholderTextColor={"grey"}
                placeholderTextSize={30}
                style={styles.inp}
              >
              </TextInput>
    
            </View>
            <View style={styles.checkBoxDiv} >
              <Text
              style={{color:"#000"}}  
              >
              If you already Register
               <Text style={{ color: "#FF66C3", fontWeight: 500 }}
                  onPress={()=> navigation.navigate('login')}
               >
              login 
              </Text>
            </Text>
            </View>
            <View style={styles.btnDiv}>
              <TouchableOpacity 
                // onPress={()=>navigation.navigate('Post Shits')}
                style={styles.bttn}
              >
                <Text style={styles.text} >Register</Text>
              </TouchableOpacity>
            </View>
    
    
          </View>
    
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({


    main: {
        width: "100%",
        height: height * 1.1,
        // backgroundColor: "pink",
        display: "flex",
        alignItems: "center",
      
    
      },
      heading:{
        fontSize: 20,
        color: "#818181",
        fontWeight: "500",
        textAlign: "center",
        marginTop: height * 0.10,
    
      },
    
    
      form: {
        width: width * 0.9,
        height: height * 0.62,
        backgroundColor: "#fff",
        marginTop: height * 0.06,
        borderRadius: 20,
      },
      btn: {
        width: width * 0.8,
        height: height * 0.06,
        borderRadius: 50,
        left: 20,
        marginTop: height * 0.03,
        display: "flex",
        flexDirection: "row",
        backgroundColor:"#fff",
        shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
    
          elevation: 5,
       
      },
      btn1: {
        width: width * 0.36,
        height: height * 0.052,
        backgroundColor: "#FF66C3",
        left: 5,
        borderRadius: 20,
        marginTop: 2
      },
      btn2: {
        width: width * 0.36,
        height: height * 0.052,
        backgroundColor: "#FFD7EF",
        left: 23,
        borderRadius: 20,
        marginTop: 2
      },
      text1: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "400",
        textAlign: "center",
        marginTop: height * 0.011,
      },
      text2: {
        fontSize: 16,
        color: "#FF66C3",
        fontWeight: "400",
        textAlign: "center",
        marginTop: height * 0.011,
      },
      inp: {
        width: width * 0.7,
        borderBottomWidth: 1,
        borderColor: "#000",
        marginLeft: width * 0.08,
        marginTop: 5,
        fontSize:19,
        color:"#36454F",
        fontWeight:"400"
    
      },
      checkBoxDiv: {
        alignItems: "center",
        marginTop: height * 0.012,
      },
      btnDiv: {
        width: width * 0.9,
        height: height * 0.4,
        display: "flex",
        alignItems: "center"
      },
      bttn: {
        width: '50%',
        height: 40,
        backgroundColor: "#FF66C3",
        borderRadius: 5,
        marginTop: height * 0.04,
    
      },
      text: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "500",
        textAlign: "center",
        marginTop: height * 0.006,
    
      },




})

export default SignupScreen
