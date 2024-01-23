import React, { useState } from 'react';
import { Button, Form, Grid, Header, Icon, Image, Segment, Message } from 'semantic-ui-react';

const Login = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      alert('All fields are required');
    } else {
      // Replace this part with your own logic to validate the login credentials
      alert('Logged in successfully');
    }
 };

 return (
    <center>
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
            
            SuperChat <Image src="https://cdn-icons-png.flaticon.com/128/566/566718.png" alt="width=20" height="20"/>
      
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-battery-full" viewBox="0 0 16 16">
  <path d="M2 6h10v4H2z"/>
  <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8"/>
</svg>
          <Icon name="chat" />
        
          
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button color="teal" fluid size="large" type="submit">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
    </center>
 );
};

export default Login;
