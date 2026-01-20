// App.tsx - Main app entry point
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ChatProvider } from './src/stores';
import { ChatScreen } from './src/screens';

export default function App() {
  return (
    <SafeAreaProvider>
      <ChatProvider>
        <ChatScreen />
      </ChatProvider>
    </SafeAreaProvider>
  );
}
