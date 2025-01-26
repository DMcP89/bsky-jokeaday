import { BskyAgent } from '@atproto/api';
import * as dotenv from 'dotenv';
import * as process from 'process';
import axios from 'axios';


dotenv.config();

// Create a Bluesky Agent 
const agent = new BskyAgent({
    service: 'https://bsky.social',
})

// Create interface for reponse from icanhazdadjoke
interface JokeResponse {
  id: string;
  joke: string;
  status: number;
}

async function postJoke(){
  try {
    // Fetch a joke from icanhazdadjoke
    const response = await axios.get<JokeResponse>('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });

    const jokeData = response.data;
    // Authenticate with Bluesky
    await agent.login({ identifier: process.env.BLUESKY_USERNAME!, password: process.env.BLUESKY_PASSWORD!})
    // Post the joke to Bluesky
    await agent.post({
        text: jokeData.joke,
    });
    console.log("Just posted: ", jokeData.joke);
  } catch (error) {
    console.error('Error fetching the joke:', error);
  }
}
postJoke();
