import Footer from "../Components/Footer";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import ScrollSpy from "../Components/ScrollSpy";

function Home(){

    return(<>
         <Navbar /> 
    <marquee style={{fontSize:'50px'}}>Hi, This is admin</marquee>
        {/* <ScrollSpy /> */}
        {/* <Login /> */}
         <Footer />
    </>
    )
}

export default Home