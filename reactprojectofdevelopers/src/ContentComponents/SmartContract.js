import React from 'react';
import './styles.css';

const SmartContractContent = () => (
  <div className="container">
    <h2 className="heading">Smart Contracts</h2>
    <p className="tutorial-text">
      Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically enforce and execute the terms when predefined conditions are met. Smart contracts run on blockchain networks, providing security, transparency, and efficiency in various applications.
    </p>
    <div className="smart-contract-example">
      <h3 className="sub-heading">Example of Smart Contracts</h3>
      <p className="tutorial-text">
        One example of a smart contract application is in supply chain management. Smart contracts can automate and track the flow of goods across the supply chain, triggering payments and notifications when certain conditions are met, such as delivery confirmation.
      </p>
    </div>
    <div className="smart-contract-advantages">
      <h3 className="sub-heading">Advantages of Smart Contracts</h3>
      <ul className="advantages-list">
        <li className="advantage-item">1. Automation: Smart contracts automate processes, reducing the need for intermediaries and streamlining operations.</li>
        <li className="advantage-item">2. Transparency: Transactions on blockchain networks are transparent and immutable, providing a reliable audit trail.</li>
        <li className="advantage-item">3. Security: Smart contracts are executed on a decentralized network, reducing the risk of tampering or fraud.</li>
        <li className="advantage-item">4. Efficiency: Smart contracts enable faster and cheaper transactions by eliminating manual processes and paperwork.</li>
      </ul>
    </div>
  </div>
);

export default SmartContractContent;
