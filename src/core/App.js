import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { ApolloProvider } from 'react-apollo'
import Routes from './routes'
import Stores from './stores'
import client from './apollo/Client'

class App extends Component {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
          <Provider {...Stores}>
            <Routes />
          </Provider>
        </ApolloProvider>
      </div>
    )
  }
}

export default App
