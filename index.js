// import { Client } from 'discord.js';
// const bot = new Client();

const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzEwOTYwNzk5MzMzNzQ0NzYw.Xr8Ejw.SLM2UsfVLnYUdjXef6G4bbq24Sw';

const PREFIX = '!';
// CONST NAMES = ['Sam', 'Rachael', 'Matt', 'Kalani', 'Cam', 'Neo'];
const NAMES = ['Sam', 'Rachael', 'Matt', 'Kalani'];

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('message', msg=>{
    // Check for the command prefix
    if(msg.content.substring(0, PREFIX.length) !== PREFIX){
        return
    }
    let args = msg.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'hi':
            msg.reply('Greetings, Human! \\*Beep Boop\\*');
            break;
        case 'THEMIND':
            // msg.reply("FOCUS")
            if(args[1] === 'version'){
                msg.channel.send('Version 0.1.0');
            }
            else if(args[1] === 'usage'){
                msg.channel.send('THEMIND [PLAYER COUNT] [ROUND NUMBER]');
            }
            else if(args.length < 3){
                msg.reply('Remember to include a player count, then a round number.');
            }
            else{
                let players = args[1];
                let round = args[2];
                let cards = [];
                let deck = [];
                playerNames = NAMES;
                // playerNames = []; for(i = 0; i < players; i++){ playerNames.push(`Player ${i + 1}`); }
                for(i = 0; i < 1000000; i++){// Make an array with numbers 1-100
                    deck.push(i + 1)
                }
                msg.channel.send(`Starting round ${round} with ${players} players. Cards range from ${deck[0]} to ${deck[deck.length - 1]}.`);
                deck = shuffle(deck);
                // msg.channel.send("Here's the unshuffled deck: " + deck);

                playerCards = []
                for(i = 0; i < players; i++){
                    hand = []
                    for(j = 0; j < round; j++){
                        hand.push(deck.pop())
                    }
                    playerCards.push(hand)
                }
                for(i = 0; i < players; i++){
                    let tail = String(Math.floor(Math.random() * 1000000));
                    msg.channel.send(`${playerNames[i]}'s cards: ||Hand: ${playerCards[i].sort((a, b)=> a - b)}\\_\\_\\_\\_\\_Tail: ${tail}||`)
                }
            }
            break;
        case 'TEAMS':
            if(args.length < 2){
                msg.reply('Usage: TEAMS [NUMBER OF TEAMS]');
                return;
            }
            teams = new Array(args[1]);
            for(i = 0; i < args[1]; i++){
                teams[i] = []
            }
            playerNames = shuffle(NAMES);
            // playerNames = []; for(i = 0; i < players; i++){ playerNames.push(`Player ${i + 1}`); }
            while(playerNames.length > 0){
                for(i = 0; i < teams.length; i++){
                    if(playerNames.length > 0){
                        teams[i].push(playerNames.pop());
                    }
                }
            }
            for(i = 0; i < args[1]; i++){
                msg.channel.send(`Team ${i + 1}: ${teams[i]}`);
            }
            break;
        case 'COLORS':
            msg.channel.send(`Colors: ${shuffle(['Red', 'Blue'])}`)
            break;
        case 'DRUMROLL':
            for(i = 0; i < 6; i++){
                msg.channel.send('\\*Drums\\*');
            }
            break;
        case 'FOCUS':
            msg.channel.send('https://media.giphy.com/media/l4FGHqrRZNPkfoLCw/giphy.gif');
            break;
        case 'LUIGI':
            msg.channel.send('https://youtu.be/15nNY7uofNw');
            break;
        case 'HELP':
            msg.channel.send(`Commands:
            !THEMIND [PLAYER COUNT] [ROUND NUMBER]
                Starts a game of The Mind with the given player count and round number.
            !TEAMS [NUMBER OF TEAMS]
                Splits the group into the given number of teams.
            !COLORS
                Prints "Red" and "Blue" in a random order.
            !DRUMROLL
                Enhances the ~Drama~`);
            break;
    }
});
bot.login(token);

// bot.on('message', msg => {
//     if(msg.content === 'THEMIND'){

//         let round = 5;
//         let players = 6;
//         let cards = [];
//         let deck = [];  
//         for(i = 0; i < 100; i++){// Make an array with numbers 1-100
//             deck.push(i + 1)
//         }
//         msg.channel.send(`Starting round ${round} with ${players} players. Cards range from ${deck[0]} to ${deck[deck.length - 1]}.`)
//         deck = shuffle(deck);
//         // msg.channel.send("Here's the unshuffled deck: " + deck);

//         playerCards = []
//         for(i = 0; i < players; i++){
//             hand = []
//             for(j = 0; j < round; j++){
//                 hand.push(deck.pop())
//             }
//             playerCards.push(hand)
//         }
//         for(i = 0; i < players; i++){
//             let tail = String(Math.floor(Math.random() * 1000000));
//             msg.channel.send(`Player ${i + 1} has the following hand: ||Hand: ${playerCards[i]} Tail: ${tail}||`)
//         }
//     }
// });
