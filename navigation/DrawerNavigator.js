import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../screens/Dashboard";
import Child from "../screens/Child";
import Tracking from "../screens/Tracking";
import TabNavigator from "./TabNavigator";


const Drawer = createDrawerNavigator();

const DrawerNavigator=()=>{

    /*return(
        <Drawer.Navigator screenOptions={{drawerPosition:"right"}}>
            <Drawer.Screen name="Dashboard" component={Dashboard}/>
            <Drawer.Screen name="Child" component={Child}/>
            <Drawer.Screen name="Tracking" component={Tracking}/>
        </Drawer.Navigator>
    )*/
        return(
            <Drawer.Navigator screenOptions={{drawerPosition:"right"}}>
                <Drawer.Screen name="HomeTabs" component={TabNavigator}/>
                <Drawer.Screen name="Dashboard" component={Dashboard}/>
                <Drawer.Screen name="Child" component={Child}/>
                <Drawer.Screen name="Tracking" component={Tracking}/>

            </Drawer.Navigator>

        )


}


export default DrawerNavigator;