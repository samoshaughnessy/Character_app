# GM Character Tracker

Here is an application that I restarted for this interview.
To run the frontend you will need to do a yarn install to get your node_modules, you will also need to make a .env with a 
```
REACT_APP_API_SERVER=
```
value pointing to a nodejs backend that will be running.

To run the backend you will need to install the node_modules with the command npm install, then make a .env with these values
```
DB_NAME=
DB_USERNAME=
DB_PASSWORD=

JWT_SECRET=
```
DB_NAME, DB_USERNAME and DB_PASSWORD will need to point to a database running on your machine

You are going to need to create the database on your machine before you can interact with it via migrations and seeds

Run the backend migrations
```
knex migrate:latest
```

Run the backend seeds
```
knex seed:run
```

To run the frontend run yarn start
To run the backend run nodemon index.js

## Using the App
This application was built to track the characters within a D&D game. As the Game Master create all of your characters to easily track the character statistics, current weapons, items and money.

You will need to make an account as GM
Then make characters
Then you can update your characters as required

### Bugs to fix:

numeric input once disabled just increases to maximum
experiance within updates needs to be updated
add in ability to contain multiple items and use a single item

