import React from 'react';  
// React Native
import { FlatList } from 'react-native';  
// React Navigation
import { useIsFocused } from '@react-navigation/native';  
// Types
import { IUser } from '../../@types';
// Hooks
import { useStorage } from '../../hooks';
// ui
import { RecentCard } from '../ui';
// Styles
import * as S from './styles'

export const Recent = () => {
  const [dataUser, setDataUser] = React.useState<IUser[] | null>(null);

  const { getUser } = useStorage();

  const focus = useIsFocused();

  React.useEffect(() => {
    async function test() {
      const data = await getUser('@user');
      setDataUser(data);
    }
    test();
  }, [focus]);

  return (
    <S.MainView>
      <S.Title>Recent:</S.Title>
      { dataUser && dataUser.length === 0 && <S.Text>Search for a user</S.Text>}
      <FlatList
        data={dataUser}
        renderItem={(data) => (
            <RecentCard key={data.item.id} {...data.item} />
        )}
      />
    </S.MainView>
  );
};

