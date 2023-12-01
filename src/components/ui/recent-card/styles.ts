// Styled Components
import styled from "styled-components/native";
// Colors Config
import { colors } from "../../../../themesConfig";

export const MainView = styled.View`
  width: 100%;
  height: 72px;
  flex-direction: row;
  background-color: ${colors.backgroundSecondary};
  border-radius: 6px;
  gap: 15px;
  align-items: center;
  padding: 16px 14px;
  margin-bottom: 10px;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  width: 100%;
`;

export const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  object-fit: contain;
`;

export const TextName = styled.Text`
  width: 100px;
  font-size: 12px;
  font-weight: 600;
  color: white;
`;
export const TextLogin = styled.Text`
  width: 80px;
  font-size: 14px;
  color: ${colors.primary};
`;
export const View = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Text = styled.Text`
  width: 70px;
  font-size: 12px;
  color: white;
`;
