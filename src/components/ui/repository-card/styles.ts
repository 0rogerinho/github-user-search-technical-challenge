// Styled Components
import styled from "styled-components/native";
// Colors Config
import { colors } from "../../../../themesConfig";

export const ViewMain = styled.View`
  width: 100%;
  background-color: ${colors.background};
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  max-width: 180px;
  font-weight: 600;
  font-size: 14px;
  color: white;
`;

export const Text = styled.Text`
  font-size: 10px;
  color: white;
`;

export const Description = styled.Text`
  width: 100%;
  font-size: 12px;
  margin: 5px 0px;
  color: #dee7ff;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

export const ViewRowBetween = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ViewRowGap = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
