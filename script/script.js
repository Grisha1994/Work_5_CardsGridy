const users = document.querySelector('.users');

function getUser(){
    fetch('https://reqres.in/api/users?page=2')
    .then(function(res){
        return res.json()
    })
    .then(function(json){
       console.log(json.data);
       renderCards(json.data);
    })
}
getUser();


function renderCards(arr){
    arr.map(function({email, first_name, last_name, avatar}){
    const userCard = document.createElement('div');
    const emailEl = document.createElement('a');
    const nameEl = document.createElement('p');
    const avatarEl = document.createElement('img');

    
    
    nameEl.innerText = `${first_name} ${last_name}`;
    emailEl.innerText = email;
    emailEl.href = `mailto:${email}`;
    avatarEl.src = avatar;

    userCard.classList.add('cardUser');
    nameEl.classList.add('name');

    userCard.append(avatarEl, nameEl, emailEl);
    users.append(userCard);
    });
}
