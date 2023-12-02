// React
import React from 'react';
// React Native
import { ActivityIndicator, Platform } from 'react-native';
// Expo
import Toast from 'react-native-root-toast';
// StatusBar
import { StatusBar } from 'expo-status-bar';
// React Navigation
import { useNavigation } from '@react-navigation/native';
// Types
import { INavigationDataProps, IUser } from '../../@types';
// Icons
import Ionicons from '@expo/vector-icons/Ionicons';
// Services
import { getUserData, getUserRepos } from '../../services/api';
// Components
import { Recent } from '../../components';
// styles
import * as S from './styles';

interface IErrorProps {
  message: string;
  status: boolean;
}

const android = Platform.OS === 'android';

export const Home = () => {
  const [search, setSearch] = React.useState<string>('');
  const [load, setLoad] = React.useState<boolean>(false);
  const [error, setError] = React.useState<IErrorProps>({
    message: '',
    status: false,
  });
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | number>(0);

  const useNavigate = useNavigation<INavigationDataProps>();

  const handlePress = React.useCallback(async () => {
    try {
      setLoad(true);
      setError({ message: '', status: false });

      const userData: IUser = await getUserData(search);

      if (userData) {
        const userRepos = await getUserRepos(userData.repos_url);
        useNavigate.navigate('User', {
          dataUser: userData,
          dataRepos: userRepos,
        });
      }
    } catch (error) {
      setLoad(false);
      error.response.status === 404
        ? setError({ message: `user ${search} not found`, status: true })
        : setError({ message: 'Internal error', status: true });
    } finally {
      setSearch('');
      setLoad(false);
      clearTimeout(timeoutId);
      const time = setTimeout(() => {
        setError({ message: '', status: false });
      }, 4000);
      setTimeoutId(time);
    }
  }, [search]);

  return (
    <S.SafeAreaView android={android}>
      <S.ViewField>
        <S.Separator>
          <Ionicons name="search" size={28} color="#0079FF" />
          <S.TextField
            value={search}
            onChangeText={setSearch}
            placeholder="Search GitHub Username..."
            placeholderTextColor="#768099"
          />
          <Toast visible={error.status}>{error.message}</Toast>
        </S.Separator>
        <S.ButtonSearch
          data={search === ''}
          disabled={search === ''}
          onPress={handlePress}
        >
          {load ? (
            <ActivityIndicator color="white" />
          ) : (
            <S.TextSearch>Search</S.TextSearch>
          )}
        </S.ButtonSearch>
      </S.ViewField>
      <Recent />
      <StatusBar style="auto" />
    </S.SafeAreaView>
  );
};
