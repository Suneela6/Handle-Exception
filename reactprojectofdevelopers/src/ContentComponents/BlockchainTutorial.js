import React from 'react';
import './styles.css';

const BlockchainTutorial = () => (
  <div className="container">
    <h2 className="heading">Blockchain Tutorial</h2>
    <p className="tutorial-text">
      Blockchain technology in simple words is a digital database where information or data is stored in blocks that are linked together to form a chain. This Blockchain Tutorial covers all basic to advanced topics of blockchain like cryptography, Blockchain Algorithms, Blockchain Architecture, Blockchain Security, Smart Contracts, etc.
    </p>
    <h3 className="sub-heading">Introduction to Blockchain</h3>
    <p className="tutorial-text">
      Blockchain is a decentralized, distributed ledger technology that underpins cryptocurrencies like Bitcoin. It consists of a chain of blocks, each containing a list of transactions. These blocks are linked together using cryptographic hashes, ensuring the integrity and immutability of the data.
    </p>
    <h3 className="sub-heading">Blockchain Technology Components</h3>
    <p className="tutorial-text">
      1. Blocks: Each block contains a list of transactions and a reference to the previous block, forming a chain.
      <br />
      2. Decentralized Network: Blockchain operates on a peer-to-peer network, eliminating the need for a central authority.
      <br />
      3. Consensus Mechanism: Blockchain relies on a consensus mechanism to validate transactions and maintain the integrity of the network.
      <br />
      4. Cryptography: Cryptographic techniques like hashing and digital signatures are used to secure transactions and ensure privacy.
    </p>
    <h3 className="sub-heading">Blockchain Applications</h3>
    <p className="tutorial-text">
      Blockchain technology has applications beyond cryptocurrencies, including supply chain management, voting systems, identity verification, and more.
    </p>
    <h3 className="sub-heading">Blockchain Security</h3>
    <p className="tutorial-text">
      Security is a critical aspect of blockchain technology, with features like immutability, transparency, and decentralization enhancing security.
    </p>
    <h3 className="sub-heading">Smart Contracts</h3>
    <p className="tutorial-text">
      Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically enforce and execute the terms when predefined conditions are met.
    </p>
  </div>
);

export default BlockchainTutorial;
