const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**
    let n = document.getElementById("name").value;
    let a = document.getElementById("age").value;
    let params = new URLSearchParams({name: n, age: a});
    fetch("https://echo.zuplo.io/api?" + params.toString())
    .then(response => response.json())
    .then(response => document.getElementById("output").textContent = JSON.stringify(response, null, 5));
    // TODO
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    let n = document.getElementById("name").value;
    let a = document.getElementById("age").value;
    let options = {
        method: "post",
        headers: {
            "Content-Type": "application/json", // or "application/x-www-form-urlencoded", "text/plain", etc.
        },
        body: JSON.stringify( {name: n, age: a} ),
    };
        fetch("https://echo.zuplo.io/api", options)
        .then(response => response.json())
        .then(response => document.getElementById("output").textContent = JSON.stringify(response, null, 5));
    
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**
    let n = document.getElementById("name").value;
    let a = document.getElementById("age").value;
    const data = new URLSearchParams ({name: n, age: a});;
let options = {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
};
        fetch("https://echo.zuplo.io/api", options)
        .then(response => response.json())
        .then(response => document.getElementById("output").textContent = JSON.stringify(response, null, 5));
    
    // TODO
});
