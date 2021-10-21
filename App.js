import { StatusBar } from 'expo-status-bar';
import React from 'react';


//components
import Home from "./components/Home.js"

// styled components
import { Container } from  "./styles/appStyles.js";

export default function App() {
  return (
    <Container>
      <Home/>
      <StatusBar style="light" />
    </Container>
  );
}

