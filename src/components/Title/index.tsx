import { ReactNode } from 'react';
import { TextProps } from 'react-native';
import { Title as TitleStyled } from './styles';

type Props = TextProps & {
     children: ReactNode;
};

const Title = ({ children, ...rest }: Props) => {
     return <TitleStyled {...rest}>{children}</TitleStyled>;
};

export default Title;
