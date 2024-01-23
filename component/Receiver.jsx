import React, { useState, useEffect } from 'react';
import { Segment, Button, Header, Icon, Message } from 'semantic-ui-react';
import io from 'socket.io-client';

const App = () => {
 const [message, setMessage] = useState('');
 const [messages, setMessages] = useState([]);
 const [socket, setSocket] = useState(null);

 useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    newSocket.on('receiveMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      newSocket.disconnect();
    };
 }, []);

 const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', message);
    setMessage('');
 };

 return (
    <div>
      <Header as="h1">
        Chat Application
        <Header.Subheader>Receiver</Header.Subheader>
      </Header>

      <Segment raised>
        <Message.Group>
          {messages.map((msg, index) => (
            <Message key={index}>
              <Message.Header>{msg.user}</Message.Header>
              <p>{msg.text}</p>
            </Message>
          ))}
        </Message.Group>
      </Segment>

      <Segment raised>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" icon labelPosition="left">
            <Icon name="paper plane" />
            Send
          </Button>
        </form>
      </Segment>
    </div>
 );
};

export default App;