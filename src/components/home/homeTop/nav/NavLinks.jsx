import NavButton from './NavButton.jsx';
import "./nav.css"

const list = [
  { link: "Home", url: "/"},
  { link: "Prevention", url: "#" },
  { link: "Qurantine", url: "#" },
  { link: "Pages", url: "#" },
  { link: "About", url: "#" },
  { link: "Help", url: "#" },
  { link: "Tracker", url: "/dashboard/tracker1",  }
];

const NavLinks = () => {
  const aList = list.map((link) => (
    <NavButton  
      key={link.link} 
      linkButton={link}
      isSpecial={link.link === "Tracker"}
      />
  ));
  
  return (
    <nav>
      {aList}
    </nav>
  );
};
export default NavLinks;

