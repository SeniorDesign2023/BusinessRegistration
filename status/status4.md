Recap of what was planned for the last 3 weeks  

For the last three weeks, we planned on dealing with the front end implementation, form rendering, database implementation, and configuring the back-end to work as expected.  

 

Tasks Completed What was done during the last 3 weeks (by whom) 

Description of tasks completed 

Your choice of quantifiable metric(s) 
(e.g., hours, lines of code, meeting count, doc/test coverage %,...) 

 

 

Fortune Nwokejiobi – Front end implementation which includes: 

                     - Implemented the main page,  

      - Implemented the login and sign-up page.  

      - Implemented main page which has organizations and forms.    

      - Implemented pages for form creation and organization creation 

      - Implemented the profile page 

      - Implemented the detailed front-end requirements for these pages for example navigation, design etc  

       - worked for above 18 hours on these things, wrote above 600 lines of code 

 

Miles Hays – Login and credentials system, integrate form library 

- Completed sign-up and login code 

- Integrated JsonForms library 

- Created test schema 

- Worked for at least 15 hours, wrote and debugged over 150 lines of code 

Lucas – database specification and implementation of database logic for user authentication.  

           

                         		         	 

Successes 
 

What are your accomplishments? 

Was able to get the front-end implementation of pages designed  

Make user authentication functional 

What solutions were successful? 

Were there other things that you tried that did not work and why? 

 

Roadblocks/Challenges  

Describe the challenges 

	Correct rendering of pages has been unsuccessful as with each new navigation the CSS is not immediately loaded if the page is loaded from within Next, and the page needs to be refreshed for the css styling to be correctly added. 

	Getting database information to Next.js to render was difficult, as Next and Express received separate copies of the database code preventing traditional server-side rendering techniques and using HTTP requests resulted in errors. 

Describe how you overcame them 

	We have not yet solved the rendering problem. 

	Database-needing routes are first intercepted by Express which passes the data directly to a Next render function rather than letting the normal Next handler run. 

What challenges are still left? 

	We still need to solve the rendering bug. 

What do you need help with? How can your mentor help? 

 

Changes/Deviation from Plan  (if applicable - if not, say so!) 

       Originally we planned on adding the link for invites to organizations but now that may be a stretch goal  

       Information in general will not be in the file system, instead being stored directly in the database 

 

Details Description of Goals/ Plan for Next 3 Weeks 

For the front-end implementation we plan on creating more pages like organization management pages. This page is meant to help facilitate the admin functionalities like assigning forms, managing forms, managing members etc 

Repair designs to display appropriately on different systems 

Implement UI for adding organizations on search 

Find a way to fix the rendering issues. 

 

        

Note in final summary discuss where your project could go from here) 

 

Confidence on completion from each team member + team average  
Scale of 1-5; 1 = not-confident; 3 = toss-up; 5 = confident 

Fortune – 3  

Miles – 3 

Lucas - 

Team average: 3 
