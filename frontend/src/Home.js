import React from 'react';

function Home({ onNavigate }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(120deg, #1976d2 0%, #43a047 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 16px'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 24,
        boxShadow: '0 8px 32px #1976d233',
        padding: '48px 32px',
        maxWidth: 700,
        width: '100%',
        textAlign: 'center',
        marginBottom: 32,
        animation: 'fadeIn 1s'
      }}>
        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="Finance" style={{ width: '120px', marginBottom: 24, borderRadius: 16, boxShadow: '0 4px 24px #1976d233' }} />
        <h1 style={{ color: '#1976d2', fontWeight: 700, fontSize: 40, marginBottom: 12 }}>Welcome to CFO Helper Agent</h1>
        <div style={{ fontSize: 22, color: '#43a047', fontWeight: 600, marginBottom: 8 }}>Your virtual CFO for startups, events, and small businesses.</div>
        <div style={{ fontSize: 18, color: '#222', marginBottom: 24 }}>Simulate budget scenarios, forecast outcomes, and manage finances with ease.</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
          <div style={{ background: '#f5f5f5', borderRadius: 16, boxShadow: '0 2px 8px #1976d233', padding: 24, minWidth: 220, flex: '1 1 220px', textAlign: 'left' }}>
            <img src="https://img.icons8.com/fluency/48/slider.png" alt="Sliders" style={{ verticalAlign: 'middle', marginRight: 8 }} />
            <span style={{ fontWeight: 500 }}>Adjust spending, hiring, and pricing</span>
          </div>
          <div style={{ background: '#f5f5f5', borderRadius: 16, boxShadow: '0 2px 8px #1976d233', padding: 24, minWidth: 220, flex: '1 1 220px', textAlign: 'left' }}>
            <img src="https://img.icons8.com/fluency/48/combo-chart.png" alt="Chart" style={{ verticalAlign: 'middle', marginRight: 8 }} />
            <span style={{ fontWeight: 500 }}>See instant forecast in text and chart</span>
          </div>
          <div style={{ background: '#f5f5f5', borderRadius: 16, boxShadow: '0 2px 8px #1976d233', padding: 24, minWidth: 220, flex: '1 1 220px', textAlign: 'left' }}>
            <img src="https://img.icons8.com/fluency/48/share.png" alt="Report" style={{ verticalAlign: 'middle', marginRight: 8 }} />
            <span style={{ fontWeight: 500 }}>Export and share short financial reports</span>
          </div>
          <div style={{ background: '#f5f5f5', borderRadius: 16, boxShadow: '0 2px 8px #1976d233', padding: 24, minWidth: 220, flex: '1 1 220px', textAlign: 'left' }}>
            <img src="https://img.icons8.com/fluency/48/counter.png" alt="Counter" style={{ verticalAlign: 'middle', marginRight: 8 }} />
            <span style={{ fontWeight: 500 }}>Track usage count (scenarios tested)</span>
          </div>
          <div style={{ background: '#f5f5f5', borderRadius: 16, boxShadow: '0 2px 8px #1976d233', padding: 24, minWidth: 220, flex: '1 1 220px', textAlign: 'left' }}>
            <img src="https://img.icons8.com/fluency/48/receipt.png" alt="Flexprice" style={{ verticalAlign: 'middle', marginRight: 8 }} />
            <span style={{ fontWeight: 500 }}>Flexprice integration: bill per scenario/report</span>
          </div>
          <div style={{ background: '#f5f5f5', borderRadius: 16, boxShadow: '0 2px 8px #1976d233', padding: 24, minWidth: 220, flex: '1 1 220px', textAlign: 'left' }}>
            <img src="https://img.icons8.com/fluency/48/data-in-both-directions.png" alt="Pathway" style={{ verticalAlign: 'middle', marginRight: 8 }} />
            <span style={{ fontWeight: 500 }}>Pathway integration: live financial data updates</span>
          </div>
        </div>
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <span style={{ color: '#1976d2', fontWeight: 500, fontSize: 20 }}>Get started by signing up or logging in!</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
