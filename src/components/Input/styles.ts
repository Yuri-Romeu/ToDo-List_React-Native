import styled from 'styled-components/native';

export const Input = styled.TextInput`
     background-color: #f0f0f0;
     border-radius: 5px;
     padding: 20px;
     margin-bottom: 14px;
     border: 1px solid #1d1a1aff;
     color: #1d1a1aff;
     font-size: 16px;
     position: relative;

     &::placeholder {
          color: #787a80;
          font-size: 18px;
     }
`;

export const Add = styled.TouchableOpacity`
     width: 40px;
     height: 40px;
     background-color: #e2e2e2ff;
     position: absolute;
     top: 12.5px;
     right: 10px;
     border-radius: 5px;
     justify-content: center;
     align-items: center;
     border-radius: 50%;

     & > Text {
          font-size: 24;
          color: '#1D1A1A';
     }
`;
