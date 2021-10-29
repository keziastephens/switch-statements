console.log('im linked');

// switch statements are the same as if statements
// but they work differently 


// if (artist === 'tyler'){
//     console.log('the creator');

// } else if(artist === 'snoop god'){
//     console.log('snoop god')

// } else {
//     console.log('artist is not tyler');
// }




// switch statement is a conditional statement
// like an if statement, but works differently

// const artist = 'smoo';

// switch(artist){
//     case 'tyler':
//         console.log('the creator');
//         break;
//     case 'snoop':
//         console.log('snoop dog');
//         break;
//     default:
//         console.log('who is that artist');
//         break;
// }



// -----------------------------------------------------



const bestDressed = 'level6web';

switch(bestDressed){
    case 'level5':
        console.log('level 5 is best dressed!');
        break;
    case 'level6web':
        console.log('level 6 web is best dressed!');
        break;
    default:
        console.log('who will be the best dressed?');
        break;
};




// -----------------------------------------------------


// let user = prompt('who is your favorite artist?');
// let user = 'tyler';
// let userInput = user.toLowerCase();
// console.log(user);
// console.log(userInput);
// let ticketPrice = 500;
// const totalPrice = ticketPrice;
// console.log(totalPrice);

// switch(user){
//     case 'tyler':
//         console.log('tyler is a creator');
//         ticketPrice = 500
//         break;
//     case 'paramore':
//         console.log('hayley williams is hot')
//         ticketPrice= 500;
//         break;
//         default:
//             console.log('who is the artist?')
// }


// -----------------------------------------------------



let user = prompt('What is the best Twilight film?');
// let user = 'twilight';
let userInput = user.toLowerCase();

switch(user){
    case 'twilight':
        console.log('you are right');
        break;

    case 'new moon':
        console.log('dead wrong');
        break;
    case 'eclipse':
        console.log('heyyy thats pretty good');
        break;
    case 'breaking dawn':
        console.log('i mean you are not wrong');
        break;    
    case 'breaking dawn part 1':
        console.log('i mean you are not wrong');
        break;
    case 'breaking dawn part 2':
        console.log('you have good taste');
        break;
    default:
        console.log('that aint a film bro');
        break;

}


function start(){
    let halloween = prompt('what are you going as for halloween?');
    let halloweenInput = halloween.toLowerCase();

    switch(halloween){
        case 'ghost':
            console.log('oooOOhh spooky vibes');
            break;
        case 'vampire':
            console.log('you are so fucking HOT');
            break;
        case 'pirate':
            console.log('arrrr B) me harties');
            break;
        case 'cowgirl':
            console.log('yeeeeehaw');
            break;
        case 'green dildo monster':
            console.log('go seek medical advice');
            break;
        case 'fairy':
            console.log('perfect for such a magical being!');
            break;
            default:
            start();
        
    }
};
start();