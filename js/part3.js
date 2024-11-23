const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');

document.getElementById('api-1-btn').addEventListener('click', async () => {
    // Make a request to your first API here. Put the response's data in output-1.
    // If your response has no body, put the status code in output-1.
    fetch("https://hacker-news.firebaseio.com/v0/item/2921983.json")
    .then(response=>response.json())
    .then(response=> document.getElementById("output-1").textContent = response.text);
    
    // TODO
});

document.getElementById('api-2-btn').addEventListener('click', async () => {
    const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
    fetch(URL, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(response => document.getElementById("output-2").textContent = "Current date: " + response.current_date);
});
