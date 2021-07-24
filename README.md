# Task Manager Api
Api that takes different http requests to create users and tasks. The API is programmed with authentication middleware and bcrypt to keep an user's information private and safe.
In addition, new users will receive an email(supported by sendgrid/mail) when creating an account and receive a farewell email at the time they choose to delete their account.

It is necessary to run env-cmd npm package to run a development instance for the environment variables as shown in the Package.json file
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js",
    "dev": "env-cmd -f ./config/dev.env nodemon src/index.js"
  },
```

The .env file should look something as the code below for local development:
```
PORT=3000
SENDGRID_API_KEY= <key>
JWT_SECRET=<secretCode>
MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
```
