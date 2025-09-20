import React, { useState } from 'react';

function Signup({ onSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock signup
    if (email && password) {
      onSignup(email);
    }
  };

  return (
    <div style={{ maxWidth: 350, margin: '60px auto', padding: 30, boxShadow: '0 0 10px #ccc', borderRadius: 8 }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', marginBottom: 10, padding: 8 }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', marginBottom: 10, padding: 8 }} />
        <button type="submit" style={{ width: '100%', padding: 10, background: '#43a047', color: '#fff', border: 'none', borderRadius: 4 }}>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
