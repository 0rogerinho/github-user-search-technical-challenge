import React from 'react';
// Config Colors
import { colors } from '../../../../themesConfig';
// Icons
import { FontAwesome } from '@expo/vector-icons';
// Types
import { IRepositories } from '../../../@types';
// Styles
import * as S from './styles'


export const RepositoryCard = (props: IRepositories) => {

  function formatDate(date: string) {
    const option: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    const dataObj = new Date(date);
    return dataObj.toLocaleDateString('eng', option);
  }

  return (
    <S.ViewMain>
      <S.ViewRowBetween>
        <S.Title ellipsizeMode="tail" numberOfLines={2}>
          {props.name}
        </S.Title>

        <S.ViewRow>
          <FontAwesome
            name="circle"
            size={10}
            color={props.language === null ? 'red' : colors.primary}
          />
          <S.Title>
            {props.language ?? 'No Language'}
          </S.Title>
        </S.ViewRow>
      </S.ViewRowBetween>

      <S.Description style={props.description === null && { display: 'none' }}>
        {props.description}
      </S.Description>

      <S.ViewRowBetween>
        <S.ViewRow>
          <FontAwesome name="circle" size={10} color="#9CA3A0" />
          <S.Text>{formatDate(props.created_at)}</S.Text>
        </S.ViewRow>

        <S.ViewRow>
          <FontAwesome
            name="circle"
            size={10}
            color={props.updated_at === null ? 'red' : '#00FF38'}
          />
          <S.Text>{props.updated_at === null ? 'No Updated' : formatDate(props.updated_at)}</S.Text>
        </S.ViewRow>
      </S.ViewRowBetween>
    </S.ViewMain>
  );
};