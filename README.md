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
   $ mkdir myexpressproject
   ```

2. Create a nodejs environment:

   ```shell
   $ cd myexpressproject
   $ yarn init -y
   ```

3. Open in VSCode and show them the `package.json` file.

4. Create a new file `app.js`. Explain that this will be our main file.

5. In `package.json` change the main file to `app.js`:

   ```javascript
   "main": "app.js",
   ```

6. Create a `.gitignore` file. Google _gitignore file for Node_, copy and paste the code in your `.gitignore` file. An easier way is when you create a new repository on Github, click on `Add .gitignore` and choose node.

### Setup Express:

1. Install Express

   ```shell
   $ yarn add express
   ```

2. Import `express` and create an instance of an express application.

   ```javascript
   const express = require("express");

   const app = express();
   ```

3. Run the app and show them that we have no idea where the app is running:

   ```shell
   $ node app.js
   ```

4. To see the application somewhere, we need to set our development server manually using the listen method and passing it the port number.

   ```javascript
   app.listen(8000);
   ```

5. Run the app **again**:

   ```shell
   $ node app.js
   ```

   - Open the browser and go to `localhost:8000`, you'll receive a `404` status and a message saying `Cannot GET /`. This is because we haven't defined a `/` route that sends a response when it's called. But don't worry! If you get this error it means you're on the right path.
   - The terminal (no indication that the server is running)

6. The `listen()` method takes two arguments: the port number which will be 8000, and a callback function -which is optional- that we will use to console log the port number in the terminal.

   ```javascript
   app.listen(8000, () => {
     console.log("The application is running on localhost:8000");
   });
   ```

7. Our changes are not showing. We need to restart the server every time!! (React was a blessing right?). Run the app **again**:

   ```shell
   $ node app.js
   ```

8. Use `nodemon` to run the app, as it watches for any changes in the app. To install it:

   ```shell
   $ yarn global add nodemon
   ```

9. Run it and make changes to the `console.log` in `app.listen()`:

   ```shell
   $ nodemon app.js
   ```

10. Do you miss `yarn start`? It's okay, we can still use it by writing a script in `package.json`. Add the following `"scripts"` property in `package.json`:

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

4. Test your first endpoint in a web browser

### Cookie List:

1. Create a new file for your data, let's call it `cookies.json`. Copy the data from your React app (as the data should be coming from the backend now).

   ```javascript
   const cookies = [
     {
       id: 1,
       name: "Chocolate Chip Cookies",
     },
     {
       id: 2,
       name: "Peanut Butter Cookies",
     },
     {
       id: 3,
       name: "Salted Caramel Cookies",
     },
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

---

Your `app.js` should look like this by this point:

```javascript
const express = require("express");
const cookies = require("./cookies");

const app = express();

app.listen(8000, () => {
  console.log("The application is running on localhost:3000");
});

app.get("/", (req, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});

app.get("/cookies", (req, res) => {
  res.json(cookies);
});
```
