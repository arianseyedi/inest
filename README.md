# About Project

This project is implemented in NodeJs framework as a Server Side Rendered application using NextJs.
The main structure of the project:

```
.
├── README.md
├── next.config.js
├── node_modules ---> the dependencies
├── package.json ---> project config and scripts
├── public ---------> resources
├── serverless.yml -> deployment script
├── src ------------> source code
├── yarn-error.log -> error log
└── yarn.lock ------> package lock
```
The source folder consists of two main sections:
```
.
├── components ---> ui components
├── config -------> theme and other config info
├── modules ------> the mailer code
├── pages --------> pages and the api
└── resource -----> resources (icons)
```

### To develop the project on your local machine:

1- ensure you have NodeJs installed on your machine
2- type `yarn` in the console to install the dependencies. you must be able to locate folder named `node_modules` in the root where `package.json` is.
3- simply type `yarn dev`

### To start the project on your local machine:

1- follow steps 1 & 2 from above.
2- build the project by performing `yarn build`
3- once completed, run `yarn start`

To learn how to deploy a NextJs project, follow: https://nextjs.org/docs/deployment
To learn about NextJs follow: https://nextjs.org/learn/basics/getting-started