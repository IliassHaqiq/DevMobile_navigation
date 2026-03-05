    import { createNativeStackNavigator } from "@react-navigation/native-stack";
    import Home from "../screens/Home";
    import Login from "../screens/Login";
    import Dashboard from "../screens/Dashboard";
import DrawerNavigator from "./DrawerNavigator";





    const Stack = createNativeStackNavigator();

    const StackNavigator=()=> 
    {
        return(
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="DashboardDrawer" component={DrawerNavigator}/>
                

            </Stack.Navigator>
        )

    }


    export default StackNavigator;