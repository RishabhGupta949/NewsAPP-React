import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element = {<News key="general" apiKey={this.apiKey} pageSize = {7} country = "in" category = "general"/>}/>
            <Route exact path="/business"element= {<News key="business"  apiKey={this.apiKey}pageSize={7} country="in" category="business" />}/>
            <Route exact path="/entertainment"element = {<News key="entertainment" apiKey={this.apiKey} pageSize={7} country="in" category="entertainment" />}/>
            <Route exact path="/general"element= {<News key="general" apiKey={this.apiKey} pageSize={7} country="in" category="general"/>}/>
            <Route exact path="/health"element={<News key="health"  apiKey={this.apiKey}pageSize={7} country="in" category="health" />}/>
            <Route exact path="/science"element={<News key="science" apiKey={this.apiKey} pageSize={7} country="in" category="science" />}/>
            <Route exact path="/sports"element={<News key="sports" apiKey={this.apiKey} pageSize={7} country="in" category="sports"/>}/>
            <Route exact path="/technology"element={<News key="technology" apiKey={this.apiKey} pageSize={7} country="in" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
