import React from 'react';

const styles = {
  container: {
    marginTop: '50px',
    minHeight: 'calc(100vh - 50 px)',
    display: 'flex',
    allignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAllign: 'center',
    color: '#1976d2',
  },
};

const HomeView = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hello! This is the main page of our service!</h1>
    </div>
  );
};

export default HomeView;
