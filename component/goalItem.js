import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return <TouchableOpacity onPress={()=>props.onDelete(props.keyValue)}>
        <View style={style.listItem}>
            <Text >{props.title}</Text>
        </View>
    </TouchableOpacity>
}
const style = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem