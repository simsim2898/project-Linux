import React, { useState } from 'react';

const App = () => {
    const [formType, setFormType] = useState('register');
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        phone: '',
        nickname: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = formType === 'register' ? '/api/auth/register' : '/api/auth/login';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert(data.message);
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>Community App</h1>
            <div>
                <button onClick={() => setFormType('register')}>Register</button>
                <button onClick={() => setFormType('login')}>Login</button>
            </div>
            <form onSubmit={handleSubmit}>
                {formType === 'register' && (
                    <>
                        <div>
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Nickname:</label>
                            <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} required />
                        </div>
                    </>
                )}
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">{formType === 'register' ? 'Register' : 'Login'}</button>
            </form>
        </div>
    );
};

export default App;
