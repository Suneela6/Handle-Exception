import React from 'react';
import './styles.css';

const BlockchainSecurityContent = () => (
  <div className="container">
    <h2 className="heading">Blockchain Security</h2>
    <p className="tutorial-text">
      Blockchain security is of utmost importance to ensure the integrity and safety of data stored on the blockchain network. Here are some key aspects of blockchain security:
    </p>
    <div className="security-point">
      <h3 className="sub-heading">Immutability</h3>
      <p className="tutorial-text">
        The immutability of blockchain data ensures that once a transaction is recorded on the blockchain, it cannot be altered or tampered with. This feature provides trust and transparency in the network.
      </p>
    </div>
    <div className="security-point">
      <h3 className="sub-heading">Cryptography</h3>
      <p className="tutorial-text">
        Cryptographic techniques such as hashing and digital signatures are used to secure transactions and ensure data privacy on the blockchain. These techniques prevent unauthorized access and protect sensitive information.
      </p>
    </div>
    <div className="security-point">
      <h3 className="sub-heading">Decentralization</h3>
      <p className="tutorial-text">
        Blockchain's decentralized nature distributes data across multiple nodes in the network, making it resistant to single points of failure and reducing the risk of cyber attacks. Decentralization enhances security by eliminating central authorities and reducing the likelihood of data manipulation.
      </p>
    </div>
    <div className="security-point">
      <h3 className="sub-heading">Consensus Mechanisms</h3>
      <p className="tutorial-text">
        Consensus mechanisms like Proof of Work (PoW) and Proof of Stake (PoS) ensure agreement among network participants and prevent malicious activities such as double-spending and Sybil attacks. These mechanisms enhance the security and integrity of the blockchain network.
      </p>
    </div>
  </div>
);

export default BlockchainSecurityContent;
