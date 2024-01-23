import React, { useState, useEffect } from 'react';
import { Form, Button, Segment, Icon, Grid, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Chat = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [message, setMessage] = useState('');
 const [messages, setMessages] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3001/chat',
      );

      setMessages(result.data);
    };

    fetchData();
    fetchData();
 }, []);

 const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      username,
      message,
    };

    const result = await axios.post(
      'http://localhost:3001/chat',
      newMessage,
    );

    setMessages([...messages, result.data]);
    setMessage('');
 };

 return (
    <div>
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment stacked>
            <Form size="large" onSubmit={handleSubmit}>
              
              
              <Form.TextArea
                fluid
                label="kamali🩵"
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button color="teal" fluid size="large" type="submit">
                Send
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
      <div style={{ height: '70vh', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <Segment key={index}>
            <Label color="blue" ribbon>{msg.username}</Label>
            <p>{msg.message}</p>
          </Segment>
        ))}
      </div>
    </div>
 );
};

export default Chat;
