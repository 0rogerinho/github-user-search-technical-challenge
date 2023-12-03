// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// Types
import { IUser } from '../@types';


export const useStorage = () => {
  const getUser = async (key:string) => {
    try {
      const User = await AsyncStorage.getItem(key);

      return JSON.parse(User as string) || [];
    } catch (error) {
      console.log('error when searching', error);
      return [];
    }
  };

  const saveUser = async (key:string, value:IUser) => {
    try {
      const user: IUser[] = await getUser(key);

      if(user.length === 10){
        user.pop()
      }
      
      if(!user.some((data)=> data.login === value.login)){
        user.unshift(value)
      }

      console.log(user.length === 9);

       console.log(user.map(({login})=> login))
      
      const newUser =  user

      await AsyncStorage.setItem(key, JSON.stringify(newUser));
    } catch (error) {
      console.log('Error when save password', error);
    }
  };

  return { getUser, saveUser };
};

