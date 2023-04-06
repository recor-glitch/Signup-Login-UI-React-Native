import axios, {AxiosResponse} from 'axios';
import {baseurl} from '../../constants';

const endpoint1 = '/api/users/oauth';
const login = '/api/users/login';
const register = '/api/users/signup';
const health = '/api/users/healthCheck';
const logout = '/api/users/logout';
let accessToken = '';
let refreshToken = '';

export async function demoPost(): Promise<any> {
  const res = await axios.get(`${baseurl + health}`);

  console.log(res);

  if (res.status === 200) {
    return res;
  } else {
    return;
  }
}

type loginProps = {
  name: String;
  pass: String;
};

export async function loginUser(data: loginProps): Promise<any> {
  const response = await axios.post(`${baseurl + login}`, {
    email: data.name,
    password: data.pass,
  });

  accessToken = response.data['accessToken'];
  refreshToken = response.data['refreshToken'];

  if (response.status === 200) {
    return response;
  } else {
    throw new Error('something went wrong');
  }
}

type registerProps = {
  email: string;
  name: string;
  password: string;
};

export async function createUserWithEmailAndPass(
  data: registerProps,
): Promise<AxiosResponse> {
  const response = await axios.post(`${baseurl + register}`, {
    email: data.email,
    name: data.name,
    password: data.password,
  });
  return response;
}

export async function logoutUser(): Promise<any> {
  const response = await axios.delete(`${baseurl + logout}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'x-refresh': refreshToken,
    },
  });
  accessToken = response.data['accessToken'];
  refreshToken = response.data['refreshToken'];

  console.log(accessToken, refreshToken);
  return response;
}
