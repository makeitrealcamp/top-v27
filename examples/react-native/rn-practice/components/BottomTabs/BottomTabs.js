import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Characters from "../../screens/Characters";
import Favorites from "../../screens/Favorites";
import DetailScreen from "../../screens/Detail";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Full Character List"
        component={Characters}
        options={{ title: "Full Character List" }}
      />
      <Stack.Screen name="Character Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen name="Full Character List" component={HomeStack} />
      <Tab.Screen name="Your Favorites" component={FavoritesStack} />
    </Tab.Navigator>
  );
};
export default BottomTabs;
