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