// React Native
import { Linking } from "react-native"
// Styled-Components
import * as S from "./styles"

interface IModalLinkProps {
  link: string;
  repoName: string;
  showModal: () => void;
}

export const ModalLink = ({link, repoName, showModal}:IModalLinkProps) => {
  const handleLinkPress = () => {
    console.log(link);
    Linking.openURL(link);
    showModal()
  };

  return (
    <S.MainView>
      <S.ViewBox>
      <S.Title>Access the repository</S.Title>
      <S.Text>{repoName}</S.Text>
      <S.View>
        <S.TouchableOpacityYes  onPress={handleLinkPress}>
            <S.Title>Yes</S.Title>
        </S.TouchableOpacityYes> 
        <S.TouchableOpacityNo onPress={() => showModal()}>
            <S.Title>No</S.Title>
        </S.TouchableOpacityNo> 
      </S.View>
      </S.ViewBox>
    </S.MainView>
  )
}
