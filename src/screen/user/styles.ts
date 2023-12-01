// styled Components
import styled from "styled-components/native";
// Colors Config 
import { colors } from "../../../themesConfig";

export const SafeAreaView = styled.SafeAreaView<{ android: boolean }>`
 flex: 1;
 background-color: ${colors.background};
 padding-top: ${(android) => android ? '80px' : '20px'};
 align-items: center;
 gap: 20px;
`;

export const MainView = styled.View`
  width: 95%;
  gap: 8px;
`;

export const View = styled.View`
  width: 125px;
  gap: 8px;
`;

export const ViewColumn = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: white;
`;

export const Text = styled.Text`
  color: white;
  
`;

export const ViewCard = styled.View`
  max-height: 89%;
  background-color: ${colors.backgroundSecondary};
  border-radius: 10px;
  align-items: center;
  padding: 16px 14px;
  gap: 20px;
`;

export const ViewStatic = styled.View`
  align-items: center;
  border-radius: 10px;
  gap: 5px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  object-fit: contain;
`;

export const TextName = styled.Text`
  max-width: 110px;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

export const TextLogin = styled.Text`
  color: ${colors.primary};
`;

export const ViewRowGap = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const TextLocation = styled.Text`
  color: white;
`;

export const ViewCardUser = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 30px
`;

export const ViewStatics = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${colors.background};
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
`;

export const ViewBoxRepos = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  max-width: 100%;
`;

export const TouchableOpacityReturn = styled.TouchableOpacity`
  width: 50%;
  margin:  auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  background-color: ${colors.primary};
  border-radius: 10px;
  margin-top: 10px;
  gap: 5px;
`;
