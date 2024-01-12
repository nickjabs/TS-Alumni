import React from 'react';
import LoginButton from './LoginButton';
import NewAccountButton from './NewAccountButton';
import './App.css';

function App() {
  // definiert die Funktion für den Login-Button
  const handleLoginClick = () => {
    // Die Logik für die Authentifizierung käme hier hin
  };

  // definiert die Funktion für den New Account-Button
  const handleNewAccountClick = () => {
    // Logik für das Erstellen eines neuen Kontos hier
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Logo hier */}
        <img src="https://cdn.discordapp.com/attachments/1195301143161606205/1195301598507827240/techst_logo_rz_white.png?ex=65b37e5c&is=65a1095c&hm=951cba6cabd865ab2f4e7c4fd8e295c18bb4f3b9a3474d434849184a84fcbd48&" alt="Logo" className="logo" />
      </header>
      <div className="App-body">
        {/* Buttons für Login und Account-Erstellung*/}
        <LoginButton onClick={handleLoginClick} />
        <NewAccountButton onClick={handleNewAccountClick} />
      </div>
    </div>
  );
}

export default App;
