import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
    <li><NavLink to="/statistics">Statistics</NavLink></li>
    <li><NavLink to="/applied">Applied Jobs</NavLink></li>
    <li><NavLink to="/blogs">Blog</NavLink></li>
    </>

    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">CareerHub</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="normal-case btn bg-[#7E90FE] text-white hover:bg-[#9873FF]">Star Applying</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;