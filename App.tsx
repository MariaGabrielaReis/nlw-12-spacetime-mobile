import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  if (!hasLoadedFonts) return null;

  return (
    <View className="bg-gray-900 flex-1 items-center justify-center">
      <Text className="text-gray-50 text-4xl">Hi!</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}
