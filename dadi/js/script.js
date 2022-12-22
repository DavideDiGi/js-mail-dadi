let player = Math.random();
console.log('player: ', Math.floor(player * 6) + 1);
let computer = Math.random();
console.log('computer: ', Math.floor(computer * 6) + 1);

if (player > computer) {
    console.log('il vincitore è: player!');
}
else if (player < computer) {
    console.log('il vincitore è: computer!');
}
