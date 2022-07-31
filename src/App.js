import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <div className='section-1'>
        <Navbar></Navbar>
        <div className='content container'>
          <div className='abstract-cirlce'></div>
          <div className='row pt-5'>
            <div className='col-sm-6'></div>
            <div className='col-sm-6 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>
          </div>
          <div className='row mt-5'>
            <p><i><b>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</b></i></p>
          </div>
          <div className='svg'></div>
          <div className='container-wave'>
            <div className='circle-1'></div>
            <div className='circle-2'></div>
            <div className='abstract-wave-1'></div>
            <div className='abstract-wave-2'></div>
            <div className='abstract-wave-3'></div>
          </div>
        </div>
      </div>
      <div className='about'>
        <h1 className='text-center text-header'>ABOUT</h1>
        
      </div>
    </div>
  );
}

export default App;
