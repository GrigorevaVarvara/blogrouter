import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Blogs from './components/blogs/blogs';
import Works from './components/works/works';
import Contacts from './components/contacts/contacts';


function App() {
  return (
    <div className="App">
        <Header/>


        <Routes>
          <Route path='/' Component={Contacts}/>
          <Route path='/blogs' Component={Blogs} />
          <Route path='/works' Component={Works}/>
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
