// Styled Componentsexport 
import styled from "styled-components/native"
// Colors Config
import { colors } from "../../../themesConfig"

export const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(20, 29, 47, 0.30);
`
export const ViewBox = styled.View`
  width: 80%;
  padding: 20px 20px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundSecondary};
  border-radius: 10px;
  gap: 20px;
`

export const Title = styled.Text`
color: white;
font-size: 20px;
font-weight: bold;
`
export const Text = styled.Text`
text-align: center;
color: rgba(299,299,299, 0.50);;
font-size: 16px;

`

export const View = styled.View`
  width: 80%;
  padding: 10px 0px;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  align-items: center;
`
export const TouchableOpacityYes = styled.TouchableOpacity`
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: green;
`

export const TouchableOpacityNo = styled.TouchableOpacity`
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: red;
`
