import React from 'react';
import { View} from 'react-native';
import Transaction from './components/Transaction';


export default function App() {
  return (
    <View className='flex-1 flex-col bg-blue-500 items-center justify-center'>
      <Transaction />
    </View>
  );
}

// https://github.com/RabinThapa1998/expo-typescript-native-wind-starter/blob/main/App.tsx