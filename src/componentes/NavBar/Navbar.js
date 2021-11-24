import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const Button = (props) =>  { 
  
    return (
      <button>{props.label}</button>
    )
}

const NavBar = () => {
    return (
        <header>
            <img className= "logo" src="../images/LOGO-BI-SIN-FONDO.png" alt="logo"></img>
            <nav>
                <ul className="nav_links">
                    <li><a href="#">Escalada</a></li>
                    <li><a href="#">Trekking</a></li>
                    <li><a href="#">Montañismo</a></li>
                </ul>
                
            </nav>

            <a className="cta" href="#"><Button label= 'contacto'/></a>
            <CartWidget/>
        </header>

    )
}

export default NavBar