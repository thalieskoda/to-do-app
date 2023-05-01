import { Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';


const Profile = () => {

    return(
        <View>
            <Text>Profile page</Text>
            <Icon name="user" size={30} color="#55BCF6" onPress={handleProfile} />
        </View>
    )
}

export default Profile