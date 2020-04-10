### Discussion:

**Topics to discuss:**

- Backend Development
- Request and Response Cycle
- What do we expect from a request? What do we send as a repsonse?
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

4. To see the application somewhere, we need to set our development server manually using the listen method and passing it the port number.

```javascript
app.listen(3000);
```

5. Run the app **again**:

```shell
    node app.js
```

- Open the browser and go to `localhost:3000`, you'll receive a `404` status and a message saying `Cannot GET /`. This is because we haven't defined a `/` route that sends a response when it's called. But don't worry! If you get this error it means you're on the right path.
- The terminal (no indication that the server is running)

6. The `listen()` method takes two arguments: the port number which will be 3000, and a callback function -which is optional- that we will use to console log the port number in the terminal.

```javascript
app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
});
```

7. Our changes are not showing. We need to restart the server every time!! (React was a blessing right?). Run the app **again**:

```shell
    node app.js
```

8. Use `nodemon` to run the app, as it watches for any changes in the app. To install it:

```shell
    yarn global add nodemon
```

9. Run it and make changes to the `console.log` in `app.listen`:

```shell
    nodemon app.js
```

10. Do you miss `yarn start`? It's okay, we can still use it by writing a script in `package.json`. Open your React project and take a look at the written scripts.

```javascript
{
  "name": "test-project",
  ...,
  "scripts": {
    "start": "nodemon app.js"
  }
}
```

### Routes:

1. Create your first route. Every route has the following:

- app: our express app instance
- method: an http method (get, post, put, etc.)
- route path (URL): the URL that will call this route when a request is sent to it.
- handling function: what do you want to happen when this route is called?

```javascript
app.get("/", (req, res) => {
  console.log("HELLO");
});
```

2. What happens if you don't send back a response? App will load forever.

3. Every request needs a response. Since we're sending back a list of items, the data must be in JSON format using JSON responses.

```javascript
app.get("/", (req, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});
```

4. Test your first endpoint in a web browser

### Cookie List:

1. Create a new file for your data, let's call it `cookies.json`. Copy the data from your React app (as the data should be coming from the backend now).

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

2. Change the syntax from `js` to `json`:

```json
[
  {
    "id": 1,
    "name": "Chocolate Chip Cookies"
  },
  {
    "id": 2,
    "name": "Peanut Butter Cookies"
  },
  {
    "id": 3,
    "name": "Salted Caramel Cookies"
  }
]
```

3. What's cool about json files is that you don't need to export them and you can import them directly.

4. Import your data in `app.js`. This is equivalent to the import in React.

```javascript
const cookies = require("./cookies");
```

5. Create a route that represents the list of cookies. Since the request wants to **fetch** data, we will use the `get` method. We called the URL `/cookies` and the we will pass the array of cookies to the `res.json` method.

```javascript
app.get("/cookies", (req, res) => {
  res.json(cookies);
});
```

6. Test your endpoint on your web browser. Since it's a `get` method we can use the browser for testing as its default method when making a request is `get`.
