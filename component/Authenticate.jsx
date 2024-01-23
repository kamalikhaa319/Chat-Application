import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Message } from 'semantic-ui-react';

const Authenticate = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://your-api-url.com/auth/login', {
                email,
                password
            });

            localStorage.setItem('user', JSON.stringify(response.data));
            window.location.href = '/chat';
        } catch (err) {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit} error={error}>
                <Form.Field>
                    <label>Email</label>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Field>
                {error && <Message error>{error}</Message>}
                <Button type="submit">Login</Button>
            </Form>
        </div>
    );
};

export default Authenticate;