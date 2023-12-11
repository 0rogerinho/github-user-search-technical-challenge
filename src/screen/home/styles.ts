// Styled Components
import styled from "styled-components/native";
// Colors Config
import { colors } from "../../../themesConfig";

 export const SafeAreaView = styled.SafeAreaView<{ android: boolean }>`
 flex: 1;
 padding: 0px 0px 6px 0px;
 background-color: #141d2f;
 padding-top: ${({android}) => android ? '10%' : '15%'};
 align-items: center;
 gap: 20px;
`;

export const ViewField = styled.View`
 position: relative;
 justify-content: space-between;
 flex-direction: row;
 background-color: #1e2a47;
 width: 95%;
 height: 60px;
 padding: 0px 10px;
 padding-left: 12px;
 border-radius: 6px;
 align-items: center;
`;

export const TextField = styled.TextInput`
 flex: 1;
 height: 100%;
 padding-left: 16px;
 padding-right: 16px;
 font-size: 16px ;
 color: white;
`;

export const ButtonSearch = styled.TouchableOpacity<{ data: boolean }>`
 flex-basis: 80px;
 justify-content: center;
 align-items: center;
 background-color: ${({ data }) => ` ${data ? '#085CB9' : '#0070F0'}`};
 padding: 14px 0px;
 border-radius: 6px;
`;

export const TextSearch = styled.Text`
 letter-spacing: 0.6px;
 font-weight: 600;
 color: white;
`;
