type Joke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

async function getJoke(): Promise<void> {
  try{
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    if(!response.ok) {
      throw new Error('Failed to fetch joke');
    }

    const joke: Joke = await response.json();

    console.log("Setup: ", joke.setup);
    console.log("Punchline: ", joke.punchline);
  } catch (error) {
    console.error("Something went wrong: ", error);
  }
}

getJoke();