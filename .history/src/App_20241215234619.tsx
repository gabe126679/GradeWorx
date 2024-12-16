import React from 'react';
import Header from './components/Header';
import ChatBot from './components/ChatBot';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <Home />
        <Services />
        <Projects />
        <Contact />
      </main>
      <ChatBot />
    </div>
  );
}

export default App;