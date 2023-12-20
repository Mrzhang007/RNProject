import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

export function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text>hello world</Text>
      <Button
        title="View Profile"
        onPress={() => {
          navigation.navigate('Profile' as never);
        }}></Button>
    </View>
  );
}
