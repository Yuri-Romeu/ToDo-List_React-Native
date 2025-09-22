import { useState } from 'react';
import { View } from 'react-native';
import Input from '../components/Input';
import Task from '../components/Task';
import Title from '../components/Title';
import { Container } from '../styles';

const Index = () => {
     const [taskTemp, setTaskTemp] = useState('');

     const [taskList, setTaskList] = useState([
          { id: 1, title: 'Task 1', isActive: false },
          { id: 2, title: 'Task 2', isActive: true },
          { id: 3, title: 'Task 3', isActive: false },
     ]);

     const handleAddTask = () => {
          const newTask = { id: Date.now(), title: taskTemp, isActive: false };
          setTaskList([...taskList, newTask]);
          setTaskTemp('');
     };

     return (
          <Container>
               <Title>To-Do List</Title>

               <Input
                    placeholder="Add a new task"
                    value={taskTemp}
                    onChangeText={setTaskTemp}
                    onEndEditing={handleAddTask}
               />

               <View>
                    {taskList.map(task => (
                         <Task key={task.id} isActive={task.isActive}>
                              {task.title}
                         </Task>
                    ))}
               </View>
          </Container>
     );
};

export default Index;
