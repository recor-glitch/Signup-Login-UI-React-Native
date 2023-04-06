import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {variables} from '../../constants';

async function getGoogleOAuth(): Promise<any> {
  // const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  // const options = {
  //   redirect_uri: variables.GOOGLE_OAUTH_REDIRECT_URI,
  //   client_id: variables.GOOGLE_CLIENT_ID,
  //   access_type: 'offline',
  //   response_type: 'code',
  //   prompt: 'consent',
  //   scope: [
  //     'https://www.googleapis.com/auth/userinfo.profile',
  //     'https://www.googleapis.com/auth/userinfo.email',
  //   ].join(' '),
  // };

  // const qs = new URLSearchParams(options);
  // return `${rootUrl}?${qs.toString()}`;

  GoogleSignin.configure();

  if (await GoogleSignin.hasPlayServices()) {
    try {
      const user = await GoogleSignin.signIn();
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}

export default getGoogleOAuth;
