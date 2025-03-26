import Navbar from "../Components/Navbar"


function Marquee({msg}){
 
    return(<>
    <Navbar />
    <marquee style={{fontSize:'50px'}}>{msg}</marquee>
    </>
    )
}

export default Marquee