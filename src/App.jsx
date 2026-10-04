import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
// import Register from './components/Register';
// import Login from './components/Login';

function App() {
    return (
        <div className='min-vh-100 d-flex flex-column'>
            <Navbar />
            <div className='flex-grow-1'>
                {/* <Home /> */}
                <Cart />
                {/* <Register /> */}
                {/* <Login /> */}
            </div>
            <Footer />
        </div>
    );
}

export default App;