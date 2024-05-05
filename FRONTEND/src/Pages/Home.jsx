import '../Components/Styling.css';
import Content from '../Components/Content';
import Header from '../Components/Header';
import Footer from '../Components/Footer';



export default function Home(){
  return(
    <>
    <div className='wrap'>
    <Header />
    <Content />
    <Footer/>
    </div>
    </>
  );
}