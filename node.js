const express = require('express');
const authO = require('authO');

const app = express();


authO.configure({
  clientID: 'your-client-id',
  clientSecret: 'your-client-secret'
});


app.get('/login', (req, res) => {
  
  const loginURL = authO.authorizationUrl({
    redirect_uri: 'http://localhost:3000/callback',
    scope: 'openid profile email'
  });

  
  res.redirect(loginURL);
});


app.get('/callback', (req, res) => {
  
  authO.authorizationCode.getToken({
    code: req.query.code,
    redirect_uri: 'http://localhost:3000/callback'
  }, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send('An error occurred');
      return;
    }

    
    req.session.accessToken = result.access_token;

    
    res.redirect('/dashboard');
  });
});


app.get('/logout', (req, res) => {
  
  req.session.accessToken = null;

  
  res.redirect('/');
});


app.get('/', (req, res) => {
  
  const loggedIn = req.session.accessToken != null;

  
  res.render('navbar', {
    logo: '/images/logo.png',
    links: [
      {
        label: 'Contact Us',
        href: '/contact'
      },
      {
        label: loggedIn ? 'Logout' : 'Login',
        href: loggedIn ? '/logout' : '/login'
      }
    ]
  });
});


app.get('/dashboard', (req, res) => {
  
  if (req.session.accessToken == null) {
    res.redirect('/login');
    return;
  }

  
  res.render('dashboard', {
    banner: '/images/banner.png',
    navbar: {
      logo: '/images/logo.png',
      links: [
        {
          label: 'Contact Us',
          href: '/contact' , 
