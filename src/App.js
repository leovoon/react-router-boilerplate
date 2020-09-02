import React from 'react';
import './App.css';
import AppRouter from './configs/AppRouter'
import Header from './components/pages/Header'
import Footer from './components/pages/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter/>
      <Footer />
      </div>
  );
}

export default App;
