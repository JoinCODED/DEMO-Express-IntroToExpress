### Discussion:


**Topics to discuss:**
- Backend Development
- Request and Response Cycle
- What do we expect as a response?
- Compare expected data with dummy data file in React (They should be the same)

(Add discussion link here)

### Setup Nodejs:

1. Create a new project folder:

   ```shell
       mkdir myexpressproject
   ```

2. Create a nodejs environment:

   ```shell
       yarn init -y
   ```

3. Open in VSCode and show them the `package.json` file.

4. Create a new file `app.js`. Explain that this will be our main file.

5. In `package.json` change the main file to `app.js`:

   ```javascript
   "main": "app.js",
   ```

### Setup Express:

1. Install Express

```shell
    yarn add express
```

2. Import `express` and create an instance of an express application.

```javascript
const express = require("express");

const app = express();
```

3. Run the app and show them that we have no idea where the app is running:

```shell
    node app.js
```

4. Explain that to see the application somewhere, we need to do the configuration manually using `app.listen()` and passing it the port number.

```javascript
app.listen(3000);
```

5. Run the app **again** and show them:

```shell
    node app.js
```

- The `Cannot GET /` error
- The terminal (no indication that the server is running)

6. Add the callback function

```javascript
app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
});
```

7. Show them that our changes are not showing. We need to restart the server every time!! (Remind them that React was a blessing). Run the app **again**:

```shell
    node app.js
```

8. Explain `nodemon` and install it:

```shell
    yarn global add nodemon
```

9. Run it and make changes to the console.log:

```shell
    nodemon app.js
```

10. Tell them how much you miss using `yarn start` and explain scripting

```javascript
{
  "name": "test-project",
  ...,
  "scripts": {
    "start": "nodemon app.js"
  }
}
```

### Routers:

1. Create your first route. Explain that every route has the following:

- app
- method
- route path (URL)
- handling function

```javascript
app.get("/", (req, res) => {
  console.log("HELLO");
});
```

2. Show them what happens if you don't have a response (app will load forever).

3. Explain that every request needs a response. Talk about response methods and that we will depend heavily on JSON responses.

```javascript
app.get("/", (req, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});
```

4. Copy the data from your React app to show them that this should be coming from the backend:

```javascript
const cookies = [
  {
    id: 1,
    name: "Chocolate Chip Cookies"
  },
  {
    id: 2,
    name: "Peanut Butter Cookies"
  },
  {
    id: 3,
    name: "Salted Caramel Cookies"
  }
];
```


5. Create a route that represents the list of cookies:

```javascript
app.get("/cookies", (req, res) => {
  res.json(cookies);
});
```
