import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Layout from './components/Layout/Layout'
function App() {
  return (
    <>
    <Layout header={Header} nav={Nav} main={Main}>
    </Layout>
    </>
  );
}

export default App;
