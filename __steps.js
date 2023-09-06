/*
-------------
INITIAL SETUP
-------------
1.visit: console.firebase.google.com
2.create a new firebase project
3. visit doc:(go to docs): Build > Authentication > Web > Getting started
4. register web app > firebase project home > click web > give name and register 
5. install firebase for our projects
6. dangerous: get firebase config and put it in firebase.init.js
7.export app  from firebase.init.js
------------------
Setup The Provider
------------------
8. create auth using getAuth  from Firebase by using app from firebase.init.js
9.create a google auth provider. do not forget to use new GoogleAuthProvider();
10. go to firebase  > build >authentication > sign in method
11. enable sign in method
12. create a btn for google sign in method with a click handler 
13.inside the event handler, call signInWithPopup with auth provider
14. after signInWithPopup .then result .error
-----------------
Display User Data
-----------------

------------------------
Add a new sign in method
------------------------
1. enable the signing method github to  firebase
2.create github, twitter, fb etc. app create
3.get clientId and secret

*/ 