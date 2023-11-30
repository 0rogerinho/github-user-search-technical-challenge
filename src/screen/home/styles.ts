// Styled Components
import styled from "styled-components/native";
// Colors Config
import { colors } from "../../../themesConfig";

 export const SafeAreaView = styled.SafeAreaView<{ android: boolean }>`
 flex: 1;
 background-color: #141d2f;
 padding-top: ${(android) => android ? '80px' : '20px'};
 align-items: center;
 gap: 20px;
`;

export const ViewField = styled.View`
 flex-direction: row;
 background-color: #1e2a47;
 width: 95%;
 height: 60px;
 padding: 10px;
 padding-left: 12px;
 border-radius: 6px;
 justify-content: space-between;
`;

export const Separator = styled.View`
 position: relative;
 flex-direction: row;
 align-items: center;
`;

export const TextField = styled.TextInput`
 width: 250px;
 padding-left: 16px;
 color: white;
`;

export const ButtonSearch = styled.TouchableOpacity<{ data: boolean }>`
 justify-content: center;
 align-items: center;
 width: 70px;
 background-color: ${({ data }) => ` ${data ? '#085CB9' : colors.primary}`};
 padding: 10px 10px;
 border-radius: 6px;
`;

export const TextSearch = styled.Text`
 color: white;
`;
