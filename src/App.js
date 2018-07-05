import React, { Component } from 'react';
import Article from './Article';
import Editor from './Editor';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = { page: 'article' };
    }
  render() {
    return (
      <div className='App'>
          <div className='button-wrapper'>
              <button onClick={() => this.setState({ page: 'editor' })}>
                  Show Editor
              </button>
              <button onClick={() => this.setState({ page: 'article' })}>
                  Show Article
              </button>
          </div>
          {this.state.page === 'article' && <Article />}
          {this.state.page === 'editor' && <Editor />}
      </div>
    );
  }
}

export default App;
