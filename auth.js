import axios from 'axios';
var token = "";
export async function Authorization () {
    if(!token){
   axios.post('https://api.ktern.com/auth/local', {
    identifier: 'iedsonfrainlar@ktern.com',
    password: 'Edson@2021',
  })
  .then(response => {
        // console.log('User profile', response.data.user);
        token = response.data.jwt;
        // if (typeof window !== 'undefined'){
        //     localStorage.setItem('accessToken', token);
        // console.log('User token', localStorage.getItem('accessToken'));}
        return token;
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });
    }
    else {
        return token;
    }
}
