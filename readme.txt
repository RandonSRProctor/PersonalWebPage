This project contains a front end react app (frontend) and a 
backend Node.js server using express (backend)

The backend is necessary to make API calls to Sendgrid with my API key hidden

For ease of deployment I have built the react app and put the build in the Node.js
server.  This eliminates the use of CORS and having to communicate between ports.

In order to update the front end a new build must be done (npm run build) and the
resulting folder should be replaced in the backend directory

Note that because Heroku deploys from a GitHub repo, and I have my env file ignored I will
have to use Heroku's CLI to git them an env variable