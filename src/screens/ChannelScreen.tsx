import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Channel, MessageInput, MessageList } from 'stream-chat-expo';

export default function ChannelScreen() {
    const route = useRoute()
    const navigation = useNavigation()
    const channel = route.params?.channel;
navigation.setOptions({title: channel?.data?.name || 'Channel'})

    if (!channel) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Select a channel from the list</Text>
            </View>
        )
    }
  return (
    <Channel channel={channel} key={channel.data.name} forceAlignMessages='left'>
        <MessageList />
        <MessageInput />
    
    </Channel>
  )
}

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    errorText: {
        color: 'white',
        fontSize: 16
    },
})