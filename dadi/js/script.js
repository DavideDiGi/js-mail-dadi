let player = Math.floor(Math.random() * 6 + 1);
let computer = Math.floor(Math.random() * 6 + 1);

console.log('player: ', player, typeof player);
console.log('computer: ', computer, typeof computer);

if (player > computer) {
    console.log('il vincitore è: player!');
}
else if (player < computer) {
    console.log('il vincitore è: computer!');
}
else{
    console.log('pareggio!');
}