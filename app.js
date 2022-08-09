let users = [
    {
        username: 'Ryan',
        email: 'ryanmello897@gmail.com',
        password: 'test123',
        subscriptionStatus: 'VIP',
        discordId: 'Ryan Mello#001',
        lessonComplete: [0, 1],
    },
    {
        username: 'Mitri',
        email: 'mitri@gmail.com',
        password: 'mitri123',
        subscriptionStatus: 'VIP',
        discordId: 'Mitri#001',
        lessonComplete: [0, 1, 2, 3],
    }
];

console.log(users[0].username);
console.log(users[0].subscriptionStatus);
console.log(users[0].lessonComplete.map(elem => elem * 2));

function login(email, password){
    for(let i = 0; i < users.length; i++){
        if(users[i].email === email && users[i].password === password)
        {
            //console.log(users[i]);
            console.log('Login Successful');
            return;
        }
    }
}

login('ryanmello897@gmail.com', 'test123');

console.log(document.querySelector('#title'));
console.log(document.getElementById('title'));

document.querySelector('#title').innerHTML = 'Frontend Simplified';
document.querySelector('#title').style.color = 'red';
document.querySelector('#title').style.fontSize = '18px';

//2:30

