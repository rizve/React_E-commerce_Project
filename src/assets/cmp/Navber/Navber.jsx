import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navber() {
    return (
        <div>
            <div className="navbar bg-slate-00 text-black-400 font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                           
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={"/"} >Home</Link></li>
                            <li><Link to={"/shop"}>Shop</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to={"/"} className="text-2xl">M4sTech</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/shop"}>Shop</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-white-400 bg-red font-bold"><AiOutlineShoppingCart className="text-2xl" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navber