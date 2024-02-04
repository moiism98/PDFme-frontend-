import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PdfContext } from './context/Context.tsx';
import ReactDOM from 'react-dom/client'
import Index from './pages/Designer/index.tsx';
import './index.css'

const API_LINK = new HttpLink({
  uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: API_LINK,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <PdfContext>
      <Router>
        <Routes>
            <Route path='/' element={<Index/>}/>
        </Routes>
      </Router>
    </PdfContext>
  </ApolloProvider>
)
