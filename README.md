# BusinessRegistration
repo for Businnes Registration group.

Formfiller is a website that allows users to access all their forms from all their organizations. 

To use FormFiller follow the following steps:
1. Go to /Database Stuff
2. Run ```vagrant up``` (Latest .SQL file will need to be imported into phpmyadmin)
  a. http://localhost:18306/phpmyadmin/
  b. User: dbuser pass: userpass
  c. Import the latest SQL file 
4. Go to /formfiller
5. If you have not configured the app, run ```npm install```
6. Run ```node server.js```
