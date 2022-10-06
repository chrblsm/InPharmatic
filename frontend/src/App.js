import { Container } from 'react-bootstrap'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div> 
      <Header />
      <main className='py-3'>
        <Container>
        <h1>Welcome to InPharmaric</h1>
        <HomeScreen />
        </Container>
      </main>
      <Footer />
      </div>
  );
}

export default App;
