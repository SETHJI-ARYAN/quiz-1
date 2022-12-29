const auth =

require('./auth');

// Login

auth.authorize();

// Logout

auth.logout({

returnTo:

'http://localhost:3000', clientID: clientId

})
