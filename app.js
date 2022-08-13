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

// filter out falsy
function filterOutFalsy(elem1, elem2){
    if(!elem1 === true){
        return elem1;
    }
    return elem2;
    // return (!elem1) ? elem1 : elem2;
}
console.log(filterOutFalsy(0, 500));

// array length
function arrLength(arr){
    return arr.length;
}
console.log(arrLength([1, 2, 3, 4, 5]));

// last element in array
function arrLength(arr){
    return arr[arr.length - 1];
}
console.log(arrLength([1, 2, 4, 8, 12]));

// sum of array
function arrSum(arr){
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
console.log(arrSum([2, 2, 2]));

// add up numbers
function progressiveSum(num){
    var total = 0;
    for(var i = num; i >= 0; i--, num--){
        total += num;
    }
    return total;
}
console.log(progressiveSum(5));

//seconds to minutes
function calcTime(num){

    if(num > 60){
        let mins = (num - (num % 60)) / 60;
        let seconds = (num % 60);
        if(seconds < 10){
            return '0' + mins + ':0' + seconds;
        }
        else{
            return '0' + mins + ':' + seconds;
        }
    }
    else{
        return '00:' + num;
    }
}
console.log(calcTime(66));

//find the largets number
function getMax(arr){
    let basket = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > basket){
            basket = arr[i];
        }
    }
    return basket;

}
console.log(getMax([5, 100, 0]));

//reverse a string
function reverseString(str){
    var newStr = '';
    for(var i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString('abc'));

// turn every element in an array into 0
function convertToZeros(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = 0;
    }   
    return arr;
}
console.log(convertToZeros([5, 100, 0]));

// filter out all the apples
function removeApples(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== 'Apple'){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));



