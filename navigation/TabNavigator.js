import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import Child from "../screens/Child";
import Tracking from "../screens/Tracking";


const tab = createBottomTabNavigator();

const TabNavigator=()=>{
    return(
        <tab.Navigator>
            <tab.Screen name="Dashboard" component={Dashboard}/>
            <tab.Screen name="Child" component={Child}/>
            <tab.Screen name="Tracking" component={Tracking}/>
        </tab.Navigator>
    );
}

export default TabNavigator;