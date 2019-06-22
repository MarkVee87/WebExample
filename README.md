# WebExample

Simple website example using HTML, CSS and JS.

### Node.js

A simple Node.js server was added, to run this website via node follow the steps below:
* Install ```node``` on your machine (https://nodejs.org/en/download/)
* Run ```npm install``` in the root directory of this project 
* Run ```node app.js``` (use ctrl+c (Windows) or cmnd+c (mac/linux) to stop it running thereafter)
* Navigate to ```http://localhost:8081``` in your browser


### Docker

The Node.js server and website code can all be packaged into a docker image for easy deployment by following the steps below:
* Install ```docker``` on your machine (https://docs.docker.com)
* Run ```docker build -t webexample .``` in the root directory of this project
* Run ```docker run -d -p8081:8081 --name webexamplenode webexample```
* Navigate to ```http://localhost:8081``` in your browser