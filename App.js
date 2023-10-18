import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './src/Components/SignupScreen';
import LoginScreen from './src/Components/Login';
import ForgetScreen from './src/Components/ForgetScreen';
import SendcodeScreen from './src/Components/SendcodeScreen';
import Conformpassword from './src/Components/ConformPassword';
import Signup2Screen from './src/Components/SignupScreen/Signup2Screen';
import PostshiftScreen from './src/Components/hospitalSideComponents';
import ShifPostScreen from './src/Components/hospitalSideComponents/ShiftPostScreen';
import JobfromScreen from './src/Components/hospitalSideComponents/Postjobfromscreen';
import Applicationshifts from './src/Components/hospitalSideComponents/ApplicationShifts';
import TimeSheetscreen from './src/Components/hospitalSideComponents/Timesheets';





const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (    
    <>


<NavigationContainer>
      <Stack.Navigator  
       screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="home" component={SignupScreen} />
        <Stack.Screen name="registeration" component={Signup2Screen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="sendcode" component={SendcodeScreen} />
        <Stack.Screen name="forget" component={ForgetScreen} />
        <Stack.Screen name="confrmpass" component={Conformpassword} />
        <Stack.Screen name="hospitalhome" component={PostshiftScreen} />
        <Stack.Screen name="post" component={ShifPostScreen} />
        <Stack.Screen name="postshifts" component={JobfromScreen} />
        <Stack.Screen name="usershifts" component={Applicationshifts} />
        <Stack.Screen name="timesheet" component={TimeSheetscreen} />

       
        
      </Stack.Navigator>
    </NavigationContainer>

    </>
  )
}
