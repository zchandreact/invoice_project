import BrandIcon from "../atoms/BrandIcon";
import Navbar from "../organism/Navbar";

function Header()
{
    return(
        <div className="header_wrap">
            <BrandIcon />
            <Navbar />
        </div>
    )
}
export default Header;