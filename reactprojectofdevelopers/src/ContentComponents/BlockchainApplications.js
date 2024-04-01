import React from 'react';
import './styles.css';

const BlockchainApplicationsContent = () => (
  <div className="container">
    <h2 className="heading">Blockchain Applications</h2>
    <p className="tutorial-text">
      Blockchain technology has a wide range of applications across various industries. Here are some examples of how blockchain is being used:
    </p>
    <div className="application">
      <h3 className="sub-heading">Supply Chain Management</h3>
      <p className="tutorial-text">
        Blockchain is revolutionizing supply chain management by providing transparency, traceability, and efficiency. With blockchain, stakeholders can track the movement of goods from the source to the final destination, ensuring authenticity and reducing fraud.
      </p>
    </div>
    <div className="application">
      <h3 className="sub-heading">Finance and Banking</h3>
      <p className="tutorial-text">
        In the finance sector, blockchain is being used for various applications such as cross-border payments, trade finance, and asset tokenization. Blockchain-based financial systems offer faster transactions, lower costs, and improved security.
      </p>
    </div>
    <div className="application">
      <h3 className="sub-heading">Healthcare</h3>
      <p className="tutorial-text">
        Blockchain technology is transforming healthcare by enhancing patient data management, ensuring interoperability between healthcare providers, and enabling secure sharing of medical records. Blockchain can help reduce medical errors, improve patient care, and enhance data security.
      </p>
    </div>
  </div>
);

export default BlockchainApplicationsContent;
