// client/src/App.tsx
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>React + Node</h1>
        <p>Server says: {message}</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
