# node-typescript-boilerplate

## Simple boilerplate generator using:

- body-parser
- cors
- dotenv
- express
- nodemon

## devDependencies

- @types/body-parser
- @types/cors
- @types/express
- @types/node
- ts-node
- typescript

## Usage

1. Download node-modules::

   `npm install`

2. Run `Dev` script:

   `npm run dev`

This will start the express server on port 3000

## Folder structure

```
MyProject
├── src                             // place of your TypeScript code
│   ├── controllers                 // place where your controllers/routes are stored
│   │   └──index.ts                 // index file for importing from multiple files within a module
│   │   └── main.controller.ts      // sample controllers
│   ├── entities                    // place where your entities (database models) are stored
│   ├── middlewares                 // place where middlewares are stored
│   ├── services                    // place where services are stored
│   │   └── main.service.ts         // sample service
│   └── app.config.ts               // App class configuration, where we define the constructor, methods and properties of our server
│   └── server.ts                   // starting point of your application
├── .env                            // standard environment variables file
├── .gitignore                      // standard gitignore file
├── package.json                    // node module dependencies
├── README.md                       // simple readme file
└── tsconfig.json                   // TypeScript compiler options
```
