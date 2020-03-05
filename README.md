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

4. Run the app
