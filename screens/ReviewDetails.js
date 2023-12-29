import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
const ReviewDetails = ({navigation}) => {
    return ( 
        <View style={globalStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Button title="go back" onPress={() => navigation.goBack()} />
        </View>
     );
}
 
export default ReviewDetails;