import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042723';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        navigate={navigate}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {currentPage === 'home' && (
          <TextForm
            heading="Enter the text to analyze below"
            mode={mode}
            showAlert={showAlert}
          />
        )}
        {/* {currentPage === 'about' && <About />} */}
      </div>
    </>
  );
}

export default App;
