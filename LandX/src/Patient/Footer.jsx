// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.text}></h2>
        <p style={styles.text}> 6369348617</p>
        <p style={styles.text}> medtrack@gmail.com</p>
        <h1 style={styles.text}>MedTrack</h1>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#377d6b',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1800px',
    margin: '0 auto',
    padding: '0 20px',
    display:'flex',
  },
  text: {
    margin: '5px 120px',
  },
};

export default Footer;
