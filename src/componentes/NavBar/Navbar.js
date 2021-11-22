import './NavBar.css'

const Button = (props) =>  { 
  
    return (
      <button>{props.label}</button>
    )
}

const NavBar = () => {
    return (
        <header>
            <img className= "logo" src="./public.logo192.png" alt="logo"></img>
            <nav>
                <ul className="nav_links">
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Acerca de</a></li>
                </ul>
            </nav>
            <a className="cta" href="#"><Button label= 'contacto'/></a>
        </header>

    )
}

export default NavBar