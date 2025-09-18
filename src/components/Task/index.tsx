import { TextProps, TouchableOpacityProps, ViewProps } from 'react-native';
import { Radio, Task as TaskStyled, Text as TextStyled } from './styles';

type Props = ViewProps &
     TextProps &
     TouchableOpacityProps & {
          isActive: boolean;
     };

const Task = ({ children, isActive, ...rest }: Props) => {
     return (
          <TaskStyled {...rest}>
               <Radio isActive={isActive} {...rest} />
               <TextStyled isActive={isActive} {...rest}>
                    {children}
               </TextStyled>
          </TaskStyled>
     );
};

export default Task;
