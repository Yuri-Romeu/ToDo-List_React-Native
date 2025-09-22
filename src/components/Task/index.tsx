import {
     StyleSheet,
     Text,
     TextProps,
     TouchableOpacity,
     TouchableOpacityProps,
     View,
     ViewProps,
} from 'react-native';
import { Radio, Task as TaskStyled, Text as TextStyled } from './styles';

type Props = ViewProps &
     TextProps &
     TouchableOpacityProps & {
          isActive: boolean;
          onAdd: () => void;
          onRemove: () => void;
     };

const Task = ({ children, isActive, onAdd, onRemove, ...rest }: Props) => {
     return (
          <TaskStyled {...rest}>
               <View style={styles.center}>
                    <Radio isActive={isActive} onPress={onAdd} {...rest} />
                    <TextStyled isActive={isActive} {...rest}>
                         {children}
                    </TextStyled>
               </View>

               <TouchableOpacity onPress={onRemove}>
                    <Text style={styles.clear}>X</Text>
               </TouchableOpacity>
          </TaskStyled>
     );
};

const styles = StyleSheet.create({
     center: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
     },

     clear: {
          color: 'red',
          fontWeight: 'bold',
          fontSize: 20,
     },
});

export default Task;
