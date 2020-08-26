import React from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    return <Modal visible={props.visibale}>
                <View style={style.inputContener}>
                    <TextInput
                        placeholder="Course Goal"
                        style={style.input}
                        onChangeText={props.setGoal}
                        value={props.courseGoal}
                    />
                    <Button title="Add" onPress={props.updateGoalList} />
                </View>
    </Modal>
}
const style = StyleSheet.create({
    inputContener: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: "80%",
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom:10
    },
})

export default GoalInput;
