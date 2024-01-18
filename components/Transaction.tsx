import React from "react";
import { Image, Text, View, Pressable, Alert } from "react-native";

export default function Transaction() {
  const handleButtonPress = () => {
    Alert.alert("Button pressed");
  };

  return (
    <View className="p-20 pt-40 bg-white w-80% max-h-70% flex-1 items-center rounded-20">
      <Image source={require("../image/icon.png")} className="mb-20 w-100 h-100" />
      <Text className="text-green-700 text-18">
        Sent successfully to <Text className="font-bold">Lela Crawford</Text>
      </Text>
      <Text className="pt-20 pb-20 text-green-700 font-bold text-30">$100.00</Text>

      <View className="flex-row items-center justify-center gap-15">
        <Image source={require("../image/avater.png")} className="w-60 h-60" />
        <View className="flex-col items-start justify-center">
          <Text className="font-bold text-20">John Crawfood</Text>
          <Text className="text-gray-500 text-16">John123@gmail.com</Text>
        </View>
      </View>

      <View className="h-2 w-90% mt-40 mb-20 bg-gray-300" />

      <Text className="text-green-700 text-16 p-20 text-center">
        Transaction done on <Text className="font-bold">12 January 2023</Text>. Your reference number is 1234567890.
      </Text>

      <Pressable
        className="w-90% rounded-30 mt-30 bg-gradient-to-br from-orange-500 to-green-700"
        onPress={handleButtonPress}
      >
        <Text className="text-white text-22 font-bold p-20 text-center">Continue</Text>
      </Pressable>
    </View>
  );
}
