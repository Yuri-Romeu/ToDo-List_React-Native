import { StyleSheet, Text, TextInputProps, TouchableOpacityProps, View } from 'react-native';
import { Add, Input as InputStyled } from './styles';

type Props = TextInputProps & TouchableOpacityProps & {};

const Input = ({ ...rest }: Props) => {
     return (
          <View style={styles.container}>
               <InputStyled {...rest} />

               <Add>
                    <Text>+</Text>
               </Add>
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          position: 'relative',
     },
});

export default Input;
