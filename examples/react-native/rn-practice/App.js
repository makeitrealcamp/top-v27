import { NavigationContainer } from "@react-navigation/native";
import { FavoritesProvider } from './FavoritesProvider'
import BottomTabs from "./components/bottomTabs/BottomTabs";

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <BottomTabs/>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
