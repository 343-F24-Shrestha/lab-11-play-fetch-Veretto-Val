const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // This function should GET the first page of users from reqres.in.
    // The users should be displayed in the user-list element.
    // Each user should be in a new <div> with the user's first name, last name, and profile image.
    // The format should follow the example user in the HTML file.

    fetch("https://reqres.in/api/users")
    .then(response=>response.json())
    .then(response=> {
        for (let i = 0; i < response.data.length; i++) {
            let fn = response.data[i].first_name;
            let ln = response.data[i].last_name;
            let img = response.data[i].avatar;
            let para = document.createElement("div");
            para.classList.add("card");
            para.innerHTML = "<h2>" + fn + " " + ln + "</h2>\n<img src=\"" + img + " \" alt=\"" + fn + " " + ln + "\">";
            document.getElementById("user-list").append(para);
        }
    });

    // TODO
});
