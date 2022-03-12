import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, TouchableOpacity } from 'react-native';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { OverlayProvider, Chat, ChannelList, Channel, MessageList, MessageInput, DeepPartial, Theme } from 'stream-chat-expo'

import { StreamChat } from 'stream-chat'
import { useEffect, useState } from 'react';
import AuthContextComponent from './src/contexts/AuthContext';
import { StreamColors } from './src/constants/Colors';

const API_KEY = "v5qh3ywurxv6"
const client = StreamChat.getInstance(API_KEY)

const theme: DeepPartial<Theme> = {
  colors: StreamColors,
  
}

export default function App() {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    
    return () => {
      // client.disconnectUser()
    }
  }, [])
  

  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthContextComponent>
          <OverlayProvider value={{ style: theme}}>
            <Chat client={client}>
              <Navigation colorScheme={"dark"} />
              

            </Chat>
            </OverlayProvider>
          </AuthContextComponent>
        <StatusBar style="light"/>
      </SafeAreaProvider>
    );
  }
}
