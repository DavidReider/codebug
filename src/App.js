import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SinglePost from './components/SinglePost';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/blog/:slug' component={SinglePost} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
