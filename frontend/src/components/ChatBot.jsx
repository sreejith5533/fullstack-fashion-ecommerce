import { useState } from "react";
import "../styles/chatbot.css";
import  API  from "../api/axios";
function ChatBot() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  const [message, setMessage] = useState([
    {
      sender: "ai",
      text: `Hello 👋 I'm your AI shopping assistant. How can I help you today?`,
    },
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

  
    setMessage((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput("");


    const response = await API.post('api/ai_chat/',{
      message : userInput
    }).then((res) => {
      const aiMessage = {
        sender: "ai",
        text: res.data.message,
      };

      setMessage((prev) => [...prev, aiMessage]);
    })
    
  };

  return (
    <>
      <div className="chat-btn" onClick={() => setShow(!show)}>
        <i className="fa-solid fa-message"></i>
      </div>

      {show && (
        <div className={`chatbot-container  ${show ? "show" : ""}`}>
          <div className="chatbot-header">
            <div className="profile">
              <img
                className="ai-img"
                src="customers/unnamed.png"
                alt="ai-img"
              />
            </div>
            <div className="title">
              <div className="heading-ai">
                <p>StoreFront AI Support</p>
                <small>Online now</small>
              </div>
              <button className="close-btn" onClick={() => setShow(!show)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <div className="chatbot-body">
            {message.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === "ai" ? "ai-msg" : "user-msg"}`}
              >
                <p className="message-text">{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <input
              className="form-control"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about products, orders, returns..."
            />
            <button className="ai-send-btn" onClick={handleSend}>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
