
function ScrollSPY(){

    return(
     <div>
  <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
    <a className="navbar-brand" href="#">Navbar</a>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading1">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading2">Qualification</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading3">Contact Info</a>
      </li>
 
    </ul>
  </nav>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset={0} className="scrollspy-example" tabIndex={0}>
    <h4 id="scrollspyHeading1">About Me</h4>
    <p>
      I'm Pursuing Masters in Computer Applicationc in Dayanand Sagar College of Arts, Science and Commerce.

    </p>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </p>
    
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </p>
    <h4 id="scrollspyHeading2">Qualification</h4>
    <p>Bachelor of Computer Applications from Sheshadripuram First Grade College, Yelahanka</p>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </p>
    <h4 id="scrollspyHeading3">Contact Info</h4>
    <p>You can reach out to me at: 560 7645 3434.</p>
    <p>You can reach out to me at: 560 7645 3434.</p>


    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </p>
  </div>
</div>

    )
}

export default ScrollSPY;