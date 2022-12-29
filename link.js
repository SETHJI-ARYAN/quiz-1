const

loginLink

=

document.getElementById('login-link');

const logoutLink =

document.getElementById('logout-link');

if (authenticated) { loginLink.style.display =

'none';

logoutLink.style.display =

'block';

} else {

loginLink.style.display =

'block'; 

logoutLink.style.display =

'none';

}
