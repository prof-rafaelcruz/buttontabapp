import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Button } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default function HomeDrawer({ onLogout }) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home">
        {() => <HomeScreen />}
      </Drawer.Screen>
      <Drawer.Screen name="Cofiguration" component={DummyScreen('Configuration')} />
      <Drawer.Screen name="Help" component={DummyScreen('Help')} />
      <Drawer.Screen name="Logout">
        {() => <LogoutScreen onLogout={onLogout} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

function DummyScreen(title) {
  return () => (
    <View style={styles.center}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

function LogoutScreen({ onLogout }) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Tem certeza que deseja sair?</Text>
      <Button title="Confirmar Logoff" onPress={onLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});
