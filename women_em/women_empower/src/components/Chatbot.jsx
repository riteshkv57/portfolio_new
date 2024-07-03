// Chatbot.jsx

import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const message = e.target.elements.userInput.value.trim();
    if (message !== '') {
      setMessages([
        ...messages,
        { author: 'user', text: message },
        { author: 'bot', text: generateBotResponse(message) }
      ]);
      setUserInput('');
    }
  };

  const generateBotResponse = (userInput) => {
    // Pre-defined responses based on keywords
    const responses = {
      'hello': "Hello! How can I assist you today?",
      'hi': "Hi there! How can I help you?",
      'hey': "Hey! What can I do for you?",
      'women empowerment': "Women empowerment is crucial for societal progress.",
      'gender equality': "Gender equality is a fundamental human right.",
      'women rights': "Protecting and promoting women's rights is essential for a fair and just society.",
      'mental health': "Taking care of your mental health is important for overall well-being.",
      'physical health': "Maintaining a healthy lifestyle including regular exercise and balanced diet promotes physical health.",
      'career advice': "Finding a career you're passionate about and setting achievable goals can lead to fulfillment.",
      'productivity tips': "Staying organized, setting priorities, and taking breaks can improve productivity.",
      'financial planning': "Budgeting, saving, and investing wisely are key aspects of financial planning.",
      'time management': "Effective time management involves prioritizing tasks and avoiding procrastination.",
      'positive mindset': "Cultivating a positive mindset can enhance resilience and improve overall outlook on life.",
      'self-care practices': "Engaging in activities that promote self-care such as meditation, hobbies, and spending time with loved ones can reduce stress.",
      'social justice': "Promoting social justice involves advocating for fairness and equality for all members of society.",
      'environmental conservation': "Protecting the environment through sustainable practices and conservation efforts is crucial for future generations.",
      'technology trends': "Staying updated on latest technology trends can help in personal and professional growth.",
      'travel recommendations': "Exploring new destinations and experiencing different cultures can broaden perspectives and create memorable experiences.",
      'education opportunities': "Continuing education through courses, workshops, and self-learning can open doors to new opportunities.",
      'work-life balance': "Maintaining a balance between work and personal life is important for overall well-being and satisfaction.",
      'thanks': "You're welcome!",
      'thank you': "You're welcome!",
      'bye': "Goodbye! Feel free to come back anytime if you have more questions.",
      'goodbye': "Goodbye! Have a great day!",
      'yes': "Yes.",
      'no': "No.",
      'maybe': "Maybe.",
      'sure': "Sure!",
      'ok': "Okay.",
      'thanks': "Thank you!",
      'awesome': "That's awesome!",
      'cool': "Cool!",
      'great': "Great!",
      'amazing': "Amazing!",
      'fantastic': "Fantastic!",
      'excellent': "Excellent!",
      'default': "I'm here to assist you with any questions or concerns you may have. Feel free to ask!",
    };
    

    // Check if any keyword matches the user input
    const keywords = Object.keys(responses);
    for (let i = 0; i < keywords.length; i++) {
      if (userInput.toLowerCase().includes(keywords[i])) {
        return responses[keywords[i]];
      }
    }

    // If no keyword matches, return the default response
    return responses['default'];
  };

  return (
    <>
    <div
        className="chatbot-button"
        onClick={toggleChatbot}
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <i className="fas fa-comments">:)</i>
      </div>
    <div className="chatbot-container" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="chatbot">
        <div className="chatbot-header">
            Chatbot
            <button className="close-button" onClick={toggleChatbot}>
              <i className="fas fa-times">x</i>
            </button>
            </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.author}`}>
              <span className="message-text">{message.text}</span>
            </div>
          ))}
        </div>
        <form className="chatbot-form" onSubmit={handleMessageSubmit}>
        <input
              type="text"
              name="userInput"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Chatbot;
