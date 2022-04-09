
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './components/bottomTabNavigator';
import SearchScreen from './screens/search';
import TransactionScreen from './screens/transaction';

export default function App() {
  return (

      <BottomTabNavigator/>
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
