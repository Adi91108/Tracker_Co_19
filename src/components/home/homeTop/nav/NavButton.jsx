   import { Link } from "react-router-dom";

   const NavButton = ({ linkButton, isSpecial }) => {


    return (<Link 
      className={isSpecial ? "nav-button specialStyle" : "nav-button"}
      to={linkButton.url}>
        {linkButton.link} 
      </Link>);
  };
  
  export default NavButton;
  