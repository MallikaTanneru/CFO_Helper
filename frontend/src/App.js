// BarChart component for graphical output
import React, { useRef, useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function BarChart({ forecast }) {
  const chartRef = useRef(null);
  useEffect(() => {
    if (!forecast) return;
    const ctx = chartRef.current.getContext('2d');
    if (chartRef.current._chart) {
      chartRef.current._chart.destroy();
    }
    chartRef.current._chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Expenses', 'Revenue', 'Profit'],
        datasets: [
          {
            label: 'Amount (₹)',
            data: [forecast.expenses, forecast.revenue, forecast.profit],
            backgroundColor: [
              '#d32f2f',
              '#1976d2',
              '#43a047'
            ],
            borderRadius: 8
          }
        ]
      },
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true, grid: { color: '#eee' } }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
    // Cleanup chart on unmount
    return () => {
      if (chartRef.current._chart) {
        chartRef.current._chart.destroy();
      }
    };
  }, [forecast]);
  return (
    <div style={{ width: '100%', height: 220, marginBottom: 8 }}>
      <canvas ref={chartRef} />
    </div>
  );
}
// Already imported above
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';


function App() {
  const [engineers, setEngineers] = useState(5);
  const [marketing, setMarketing] = useState(20000);
  const [productPrice, setProductPrice] = useState(100);
  const [forecast, setForecast] = useState(null);
  const [usageCount, setUsageCount] = useState(0);
  const [reportUrl, setReportUrl] = useState('');
  const [page, setPage] = useState('home'); // start with landing
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/usage')
      .then(res => res.json())
      .then(data => setUsageCount(data.usageCount));
  }, []);

  const simulateScenario = async () => {
    const res = await fetch('http://localhost:4000/api/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ engineers, marketing, productPrice })
    });
    const data = await res.json();
    setForecast(data.forecast);
    setUsageCount(data.usageCount);
  };

  const exportReport = async () => {
    const res = await fetch('http://localhost:4000/api/export', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    setReportUrl(data.reportUrl);
    setUsageCount(data.usageCount);
  };

  const handleLogin = (email) => {
    setUser(email);
    setPage('main'); // go to main content after login
  };
  const handleSignup = (email) => {
    setUser(email);
    setPage('login'); // go to login after signup
  };
  const handleLogout = () => {
    setUser(null);
    setPage('login');
  };

  let content;
  if (page === 'home') {
    content = <Home onNavigate={setPage} isLoggedIn={!!user} />;
  } else if (page === 'signup') {
    content = <Signup onSignup={handleSignup} />;
  } else if (page === 'login') {
    content = <Login onLogin={handleLogin} />;
  } else if (page === 'main' && user) {
    content = (
      <div className="card fade-in">
        <h2 style={{ color: '#1976d2', marginBottom: 24 }}>Scenario Simulator</h2>
        <div style={{ marginBottom: 15 }}>
          <label>Engineers: <b>{engineers}</b></label>
          <input type="range" min="1" max="20" value={engineers} onChange={e => setEngineers(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <label>Marketing Spend: <b>₹{marketing}</b></label>
          <input type="range" min="0" max="100000" step="1000" value={marketing} onChange={e => setMarketing(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <label>Product Price: <b>₹{productPrice}</b></label>
          <input type="range" min="10" max="1000" step="10" value={productPrice} onChange={e => setProductPrice(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
          <button onClick={simulateScenario} style={{ padding: '10px 24px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 500, fontSize: 16, boxShadow: '0 2px 8px #1976d233' }}>Simulate Scenario</button>
          <button onClick={exportReport} style={{ padding: '10px 24px', background: '#43a047', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 500, fontSize: 16, boxShadow: '0 2px 8px #43a04733' }}>Export Report</button>
        </div>
        <div style={{ marginTop: 20, fontSize: 17 }}>
          <strong>Usage Count:</strong> {usageCount}
        </div>
        {forecast && (
          <div className="card fade-in" style={{ marginTop: 24, background: '#f8f8f8', padding: 24, borderRadius: 12, boxShadow: '0 2px 8px #1976d233', textAlign: 'left', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            <h3 style={{ color: '#1976d2', marginBottom: 16, fontSize: 22 }}>
              <img src="https://img.icons8.com/fluency/32/combo-chart.png" alt="Forecast" style={{ verticalAlign: 'middle', marginRight: 8 }} />
              Forecast Output
            </h3>
            <BarChart forecast={forecast} />
            <ul style={{ fontSize: 18, lineHeight: 1.7, margin: '24px 0 0 0', padding: 0, listStyle: 'none' }}>
              <li><b>Engineers:</b> {forecast.engineers}</li>
              <li><b>Marketing:</b> ₹{forecast.marketing}</li>
              <li><b>Product Price:</b> ₹{forecast.productPrice}</li>
              <li><b>Expenses:</b> <span style={{ color: '#d32f2f' }}>₹{forecast.expenses}</span></li>
              <li><b>Revenue:</b> <span style={{ color: '#1976d2' }}>₹{forecast.revenue}</span></li>
              <li><b>Profit:</b> <span style={{ color: '#43a047' }}>₹{forecast.profit}</span></li>
            </ul>
          </div>
        )}

        {reportUrl && (
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <a href={reportUrl} download style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: '#1976d2',
              color: '#fff',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 18,
              textDecoration: 'none',
              boxShadow: '0 2px 8px #1976d233',
              marginTop: 8
            }}>Download Report</a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      <Navbar onNavigate={setPage} isLoggedIn={!!user} onLogout={handleLogout} page={page} />
      {content}
    </div>
  );
}

export default App;
