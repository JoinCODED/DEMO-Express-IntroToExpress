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

3. Explain that to run the application, we need to do the configuration manually using `app.listen()` and passing it the port number.

```javascript
app.listen(3000);
```

4. Run the app and show them:

```shell
    node app.js
```

- The `Cannot GET /` error
- The terminal (no indication that the server is running)

5. Add the callback function

```javascript
app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
});
```

6. Show them that our changes are not showing. We need to restart the server every time!! (Remind them that React was a blessing)

7. Explain `nodemon` and install it:

```shell
    yarn global add nodemon
```

8. Run it and make changes to the console.log:

```shell
    nodemon app.js
```

9. Tell them how much you miss using `yarn start` and explain scripting

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

2. Show them what happens if you remove the response (app will load forever).

3. Explain that every request needs a response. Talk about response methods and that we will depend heavily on JSON responses.

```javascript
app.get("/", (req, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});
```

4. Create another route:

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

app.get("/cookies", (req, res) => {
  res.json(cookies);
});
```
