import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import PaintsList from './components/PaintsList';
import About from './components/About';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="PaintsList">
        <Stack.Screen name="PaintsList" component={PaintsList} />
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "About us" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
      <PaintsList/>
      <StatusBar style="auto"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
