// React
import React from 'react';
// React Native
import { Modal, FlatList, Platform } from 'react-native';
// React Navigation
import { useNavigation } from '@react-navigation/native';
// Icons
import { Feather, Entypo } from '@expo/vector-icons';
// Types
import { INavigationProps } from '../../@types';
// Colors Config
import { colors } from '../../../themesConfig';
// Components
import { ModalLink, RepositoryCard } from '../../components';
// Styles
import * as S from './styles'


const dataUser ={
      id: 254,
      name: "Natan Silva figueredo",
      login: "NataSilva",
      location: "Rio de Janeiro",
      avatar_url: "not defined",
      public_repos: 50,
      followers: 11277,
      following: 38,
      repos_url: '',
    }
  
const dataRepos = [
  {
    name: 'GitHub-Search',
    language: null,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    created_at: '2023-11-30',
    updated_at: '2023-11-30',
    html_url: '',
  },
  {
    name: 'GitHub-Search',
    language: 'typescript',
    description: null,
    created_at: '2023-11-30',
    updated_at: '2023-11-30',
    html_url: '',
  },
  {
    name: 'GitHub-Search',
    language: 'typescript',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    created_at: '2023-11-30',
    updated_at: '2023-11-30',
    html_url: '',
  }
]


const android = Platform.OS === 'android';

interface IStatics {
  title: string;
  text: number;
}

interface IReposModalProps {
  name: string;
  link: string;
}

const Statics = ({ title, text}: IStatics) => (
  <S.ViewStatic>
    <S.Title>{title}</S.Title>
    <S.Text>{text}</S.Text>
  </S.ViewStatic>
);

export const User = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalRepo, setModalRepo] = React.useState<IReposModalProps | null>(
    null,
  );

  const navigation = useNavigation<INavigationProps>();

  async function handleReturn(){
    navigation.navigate('Home')
  }

  async function handleShowModal(index: number) {
    const data = {
      name: dataRepos[index].name,
      link: dataRepos[index].html_url,
    };
    setModalRepo(data);
    setShowModal(true);
  }

  return (
    <S.SafeAreaView android={android}>
      <S.MainView>
        <S.Title>User: {dataUser.id}</S.Title>

        <S.ViewCard>
          <S.ViewCardUser>
            <S.Avatar source={require('../../../assets/favicon.png')} />
            <S.TextName ellipsizeMode="tail" numberOfLines={2}>
              {dataUser.name ?? 'No Name'}
            </S.TextName>
            <S.View>
            <S.TextLogin ellipsizeMode="tail" numberOfLines={1}>@{dataUser.login}</S.TextLogin>
            <S.ViewRowGap>
              <Feather name="map-pin" size={16} color="white" />
              <S.TextLocation ellipsizeMode="tail" numberOfLines={1}>
                {!dataUser.location ? 'No Location' : dataUser.location}
              </S.TextLocation>
            </S.ViewRowGap>
            </S.View>
          </S.ViewCardUser>

          <S.ViewStatics>
            <Statics title='Repositories' text={dataUser.public_repos} />
            <Statics title='Followers' text={dataUser.followers} />
            <Statics title='Following' text={dataUser.following} />
          </S.ViewStatics>

          <S.ViewColumn>
            <S.ViewBoxRepos>
              <Entypo name="book" size={20} color={colors.primary} />
              <S.Title>Repositories</S.Title>
            </S.ViewBoxRepos>
          </S.ViewColumn>
          {dataRepos && (
            <FlatList
              style={{ maxHeight: 480 }}
              data={dataRepos}
              renderItem={(data) => (
                <S.TouchableOpacity
                  key={data.index}
                  onPress={() => handleShowModal(data.index)}
                >
                  <RepositoryCard {...data.item} />
                </S.TouchableOpacity>
              )}
            />
          )}
        </S.ViewCard>
      <S.TouchableOpacityReturn onPress={handleReturn}>
          <S.Title>Return</S.Title>
      </S.TouchableOpacityReturn>
      </S.MainView>

      {modalRepo && (
        <Modal visible={showModal} transparent={true}>
          <ModalLink
            showModal={() => setShowModal(false)}
            link={modalRepo?.link}
            repoName={modalRepo?.name}
          />
        </Modal>
      )}
    </S.SafeAreaView>
  );
};