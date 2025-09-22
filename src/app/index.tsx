import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import Input from '../components/Input';
import Task from '../components/Task';
import Title from '../components/Title';
import { Container } from '../styles';

const Index = () => {
     const [taskTemp, setTaskTemp] = useState('');
     const [taskList, setTaskList] = useState<{ id: number; title: string; isActive: boolean }[]>(
          [],
     );

     useEffect(() => {
          const loadTasks = async () => {
               try {
                    const tasks = await AsyncStorage.getItem('TASKS');
                    if (tasks) setTaskList(JSON.parse(tasks));
               } catch (error) {
                    console.log('Erro ao carregar tarefas', error);
               }
          };

          loadTasks();
     }, []);

     useEffect(() => {
          const saveTasks = async () => {
               try {
                    await AsyncStorage.setItem('TASKS', JSON.stringify(taskList));
               } catch (error) {
                    console.log('Erro ao salvar tarefas', error);
               }
          };

          saveTasks();
     }, [taskList]);

     const handleAddTask = () => {
          if (!taskTemp.trim() || taskList.some(task => task.title === taskTemp)) return;
          const newTask = { id: Date.now(), title: taskTemp, isActive: false };
          setTaskList([...taskList, newTask]);
          setTaskTemp('');
     };

     const handleRemoveTask = (id: number) => {
          const newTaskList = taskList.filter(task => task.id !== id);
          setTaskList(newTaskList);
     };

     const handleToggleTask = (id: number) => {
          const newTaskList = taskList.map(task =>
               task.id === id ? { ...task, isActive: !task.isActive } : task,
          );
          setTaskList(newTaskList);
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
                         <Task
                              key={task.id}
                              isActive={task.isActive}
                              onAdd={() => handleToggleTask(task.id)}
                              onRemove={() => handleRemoveTask(task.id)}
                         >
                              {task.title}
                         </Task>
                    ))}
               </View>
          </Container>
     );
};

export default Index;
