const auth0 =

require('auth0-js');

const clientId ="YOUR_CLIENT_ID";

const domain = "YOUR_AUTHO_DOMAIN";

const auth = new

auth0.WebAuth({

clientID: clientId,

domain: domain

});

module.exports = auth;
