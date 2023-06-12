const { Blockchain } = require('./Blockchain.js');
const { Block } = require('./Block.js');


let tbCoin = new Blockchain();
console.log("tbCoin mining in progress....");
console.log('Adding Chain 1...');
tbCoin.addChain(
  new Block(1, "11/06/2023", {
    sender: "Bella Costa Honório dos Santos",
    recipient: "Pietra Costa Honório dos Santos",
    quantity: 50
  })
);
console.log('Adding Chain 2...');
tbCoin.addChain(
  new Block(2, "11/06/2023", {
    sender: "Pietra Costa Honório dos Santos",
    recipient: "Barbara Vitor Costa Honório dos Santos",
    quantity: 100
  })
);
console.log('Adding Chain 3...');
tbCoin.addChain(
    new Block(3, "11/06/2023", {
      sender: "Barbara Vitor Costa Honório dos Santos",
      recipient: "Marcelo Honório dos Santos",
      quantity: 350
    })
  );

console.log(tbCoin.validateChain());
console.log(JSON.stringify(tbCoin, null, 4));
