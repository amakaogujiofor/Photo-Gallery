// Declarations

// API Details
fetch("users.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    document.body.innerHTML = `<div class="container">
        <div class="user">
            <h2>${data[0].username}</h2>
        </div>
        <div>
            <div class="online"></div>
        </div>
    </div>`;
  });

// async function getUsers() {
//   let response = await fetch("users.json");
//   let users = await response.json();
//   return users;
// }

// getUsers().then((users) => {
//   let sampleUser = users[0];
//   let userDiv = `
//         <div class="my-online-user">
//             <div class="user-username">${sampleUser.username}</div>
//             <div class="user-online"></div>
//         </div>
//     `;

//   document.body.innerHTML = userDiv;
// });
