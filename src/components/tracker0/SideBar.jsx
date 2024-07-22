import { AiOutlineGlobal } from "react-icons/ai";
import { FaFolderOpen, FaVirusCovidSlash } from "react-icons/fa6";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoBarChart, IoPieChart } from "react-icons/io5";
import { TbBuildingEstate } from "react-icons/tb";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside>
      <div className="navSide">
        <div>
          <Link to={"/"}>
            {/* <img src="../src/assets/img/coronavirus.png" className="logoSide"  alt="logo sidebar"/> */}
            <FaVirusCovidSlash className="logoSide" />
          </Link>
        </div>
        <div className="menuSideBar">
          <ul>
            <Link to="/dashboard/tracker1">
              <li>
                <span className="ChartPie">
                  <IoPieChart size={25} />
                </span>
              </li>
            </Link>
            <Link to="/dashboard/tracker2">
              <li>
                <span className="Bars3">
                  <IoBarChart size={25} />
                </span>
              </li>
            </Link>
            <Link to="/dashboard/tracker3">
              {" "}
              <li>
                <span className="Squares">
                  <HiMiniSquares2X2 size={25} />
                </span>
              </li>
            </Link>
            <Link to="/dashboard/tracker4">
              <li>
                <span className="Folder">
                  <FaFolderOpen size={25} />
                </span>
              </li>
            </Link>
            <Link to="/dashboard/tracker4">
              <li>
                <span className="SquaresStack">
                  <AiOutlineGlobal size={25} />
                </span>
              </li>
            </Link>
            <li>
              <span className="ArrowTrendingUp">
                <TbBuildingEstate size={25} />
              </span>
            </li>
           
          </ul>
        </div>
      </div>
    </aside>
  );
};
export default SideBar;
