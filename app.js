const { Blockchain } = require('./Blockchain.js');
const { Block } = require('./Block.js');


var tbCoin = new Blockchain();
console.log("tbCoin mining in progress....");
console.log('Adding Chain 1...');
tbCoin.addChain(
  new Block(1, "11/06/2023", {
    origin: "Bella Costa Honório dos Santos",
    destiny: "Pietra Costa Honório dos Santos",
    amount: 50
  })
);

console.log('Adding Chain 2...');
tbCoin.addChain(
  new Block(2, "11/06/2023", {
    origin: "Pietra Costa Honório dos Santos",
    destiny: "Barbara Vitor Costa Honório dos Santos",
    amount: 100
  })
);

console.log('Adding Chain 3...');
tbCoin.addChain(
    new Block(3, "11/06/2023", {
      origin: "Barbara Vitor Costa Honório dos Santos",
      destiny: "Marcelo Honório dos Santos",
      amount: 350
    })
  );

console.log(tbCoin.validateChain());
console.log(JSON.stringify(tbCoin, null, 4));
