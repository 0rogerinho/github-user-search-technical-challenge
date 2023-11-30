// React
import React from 'react';
// React Native
import { TouchableOpacity } from 'react-native';
// Icons
import { Feather } from '@expo/vector-icons';
// Types
import { IUser } from '../../../@types';
// styles
import * as S from './styles'


export const RecentCard = (props: IUser) => {
  const [load, setLoad] = React.useState(false);

  const handlePress = React.useCallback(async () => {
    setLoad(true);
    setTimeout(()=>setLoad(false), 1000)
  }, []);

  return (
    <TouchableOpacity onPress={handlePress}>
      <S.MainView>
        {!load && (
          <>
            <S.Avatar source={require('../../../../assets/favicon.png')} />
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