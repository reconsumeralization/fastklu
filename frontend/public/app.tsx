import React, { Component } from 'react';
import axios from 'axios';

interface AppState {
  data: any;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { data: null };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get('/api'); // Update this line with the correct API endpoint
      this.setState({ data: response.data });
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  render() {
    return (
      <div>
        <h1>Klu Chatbot</h1>
        {this.state.data ? (
          <div>
            <h2>Data from API:</h2>
            <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}