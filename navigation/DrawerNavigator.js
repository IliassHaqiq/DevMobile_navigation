import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../screens/Dashboard";
import Child from "../screens/Child";
import Tracking from "../screens/Tracking";


const Drawer = createDrawerNavigator();

const DrawerNavigator=()=>{

    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={Dashboard}/>
            <Drawer.Screen name="Child" component={Child}/>
            <Drawer.Screen name="Tracking" component={Tracking}/>


        </Drawer.Navigator>
    )


}


export default DrawerNavigator;