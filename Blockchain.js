
const { Block } = require("./Block");
require('dotenv').config();

class Blockchain {

      constructor() {
          this.blockchain = [this.startTrueBoss()];
          this.complexityLevel = Number(process.env.COMPLEXITY_LEVEL);
      }

      startTrueBoss() {
          return new Block(0, "11/06/2023", "Birth of True Boss Coin", "0");
      }

      getLastBlock() {
          return this.blockchain[this.blockchain.length - 1];
      }

      addChain(newBlock) {
          newBlock.precedingHash = this.getLastBlock().hash;
          newBlock.proofChain(this.complexityLevel);
          this.blockchain.push(newBlock);
      }

      validateChain() {

          for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const precedingBlock = this.blockchain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
              return false;
            }

            if (currentBlock.precedingHash !== precedingBlock.hash) {
              return false;
            } 
          }
          return true;
      }

  }
  

module.exports.Blockchain = Blockchain;