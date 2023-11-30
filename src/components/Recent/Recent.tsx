import React from 'react';  
// React Native
import { FlatList } from 'react-native';   
// ui
import { RecentCard } from '../ui';
// Styles
import * as S from './styles'


const dataUser = [
{
    id: 254,
    name: "Natan Silva figueredo",
    login: "NataSilva",
    location: "Rio de Janeiro",
    avatar_url: "not defined",
    public_repos: 50,
    followers: 11277,
    following: 38,
    repos_url: '',
  },
  {
    id: 255,
    name: "Natan Silva figueredo",
    login: "NataSilva",
    location: "Rio de Janeiro",
    avatar_url: "not defined",
    public_repos: 50,
    followers: 11277,
    following: 38,
    repos_url: '',
  },
  {
    id: 256,
    name: "Natan Silva figueredo",
    login: "NataSilva",
    location: "Rio de Janeiro",
    avatar_url: "not defined",
    public_repos: 50,
    followers: 11277,
    following: 38,
    repos_url: '',
  }
]

export const Recent = () => {
  
  return (
    <S.MainView>
      <S.Text>Recent:</S.Text>
      <FlatList
        data={dataUser}
        renderItem={(data) => (
            <RecentCard key={data.item.id} {...data.item} />
        )}
      />
    </S.MainView>
  );
};

