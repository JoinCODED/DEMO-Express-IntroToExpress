# Fact List

## Discussion

**Topics to discuss:**

- Backend Development
- Request and Response Cycle
- Why Express?
- Setup Express
- Require and export

## Step 0: Setup Github Repository

1. Create a new repository for your backend. I'll call mine `Facts-API`.

2. Click on `Add .gitignore` and choose `Node`. This is to add a file called `.gitignore` that has the name of directories and files that github will ignore and not add to the repository.

3. After creating the repo, clone it and let's start coding!

## Step 1: Setup Nodejs

1. Create a `package.json` using the `init` command. A `package.json` indicates that this file is an environment for nodejs:

   ```shell
   $ cd Facts-API
   $ yarn init -y
   OR
   $ npm init -y
   ```

2. Open code in VSCode and explore `package.json`.

3. Create a new file `app.js`. This will be our main file.

4. In `package.json` change the main file to `app.js`. This is just a naming convention:

   ```javascript
   {
      [...],
      "main": "app.js",
      [...]
   }
   ```

## Step 2: Setup Express

1. Install Express

   ```shell
   $ yarn add express
   OR
   $ npm i express
   ```

2. Import `express`.

   ```javascript
   import express from "express";
   ```

   This is causing an error. Why? **You can't use this syntax in nodejs**. Instead we will _require_ `express`. Delete this line and...

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

   - Open the browser and go to `localhost:8000`, you'll receive a `404` status and a message saying `Cannot GET /`. Why?\
     This is because we haven't defined a `/` **route** that sends a response when it's called. But don't worry! If you get this error it means you're on the right path.
   - Let's check the terminal (no indication that the server is running).

7. The `listen()` method takes two arguments: the port number which will be `8000`, and a callback function -which is optional- that we will use to console log the port number in the terminal.

   ```javascript
   app.listen(8000, () =>
     console.log("The application is running on localhost:8000")
   );
   ```

8. A better way to do this is to save the port in a variable and pass it to the `listen` method.

   ```javascript
   const PORT = 8000;
   app.listen(PORT, () =>
     console.log(`The application is running on localhost:${PORT}`)
   );
   ```

9. Our changes are not showing. We need to restart the server every time!! (React was a blessing right?). Run the app **again**:

   ```shell
   $ node app.js
   ```

10. Use `nodemon` to run the app, as it watches for any changes in the app. To install it:

    ```shell
    $ yarn global add nodemon
    OR 
    $ npm i nodemon
    ```

11. Run it and make changes to the `console.log` in `app.listen()`:

    ```shell
    $ nodemon app.js
    ```

12. Do you miss `yarn start`? It's okay, we can still use it by writing a script in `package.json`. Add the following `"scripts"` property in `package.json`:

    ```javascript
    {
      "name": "Facts-API",
      [...],
      "scripts": {
        "start": "nodemon app.js"
      }
    }
    ```

## Step 3: Routes

1. Now let's create our first route (above `app.listen(...)`).

   ```javascript
   app.get("/", (req, res) => {
     console.log("HELLO");
   });
   ```

   Every route has the following:

   - `app`: Our express app instance
   - Method: An HTTP method (GET, POST, PUT, etc.)
   - Route path (endpoint): The URL that will call this route when a request is sent to it.
   - Callback function: What do you want to happen when this route is called? _Right now, we are `console.log`ging "**HELLO**" in our handling function._

2. Now let's test our new endpoint in the browser! The app will stay loading forever...

3. Every request needs a response. Since we're dealing with RESTful APIs, the data must be in JSON format using JSON responses.

   ```javascript
   app.get("/", (req, res) => {
     console.log("HELLO");
     res.json({ message: "Hello World" });
   });
   ```

Test your first endpoint in a web browser. Wooooooowwww! It worked! We created our first route!

## Step 4: Facts List

1. Create a new file for your data, let's call it `facts.js`. Now give me some random facts!

   ```javascript
   const facts = [
     {
       id: 1,
       ma3looma: "Fact 1",
     },
     {
       id: 2,
       ma3looma: "Fact 2",
     },
   ];
   ```

2. Export your array.

   ```js
   export default facts;
   ```

   This is causing an error. Why? You can't use this syntax in nodejs.

3. Instead we will use `module.exports`.

   ```js
   module.exports = facts;
   ```

   This is equivalent to `export default facts`.

4. Require your data in `app.js`.

   ```javascript
   const facts = require("./facts");
   ```

5. Create a route that represents the list of facts. Since the request wants to **fetch** data, we will use the `GET` method. We called the URL `/facts` and then we will pass the array of facts to the `res.json` method.

   ```javascript
   app.get("/facts", (req, res) => {
     res.json(facts);
   });
   ```

6. Test your endpoint on your web browser. Since it's a `get` method we can use the browser for testing as its default method when making a request is `GET`.
