import React, { Component } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/SideBar';
import './App.css';
import Layout from './Layout';
class App extends Component {
  
  render() {
    return (
      <div className="App">
       
<Layout></Layout>
        
      </div>
    );
  }
}

export default App;
