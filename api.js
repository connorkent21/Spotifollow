import fetch from 'isomorphic-fetch';

const backendURI = 'http://13.58.99.30:5000/';
const headers = {"Content-Type": "application/json"};
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

}


export async function searchArtists(query) {
  console.log('about to search artists with query: ', query);
  let newURI = backendURI + 'search';
  console.log('this is the endpoint im lookin for: ', newURI);

  let body = await JSON.stringify({query});
  console.log('this is the body: ', body);
  let res = await fetch(newURI, {
    method: 'POST',
    headers:
    body,
  })
  .catch(err => {
    console.log('error: ', err);
  });

  let data = await res.json();
  console.log('this is the data at the end of the flow: ', data);
  return data;
}
