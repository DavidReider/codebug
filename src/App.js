import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
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
        <Route path='/blog/:slug' component={SinglePost} />
        <Route path='/blog' component={Blog} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/manage' component={() => { 
            window.location.href = 'https://codebug.sanity.studio/desk'; 
            return null;
        }} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
