// React
import React from 'react';
// React Native
import {ActivityIndicator, Platform } from 'react-native';
// StatusBar
import { StatusBar } from 'expo-status-bar';
// Icons
import Ionicons from '@expo/vector-icons/Ionicons';
// Components
import { Recent } from '../../components';
// styles
import * as S from './styles'

const android = Platform.OS === 'android';

export const Home = () => {
  const [search, setSearch] = React.useState<string>('');
  const [load, setLoad] = React.useState<boolean>(false);
  const [timeoutId, setTimeoutId] = React.useState< NodeJS.Timeout | number>(0);

  function handlePress(){
    setLoad(true)
    setTimeout(()=>{
      setLoad(false)
    }, 1000)
  }

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
}
