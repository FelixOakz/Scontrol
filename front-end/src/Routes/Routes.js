import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome/Welcome";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ApiTest from "../pages/ApiTest/apiTest";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <ApiTest />
    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="Welcome"
    //     component={Welcome}
    //     options={{ headerShown: false }}
    //   />
    //   <Stack.Screen
    //     name="SignIn"
    //     component={SignIn}
    //     options={{ headerShown: false }}
    //   />
    //   <Stack.Screen
    //     name="SignUp"
    //     component={SignUp}
    //     options={{ headerShown: false }}
    //   />
    // </Stack.Navigator>
  );
};

export default Routes;
