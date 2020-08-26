import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './component/goalItem';
import GoalInput from './component/userGoalInput';

export default function App() {
  const [courseGoal, setCourseGoal] = useState('');
  const [goalList, setGoalList] = useState([]);
  const [isModalVisibale, setIsModalVisiable] = useState(false)
  const setGoal = (inputTextValue) => {
    setCourseGoal(inputTextValue)
  };

  const updateGoalList = () => {
    if (courseGoal) {
      setGoalList(goal => [...goalList, { key: Math.random().toString(), value: courseGoal }]);
      setCourseGoal('')
      setIsModalVisiable(!isModalVisibale)
    }
  }
  const onDelete = (key) => {
    setGoalList(goal => {
      return goal.filter(data => data.key != key)
    });
  }

  return (
    <View style={style.screen}>
      <Button title="Add New Goal" onPress={() => setIsModalVisiable(!isModalVisibale)} />
      <GoalInput
        visibale={isModalVisibale}
        setGoal={setGoal}
        courseGoal={courseGoal}
        updateGoalList={updateGoalList} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={goalList}
        renderItem={itemData => <GoalItem
          title={itemData.item.value}
          keyValue={itemData.item.key}
          onDelete={(key) => onDelete(key)} />}
      >
      </FlatList>
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    padding: 40
  }
})

