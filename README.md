# github-user-service

## Developing application
- Navigate to project root directory
- Run `npm install` to install dependencies
- Run `./node_modules/.bin/ts-node src/server.ts` to start the application in developement mode
- The service can be accessed on `http://localhost:3000`

### Running unit and integration tests
- Navigate to project root directory
- Run `npm install` to install dependencies
- Run `npm test` to run tests

## Deploying the application
Deploying the application to docker is extremely simple 

- Make sure docker is installed on the host machine.
- Clone the repository
- Navigame to the root directory of the repository
- Build the image by running `docker build -t <tag> .` where `<tag>` represents the tag name of the image. The build process installs dependencies and also does TypeScript compilation
- Start the image with `docker run -p <port>:3000 <tag>` where `<port>` is the port you would like to bind the application to on your host machine.
- The service can be accessed on `http://localhost:<port>`

## Using the API
- Request are handled at `GET /api/v1/users`. Two query parameters must be provided
* `name`: the github name being search for
* `language`: a comma seprated list of languages