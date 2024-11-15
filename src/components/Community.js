
import React, { useState } from 'react';


function App() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const submitMessage = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    const message = {
      content: userInput,
      date: formattedDate,
      time: formattedTime
    };

    setMessages(prevMessages => {
      const updatedMessages = [message, ...prevMessages];
      return updatedMessages.slice(0, 100); // Keep only the last 100 messages
    });

    setUserInput('');
  };

  return (
    <div className="c10">
      <div className="c11">
        <h2 className="c12">Nir Fit - Message Submission</h2>
        
        <label className="c13" htmlFor="userInput">Enter your message:</label>
        <input
          type="text"
          id="userInput"
          placeholder="Type something..."
          className="c14"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="c15" onClick={submitMessage}>Submit</button>

        <div id="displayArea" className="c16">
          {messages.map((msg, index) => (
            <div key={index} className="c17">
              <p className="c18"><strong>Message:</strong> {msg.content}</p>
              <p className="c19"><strong>Submitted on:</strong> {msg.date} at {msg.time}</p>
              <hr className="c20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
