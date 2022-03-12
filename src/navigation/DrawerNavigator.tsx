import { createDrawerNavigator, DrawerContentScrollView, } from '@react-navigation/drawer'
import {Text, StyleSheet, SafeAreaView } from 'react-native'
import { ChannelList } from 'stream-chat-expo'
import { useAuthContext } from '../contexts/AuthContext'
import ChannelScreen from '../screens/ChannelScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={DrawerContent}>
            <Drawer.Screen name="ChannelScreen" component={ChannelScreen} options={{title: 'Channel'}}/>
        </Drawer.Navigator>
    )
}

const DrawerContent = (props) => {
    const onChannelSelect = (channel) => {
        // navigate to screen for this screen
        props.navigation.navigate("ChannelScreen", {channel})
    }

    const {userId} = useAuthContext()
    
    const filters = { members: { $in: [userId] } }
    const publicFilters = { type: 'livestream' }

    return (
        <SafeAreaView {...props} style={{flex: 1}}>
            <Text style={styles.title}>Code With Me</Text>
            <Text style={styles.groupTitle}>Public channels</Text>
            <ChannelList onSelect={onChannelSelect} filters={ publicFilters} />
            <Text style={styles.groupTitle}>Your channels</Text>
            
            <ChannelList onSelect={onChannelSelect} filters={filters} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 16,
        margin: 10
    },
    groupTitle: {
        color: 'white',
        margin: 10,
    },
})

export default DrawerNavigator;