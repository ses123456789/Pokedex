import { NavigationContainer } from '@react-navigation/native';
 import Navigation from './src/navigation/navigation';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
     
    </NavigationContainer>
   
  );
}

