export interface IUser {
  id: number;
  name: string;
  login: string;
  location: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  repos_url: string;
  load?: boolean
};