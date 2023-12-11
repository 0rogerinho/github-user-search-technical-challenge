// styled Components
import styled from "styled-components/native";
// Colors Config 
import { colors } from "../../../themesConfig";

export const SafeAreaView = styled.SafeAreaView<{ android: boolean }>`
 flex: 1;
 background-color: ${colors.background};
 padding-top: ${({android}) => android ? '4%' : '10%'};
 align-items: center;
 gap: 20px;
`;

export const MainView = styled.View`
  flex: 1;
  margin: 12px 10px 0px 10px;
  gap: 5px;
`;

export const View = styled.View`
  flex: 1;
  gap: 8px;
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
  flex: 1;
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
  flex: 1;
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
  flex: 1;
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
  align-items: center;
  justify-content: center;
  padding: 10px 50px;
  background-color: ${colors.primary};
  border-radius: 5px;
  margin-top: 4px;
  margin-bottom: 5px;
  gap: 5px;
`;