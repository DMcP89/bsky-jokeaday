# Dad Joke A Day Bot

This is a bot that posts a joke from [icanhazdadjoke](https://icanhazdadjoke.com/) every day at 9am to [@dadjokeaday.bsky.social](https://bsky.app/profile/dadjokeaday.bsky.social) on Bluesky. It is base on the [Bluesky bot template](https://github.com/bluesky-social/cookbook/tree/main/ts-bot).

## Set Up

1. Install Typescript: `npm i -g typescript`
2. Install Node.js: `npm i -g ts-node`
3. Make a copy of the example `.env` file by running: `cp example.env .env`. Set your username and password in `.env`. Use an App Password.
4. Compile your project by running: `npx tsc` or activate watch mode to have your code automatically compile: `npx tsc -w`

## Running the script 
1. You can run the script locally: `node index.js`. You should see a smiley emoji posted to your Bluesky account. 
2. Modify the script however you like to make this bot your own! 

