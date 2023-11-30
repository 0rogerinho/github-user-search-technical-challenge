import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import * as S from './styles'

export const Home = () => {
  return (
    <S.View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </S.View>
  );
}
