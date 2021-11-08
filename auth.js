import axios from 'axios';
var token = null|"";
export async function Authorization () {
  console.log("token in auth",token)
    if(token===null){
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
    console.log("return no",token)
        return token;
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });
    }
    else {
      console.log("return")
        return token;
    }
}
