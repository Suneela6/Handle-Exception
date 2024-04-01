import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import BlockchainTutorial from './ContentComponents/BlockchainTutorial';
import ConsensusAlgorithm from './ContentComponents/consensusAlgorithm';
import SmartContract from './ContentComponents/SmartContract';
import DApps from './ContentComponents/DApps';
import BlockchainSecurity from './ContentComponents/BlockchainSecurity';
import BlockchainApplications from './ContentComponents/BlockchainApplications';
import Tokenization from './ContentComponents/Tokenization';
import BlockchainScalability from './ContentComponents/BlockchainScalability';
import BlockchainInteroperability from './ContentComponents/BlockchainInteroperability';
import Footer from './Footer';
import SignUpButton from './SignUpButton';
import Comment from './Comment'; // Import the Comment component
import DiscussionPage from './DiscussionPage';

// Left menu header component
const LeftMenuHeader = ({ title, to }) => (
  <li>
    <Link to={to}>{title}</Link>
  </li>
);
const LeftMenu = () => {
  return (
    <div className="sidebar">
      <ul>
        <LeftMenuHeader title="Introduction to Blockchain Technology" to="/BlockchainTutorial" />
        {/* Add more menu items here */}
		<LeftMenuHeader title="Consensus Algorithms" to="/consensusAlgorithm" />
        <LeftMenuHeader title="Blockchain and Cryptocurrency" to="/smartcontract" />
        <LeftMenuHeader title="Blockchain Scalability" to="/blockchain-scalability" />
        <LeftMenuHeader title="Blockchain Interoperability" to="/blockchain-interoperability" />
        <LeftMenuHeader title="Tokenization" to="/tokenization" />

      </ul>
      <ul>
        <LeftMenuHeader title="Smart Contracts and Decentralized Applications (DApps)" to="/dapps" />
        <LeftMenuHeader title="Blockchain Security" to="/blockchain-security" />
        <LeftMenuHeader title="Blockchain Applications" to="/blockchain-applications" />
      </ul>
      <div>
        <Link to="/discussions" className="button-style">Discussions</Link>
      </div>
    </div>
  );
};

function App() {
  const [comments, setComments] = useState([]);

  const addComment = (content) => {
    const timeAdded = new Date().toLocaleString(); // Get current date and time
    const newComment = { timeAdded, content };
    setComments([...comments, newComment]);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>To Help Community Developers</h1>
          <SignUpButton />
        </header>
        <div className="content">
          <div className="left-menu">
            <LeftMenu />
          </div>
          <div className="right-menu">
            <Routes>
              <Route path="/BlockchainTutorial" element={<BlockchainTutorial />} />
              <Route path="/consensusAlgorithm" element={<ConsensusAlgorithm />} />
              <Route path="/smartcontract" element={<SmartContract />} />
              <Route path="/dapps" element={<DApps />} />
              <Route path="/blockchain-security" element={<BlockchainSecurity />} />
              <Route path="/blockchain-applications" element={<BlockchainApplications />} />
              <Route path="/blockchain-scalability" element={<BlockchainScalability />} />
              <Route path="/blockchain-interoperability" element={<BlockchainInteroperability />} />
              <Route path="/tokenization" element={<Tokenization />} />
              <Route path="/discussions" element={<DiscussionPage comments={comments} addComment={addComment} />} />
            </Routes>
          </div>
        </div>
        <Footer getCurrentDate={getCurrentDate} onAddComment={addComment} />
        {/* Render comments */}
        <div className="comments">
          <h2>Comments</h2>
          {comments.map((comment, index) => (
            <Comment key={index} userName="Anonymous" timeAdded={comment.timeAdded} content={comment.content} />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
