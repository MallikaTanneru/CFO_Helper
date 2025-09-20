import React from 'react';

function Navbar({ onNavigate, isLoggedIn, onLogout, page }) {
  return (
    <nav style={{ background: '#1976d2', color: '#fff', padding: '10px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontWeight: 'bold', fontSize: 22, letterSpacing: 1 }}>CFO Helper</span>
      <div>
        <button onClick={() => onNavigate('home')} style={{ marginRight: 10, background: 'none', color: '#fff', border: 'none', fontSize: 16 }}>Home</button>
        {page === 'home' && <>
          <button onClick={() => onNavigate('login')} style={{ marginRight: 10, background: 'none', color: '#fff', border: 'none', fontSize: 16 }}>Login</button>
          <button onClick={() => onNavigate('signup')} style={{ background: 'none', color: '#fff', border: 'none', fontSize: 16 }}>Sign Up</button>
        </>}
        {isLoggedIn && page === 'main' && <button onClick={onLogout} style={{ background: 'none', color: '#fff', border: 'none', fontSize: 16 }}>Logout</button>}
      </div>
    </nav>
  );
}

export default Navbar;
