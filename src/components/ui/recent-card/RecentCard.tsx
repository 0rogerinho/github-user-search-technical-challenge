// React
import React from 'react';
// React Native
import { TouchableOpacity } from 'react-native';
// React Navigation
import { useNavigation } from '@react-navigation/native';
// Icons
import { Feather } from '@expo/vector-icons';
// Types
import { INavigationDataProps, IUser } from '../../../@types';
// Service
import { getUserRepos } from '../../../services/api';
// styles
import * as S from './styles'

export const RecentCard = (props: IUser) => {
  const [load, setLoad] = React.useState(false);

  const navigation = useNavigation<INavigationDataProps>();

  const handlePress = React.useCallback(async () => {
    setLoad(true);
    try {
      const dataRepos =  await getUserRepos(props.repos_url)
      navigation.navigate('User', {
        dataUser: props,
        dataRepos: dataRepos,
      });
    } finally {
      setLoad(false);
    }
  }, []);

  return (
    <TouchableOpacity onPress={handlePress}>
      <S.MainView>
        {!load && (
          <>
            <S.Avatar source={{ uri: props.avatar_url }} />
            <S.TextName ellipsizeMode="tail" numberOfLines={1}>
              {props.name ?? 'No Name'}
            </S.TextName>
            <S.TextLogin ellipsizeMode="tail" numberOfLines={1}>
              @{props.login}
            </S.TextLogin>
            <S.View>
              <Feather name="map-pin" size={16} color="white" />
              <S.Text ellipsizeMode="tail" numberOfLines={1}>
                {props.location ?? 'No Location'}
              </S.Text>
            </S.View>
          </>
        )}

        {load && <S.ActivityIndicator color="white" />}
      </S.MainView>
    </TouchableOpacity>
  );
};