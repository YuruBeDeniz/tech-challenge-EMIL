
## Description

Create a GPS device tracker app with NestJS, TypeScript and MongoDB.

Before starting the project, I watched some TypeScript videos and read the TS documentation (www.typescriptlang.org) as I have never used TS before. 

I also learnt NestJS while developing the application. 

Now, I have a working backend app which can receive data from GPS devices and save it to the database.

Missing part: I could not set up containerization with Docker and authentication with gRPC. (But I am working on them to learn more about how they work)

### 1. Set up the environment:

After installing the first dependencies:
- npm run start

#### tasks: 
- learn TypeScript
- learn NestJS 

### 2. Create gpsdevices folder:

#### tasks:
create:
 - GPS devices DTO
 - GPS devices controller
 - GPS devices provider (service)
 - GPS devices module (to connect everything to app module and to main.ts respectively)

 ### 3. Create POST request:

 implement code to get data from GPS devices

 #### tasks:
 - handle  POST request in gpsdevices controller and direct it to GPS devices service
 - create GPS devices DTO in the service folder

 To see if the POST request is working:  $ curl -X POST http://localhost:3000/gpsdevices -d '{"id": "123", "latitude": "333", "longitude": "444"}' 

 ### 4. Create REST API
 - install OPEN API and continue with swagger

To see if the post request after installing OPEN API:  $ curl -X POST http://localhost:3000/gpsdevices -d '{"id": "123", "latitude": "333", "longitude": "444"}' -H "Content-Type: application/json"

or to add data directly:

npm run start
http://localhost:3000/api#/default/create

### 5. Connect to database

#### tasks:
- install MongoDB 
- create GPS device schema and connect it to GPS device module
- save the data to MongoDB through GPC device provider

To see if the data is saved to DB:  $ curl -X POST http://localhost:3000/gpsdevices -d '{"id": "123", "latitude": "333", "longitude": "444"}' -H "Content-Type: application/json"

### Find errors: 
I could not start the app after installing MongoDB. The error was:
"Cannot find module "src/schemas/gpsdevice.schema"
Requrie stack:
.../dist/..."

After 2 hours of searching I realized the files stated in the error message was under dist folder. So I made "tsc" command to compile the TS code into JS. After that, it worked perfectly.