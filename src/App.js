
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App(){
  return (
    <>
    <Navbar title="TextUtils" About="About Us"/>
    <div className='container my-3'>
    <TextForm heading="Enter the text to analyz"/>
    <button className='btn btn-primary'>Convert to UpperCase</button>
    </div>
   
    </>
  )
}

export default App;