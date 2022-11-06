import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Projects from './pages/Projects';
import Equipment from './pages/Equipment';
import Employees from './pages/Employees';
import Timesheets from './pages/Timesheets';
import CreateTimesheet from './pages/CreateTimesheet';
import Header from './components/Header';
import Footer from './components/Footer';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/projects" 
                element={<Projects />} 
              />
              <Route 
                path="/equipment" 
                element={<Equipment />} 
              />
              <Route 
                path="/employees" 
                element={<Employees />} 
              />
              <Route 
                path="/timesheets" 
                element={<Timesheets />} 
              />
              <Route 
                path="/create" 
                element={<CreateTimesheet />} 
              />
            </Routes>
          </div>
          <Footer />
        </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;
