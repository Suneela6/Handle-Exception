import React from 'react';
import './styles.css';

const DAppsContent = () => (
  <div className="container">
    <h2 className="heading">Decentralized Applications (DApps)</h2>
    <p className="tutorial-text">
      Decentralized Applications (DApps) are applications that run on a decentralized network, typically blockchain. These applications operate without a central authority, allowing for greater transparency, security, and censorship resistance.
    </p>
    <div className="dapp-example">
      <h3 className="sub-heading">Example of DApps</h3>
      <p className="tutorial-text">
        One example of a DApp is a decentralized finance (DeFi) application. DeFi platforms enable users to access financial services such as lending, borrowing, and trading without the need for traditional intermediaries like banks. Smart contracts facilitate the automation of these financial transactions, ensuring trust and security.
      </p>
    </div>
    <div className="dapp-advantages">
      <h3 className="sub-heading">Advantages of DApps</h3>
      <ul className="advantages-list">
        <li className="advantage-item">1. Transparency: DApps operate on a transparent blockchain network, allowing users to verify transactions and data independently.</li>
        <li className="advantage-item">2. Security: The decentralized nature of DApps reduces the risk of single points of failure and hacking attacks.</li>
        <li className="advantage-item">3. Censorship Resistance: DApps are resistant to censorship, as they do not rely on centralized servers controlled by a single entity.</li>
        <li className="advantage-item">4. Accessible: DApps can be accessed by anyone with an internet connection, promoting financial inclusion and global participation.</li>
      </ul>
    </div>
  </div>
);

export default DAppsContent;
