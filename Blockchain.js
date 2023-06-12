
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

      addChain(block) {
          block.precedingHash = this.getLastBlock().hash;
          block.proofChain(this.complexityLevel);
          this.blockchain.push(block);
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