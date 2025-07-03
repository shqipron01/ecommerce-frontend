import React, { useState, useEffect, useRef } from 'react';
import echo from '../echo';
import Pusher from 'pusher-js';

const Chat = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const user = JSON.parse(localStorage.getItem('userInfo'));
  const userId = user?.id ?? 1;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
   useEffect(() => {
   const pusher = new Pusher('dab503397756ace18b9a', {
      cluster: 'eu',
   });

   const channel = pusher.subscribe('chat');

   channel.bind('MessageSent', function (data) {
    console.log('Pusher Message:', data);
      const newMsg = {
          text: data.message,
          sender: data.user_id ? 'you' : 'bot',
      };

      setMessages((prev) => [...prev, newMsg]);
    });

   return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
    }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/chat/messages');
        const data = await res.json();

        const formatted = data.map((m) => ({
          text: m.message,
          sender: m.user_id ? 'you' : 'bot',
        }));

        setMessages(formatted.reverse());
      } catch (err) {
        console.error('Gabim gjatë marrjes së mesazheve:', err);
      }
    };

    fetchMessages();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      const response = await fetch('http://localhost:8000/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, message: input }),
      });
      const data = await response.json();
    } catch (error) {
      console.error('Gabim gjatë dërgimit të mesazhit:', error);
    }

    setInput('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ backgroundColor: '#007bff', color: 'white', padding: '10px', fontWeight: 'bold' }}>
        Live Chat
        <button onClick={onClose} style={{ float: 'right', color: 'white', border: 'none', background: 'none', cursor: 'pointer' }}>✖</button>
      </div>

      <div style={{ flex: 1, padding: '10px', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'you' ? 'right' : 'left', marginBottom: '8px' }}>
            <span style={{
              background: msg.sender === 'you' ? '#dcf8c6' : '#eee',
              padding: '6px 10px',
              borderRadius: '8px',
              display: 'inline-block',
              maxWidth: '80%'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div style={{ padding: '10px', borderTop: '1px solid #ccc' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          style={{ width: '80%', padding: '8px' }}
        />
        <button onClick={sendMessage} style={{ width: '18%', marginLeft: '2%', padding: '8px' }}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
