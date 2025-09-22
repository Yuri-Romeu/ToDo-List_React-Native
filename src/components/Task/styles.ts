import styled from 'styled-components/native';

type Props = {
     isActive: boolean;
};

export const Task = styled.View`
     margin: 10px 0;
     flex-direction: row;
     align-items: center;
     margin-bottom: 14px;
     justify-content: space-between;
     gap: 10px;
     background-color: #f0f0f0;
     border-radius: 5px;
     padding: 10px;
`;

export const Text = styled.Text<Props>`
     font-size: 18px;
     text-decoration: ${props => (props.isActive ? 'line-through' : 'none')};
     color: ${props => (props.isActive ? '#318159ff' : '#1d1a1aff')};
`;

export const Radio = styled.TouchableOpacity<Props>`
     width: 20px;
     height: 20px;
     background-color: #e2e2e2ff;
     border-radius: 50%;
     border: 2px solid #1d1a1aff;
     position: relative;

     ${props => props.isActive && `background-color: #318159ff;`}

     .isActive {
          &::after {
               content: 'X';
               width: 8px;
               height: 8px;
               border-radius: 50%;
               background-color: #318159ff;
               position: absolute;
               top: 6px;
               left: 6px;
          }
     }
`;
