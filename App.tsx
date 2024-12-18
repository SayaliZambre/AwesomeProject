import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => (
  <ClerkProvider frontendApi="<your-clerk-frontend-api>">
    <AppNavigator />
  </ClerkProvider>
);

export default App;
