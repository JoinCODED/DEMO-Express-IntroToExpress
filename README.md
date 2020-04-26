### Discussion:

**Topics to discuss:**

- Backend Development
- Request and Response Cycle
- What do we expect from a request? What do we send as a repsonse?
- Compare expected data with dummy data file in React (They should be the same)

(Add discussion link here)

### Setup Github Repository:

1. Create a new repository for your backend. I'll call mine `CookieShopAPI`.

2. Click on `Add .gitignore` and choose node. This is to add a file called `.gitignore` that has the name of directories and files that github will ignore those files and not add them to the repository.

3. After creating the repo, clone it and let's start coding!

### Setup Nodejs:

1. Create a `package.json` using the `init` command. A `package.json` indicates that this an environment for nodejs:

   ```shell
   $ cd myexpressproject
   $ yarn init -y
   ```

2. Open code in VSCode and explore `package.json`.

3. Create a new file `app.js`. This will be our main file.

4. In `package.json` change the main file to `app.js`. This is just a naming convention:

   ```javascript
   "main": "app.js",
   ```

### Setup Express:

1. Install Express

   ```shell
   $ yarn add express
   ```

2. Import `express`. This is causing an error. Why? You can't use this syntax in nodejs. Instead we will _require_ `express`.

   ```javascript
   import express from "express";
   ```

3. Require `express` and create an instance of an express application.

   ```javascript
   const express = require("express");

   const app = express();
   ```

4. Run the app. We have no idea where the app is running:

   ```shell
   $ node app.js
   ```

5. To see the application somewhere, we need to set our development server's port manually using the listen method and passing it the port number.

   ```javascript
   app.listen(8000);
   ```

6. Run the app **again**:

   ```shell
   $ node app.js
   ```

   - Open the browser and go to `localhost:8000`, you'll receive a `404` status and a message saying `Cannot GET /`. This is because we haven't defined a `/` route that sends a response when it's called. But don't worry! If you get this error it means you're on the right path.
   - The terminal (no indication that the server is running)

7. The `listen()` method takes two arguments: the port number which will be 8000, and a callback function -which is optional- that we will use to console log the port number in the terminal.

   ```javascript
   app.listen(8000, () => {
     console.log("The application is running on localhost:8000");
   });
   ```

8. Our changes are not showing. We need to restart the server every time!! (React was a blessing right?). Run the app **again**:

```shell
$ node app.js
```

11. Use `nodemon` to run the app, as it watches for any changes in the app. To install it:

```shell
$ yarn global add nodemon
```

11. Run it and make changes to the `console.log` in `app.listen()`:

```shell
$ nodemon app.js
```

11. Do you miss `yarn start`? It's okay, we can still use it by writing a script in `package.json`. Add the following `"scripts"` property in `package.json`:

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

1. Create your first route.

   ```javascript
   app.get("/", (req, res) => {
     console.log("HELLO");
   });
   ```

   Every route has the following:

   - `app`: Our express app instance
   - Method: An HTTP method (GET, POST, PUT, etc.)
   - Route path (URL): The URL that will call this route when a request is sent to it.
   - Handling function: What do you want to happen when this route is called?

2. What happens if you don't send back a response? The app will stay loading forever...

3. Every request needs a response. Since we're sending back a list of items, the data must be in JSON format using JSON responses.

   ```javascript
   app.get("/", (req, res) => {
     console.log("HELLO");
     res.json({ message: "Hello World" });
   });
   ```

4. Test your first endpoint in a web browser.

### Cookie List:

1. Create a new file for your data, let's call it `cookies.js`. Copy the data from your React app (as the data should be coming from the backend now).

   ```javascript
   const cookies = [
     {
       id: 1,
       name: "Chocolate Chip Cookies",
       price: 15
     },
     {
       id: 2,
       name: "Peanut Butter Cookies",
       price: 3
     },
     {
       id: 3,
       name: "Salted Caramel Cookies",
       price: 10
     }
   ];
   ```

2. Export your array. This is causing an error. Why? You can't use this syntax in nodejs.

   ```js
   export default cookies;
   ```

3. Instead we will use `modules.export`. This is equivalent to `export default cookies`.

   ```js
   modules.export = cookies;
   ```

4. Require your data in `app.js`.

   ```javascript
   const cookies = require("./cookies");
   ```

5. Create a route that represents the list of cookies. Since the request wants to **fetch** data, we will use the `get` method. We called the URL `/cookies` and then we will pass the array of cookies to the `res.json` method.

   ```javascript
   app.get("/cookies", (req, res) => {
     res.json(cookies);
   });
   ```

6. Test your endpoint on your web browser. Since it's a `get` method we can use the browser for testing as its default method when making a request is `get`.

---

Your `app.js` should look like this by this point:

```javascript
const express = require("express");
const cookies = require("./cookies");

const app = express();

app.get("/", (req, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});

app.get("/cookies", (req, res) => {
  res.json(cookies);
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
```
