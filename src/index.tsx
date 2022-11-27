import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink} from '@apollo/client';

const httpLink = new HttpLink({
  uri: "https://api.spacex.land/graphql/"
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(client)
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
