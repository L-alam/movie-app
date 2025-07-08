import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-dark-100 text-4xl font-bold">Welcome!</Text>
      <Link href="/onboarding">Onboarding</Link>
      <Link href="/movie/avangers">Avenger Movie</Link>
    </View>
  );
}
