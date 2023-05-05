import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Camera from '../components/devices/Camera';
import ImagePicker from '../components/devices/ImagePicker';
import Map from '../components/devices/Map';

const Tab = createBottomTabNavigator();

// Incons from https://fontawesome.com/
const iconName = {
  Camera: 'camera',
  ImagePicker: 'image',
  Map: 'map-marker',
}

const LandingScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icon = iconName[route.name];
          return <FontAwesome name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Camera" component={Camera}  />
      <Tab.Screen name="ImagePicker" component={ImagePicker}  />
      <Tab.Screen name="Map" component={Map}  />
    </Tab.Navigator>
  )

}


export default LandingScreen