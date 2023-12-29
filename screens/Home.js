import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import {globalStyles} from '../styles/global'
import {useState} from 'react'

const Home = ({navigation}) => {
    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breath of Fresh Air', rating: 5, description: 'lorem ipsum', key: '1'},
        {title: 'Gotta Catch Them All', rating: 4, description: 'lorem ipsum', key: '2'},
        {title: 'Not So Scary', rating: 3, description: 'lorem ipsum', key: '3'},
    ])
    return ( 
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
     );
}

export default Home;