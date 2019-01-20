import fetch from 'isomorphic-fetch';

// not being for now
export async function login() {
  console.log('trying to login boiii');
  const URI = 'https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=7100ea2475d847b3b5d6d99d5e53e6c8&scope=' +
  encodeURIComponent('user-read-private user-read-email')
  + '&redirect_uri=' + encodeURIComponent('https://www.connorkent.com');

  let niceRes;
  console.log('you a bitch, bitch!');
  console.log('this is the phat uri we using: ', URI);
  let res = await fetch(URI);
  console.log('this is the res: ', res);
  return niceRes;


//
// const apiPrefix = 'https://accounts.spotify.com/api';
// const base64credentials = 'OGNmNTM4MGY1ODhjNGVhMTg4NDk2ZTI1NGVkNjM3NjA6MjZjZjkxMTg2ZDdlNDBhMWI1ZmVlY2Y0NDlmNzk4MWI=';
//
// export default async function login4Real() {
//   console.log('token begin');
//   const res = await fetch(`${apiPrefix}/token`, {
//     method: 'POST',
//     headers: {
//       Authorization: `Basic ${base64credentials}`,
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: 'grant_type=client_credentials',
//   });
//   const json = await res.json();
//   const newToken = json.access_token;
//   console.log('token is', newToken);
//   return newToken;
// }



}
