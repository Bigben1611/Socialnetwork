import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Layout from './components/Layout/Layout'
function App() {
  return (
    <Router>
    <Layout header={Header} nav={Nav} main={Main}>
    </Layout>
    </Router>
  );
}

export default App;
