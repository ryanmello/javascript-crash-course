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
document.querySelector('#title').style.fontSize = '18px';

//2:30

function changeTitleToRed(){
    document.querySelector('#title').style.color = 'red';
}

function toggleDarkMode(){
    document.querySelector('body').classList.toggle('dark-theme');
}

/*

Beginner Challenges

*/

// calculate remainder
function calcRemainder(num1, num2){
    console.log(num1 % num2);
}
calcRemainder(4, 2);

// is number odd
function isOdd(num){
    if(num % 2 > 0){
        return true;
    }
    return false;
    // return num % 2 !== 0;
}
console.log(isOdd(5));

// if num is even return 1
function booleanInteger(num){
    if(num % 2 === 0){
        return 1;
    }
    return -1;
    // return num % 2 === 0 ? 1 : -1;
}
console.log(booleanInteger(6));

// check if user is logged in
function isLoggedInAndSubscribed(str1, str2){
    if(str1 == 'LOGGED__IN' && str2 == 'SUBSCRIBED'){
        return true;
    }
    return false;
}
console.log(isLoggedInAndSubscribed('LOGGED__IN', 'SUBSCRIBED'));




