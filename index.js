async function jokeAPI() {
  try {
    const data = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await data.json();

    console.log("Setup: ", joke.setup);
    console.log("Punchline: ", joke.punchline);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

jokeAPI();
console.log("This is after the jokeAPI call.");

fetch('https://official-joke-api.appspot.com/random_joke')
.then(data => data.json())
.then(response => {
  console.log("Joke Id:", response.id);
  console.log("Setup: ", response.setup);
  console.log("Punchline: ", response.punchline);
})
.catch(error => {
  console.log("Something went wrong bro: ", error);
})