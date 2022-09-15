import { Link } from 'react-router-dom'
function Header(props) {
    const navStyle = {
        color:'white'
    };
  return (
    <div>
        <nav className="navigation">
            <h2>{props.text}</h2>
            
            <ul className="nav-links">
            <Link style={navStyle} to="/">Home</Link>

            <Link style={navStyle} to="/add">addPlayer</Link>
            <Link style={navStyle} to="/show">showPlayer</Link>
            </ul>
        </nav>
    </div>
  );
}

export default Header;