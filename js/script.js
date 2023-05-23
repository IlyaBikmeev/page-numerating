/*
1. Хотим считать массив из нашего data.json
2. Хотим пройтись циклом по массиву и для каждого объекта-пользователя, который имеет вид:

{
      "name": "Jessica Henry",
      "image": "https://randomuser.me/api/portraits/thumb/women/96.jpg",
      "joined": "9/15/1990"
},

хотим создать элемент на веб-странице, в который заинжектить соответствующие поля
*/

let listOfUsers = document.getElementById('users-list');
document.getElementById('page-header').innerHTML = 
    `<h2>Contacts</h2> 
    <h3>Total: ${users.length}</h3>`

for(let user of users) {
    let contactItem = document.createElement('li');
    let contactDetails = document.createElement('div');
    let joinedDetails = document.createElement('div');

    let names = user.name.toLowerCase().split(' ');
    let email = `${names[0]}.${names[1]}@example.com`;

    contactDetails.innerHTML = 
        `<img class="avatar" src="${user.image}">
        <h3>${user.name}</h3>
        <span class="email">${email}</span>`


    contactDetails.classList.add('contact-details');

    joinedDetails.innerHTML = 
        `<span class="date">Joined ${user.joined}</span>`

    joinedDetails.classList.add('joined-details');
    
    contactItem.appendChild(contactDetails);
    contactItem.appendChild(joinedDetails);
    contactItem.classList.add('contact-item');
    contactItem.classList.add('cf');
    listOfUsers.appendChild(contactItem);
}
