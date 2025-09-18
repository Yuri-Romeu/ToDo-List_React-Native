import { View } from 'react-native';
import Input from '../components/Input';
import Task from '../components/Task';
import Title from '../components/Title';
import { Container } from '../styles';

const Index = () => {
     return (
          <Container>
               <Title>To-Do List</Title>

               <Input placeholder="Add a new task" />

               <View>
                    <Task isActive>Task 1</Task>
                    <Task isActive={false}>Task 2</Task>
               </View>
          </Container>
     );
};

export default Index;
