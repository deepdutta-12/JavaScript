// let role = 'guest';
 
// switch(role){

//     case 'guest':
//         console.log('Guest user');
//         break;

//     case 'modarator':
//         console.log('Moderate user');
//         break;
//     default:
//         console.log('Unknown user');
// }

// if(role === 'guest') console.log("Guest user");
// else  if(role === 'moderator') console.log('Modarate user')
// else console.log('inknown user');

// for loop
// while loop
// do while loop
// for in
// const person = {
//     name : 'Mosh',
//     age:30
// };
// for(let key in person)
// {
//     console.log(key , person[key]);
// }
// // Dot notation 
// person.name

// // Bracket notation
// person['name'];

// const colors = ["red", "green" , "blue"];

// for(let index in colors){
//     console.log(index, colors[index]);
// }

//for-or loop
// for(let color of colors)
//     console.log(color)

// let i=0;
// while(i<=10){
//     if(i%2===0) {
//         i++;
//         continue;
//     }

//     console.log(i);
//     i++;
// }

let num1 = parseInt(prompt("Ener the first numbe: "));
// alert(`You entered : ${num1}`);
let num2 = parseInt(prompt("enter 2nd number :"));
// alert(`You entered : ${num1} & ${num2}`);
alert(`Maximum no is : ${maximum(num1, num2)}`);

function maximum(x, y){
    if(x>y) return x;
    else return y;
}
