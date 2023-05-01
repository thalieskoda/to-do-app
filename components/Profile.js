import { Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';


const Profile = ({navigation}) => {

    return(
        <View>
            <Text>Profile page</Text>
            <Icon name="user" size={30} color="#55BCF6" onPress={()=> navigation.navigate('Profile', {name:"thalie"})} />
        </View>
    )
}

export default Profile