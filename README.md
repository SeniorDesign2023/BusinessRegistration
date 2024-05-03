# BusinessRegistration
repo for Businnes Registration group.

Formfiller is a website that allows users to access all their forms from all their organizations. 

To use FormFiller follow the following steps:
1. Go to /Database Stuff
2. Run ```vagrant up``` (requires Vagrant and VirtualBox)  
  a. Visit http://localhost:18306/phpmyadmin/  
  b. Log in with User: dbuser pass: userpass  
  c. Import the latest SQL file
4. Go to /formfiller
5. If you have not configured the app, run ```npm install```
6. Run ```node server.js```  
  a. The site can be accessed at http://localhost:3000/
