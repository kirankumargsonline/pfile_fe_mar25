import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Home() {

    return (<>
        <Navbar />
        <marquee style={{ fontSize: '50px' }}>Hi, This is admin</marquee>
        <Footer />
    </>
    )
}

export default Home