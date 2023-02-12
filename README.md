# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# NOTE

## This project is still in development!

To run the server part of the application, you need your own Postgresql database (I hope in the future I will be able to post my own, for the convenience of testing the project)! The configuration for using the database is at the following. ways:

### /node-server/DB/knexfile

A dependency supporting .env files is also installed. For convenience, it is recommended to create such a file.
In addition, you must specify your email data in the mail-service file.js for the operability of sending an email when registering for account confirmation.
The mail-service file.js is on the way:

### /node-server/service/mail-service.js

I hope you enjoy this project :)

## Available Scripts

In the project directory, you can run:

### "node-server"

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:8083/api](http://localhost:8083/api)

#### Available end points:

---

- Products

  - /pizza
  - /pizza/pizzaID
  - /salads
  - /salads/saladsID
  - /snacks
  - /snacks/snacksID
  - /drinks
  - /drinks/drinksID
  - /souses
  - /souses/sousesID

---

- Users

    - /registration
    - /login
    - /logout
    - /refresh (refresh user token)
    - /activate/:link (link for account activation)

---

- Test
  - /users (only for authorized users)

### "react-app"

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
