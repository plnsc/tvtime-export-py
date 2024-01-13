
const [ url, callback ] = arguments;
const token = JSON.parse(window.localStorage.getItem('flutter.jwtToken'));
const [ method, headers ] = ['GET', { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }];
return fetch(url, { method, headers })
.then(response => callback(response.json()))
.then(err => console.error(err));
