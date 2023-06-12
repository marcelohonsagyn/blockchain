const SHA256 = require('crypto-js/sha256');

class Block {
      
      constructor(index, timestamp, data, precedingHash = " ") {
          this.index = index;
          this.timestamp = timestamp;
          this.data = data;
          this.precedingHash = precedingHash;
          this.hash = this.calculateHash();
          this.nonce = 0;
      }

      calculateHash() {
          return SHA256(
            this.index +
              this.precedingHash +
              this.timestamp +
              JSON.stringify(this.data) +
              this.nonce
          ).toString();
      }

      proofChain(complexityLevel) {
          while (
            this.hash.substring(0, complexityLevel) !== Array(complexityLevel + 1).join("0")
          ) {
            this.nonce++;
            this.hash = this.calculateHash();
          }
      }
  }

module.exports.Block = Block;