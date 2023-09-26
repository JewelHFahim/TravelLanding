import logo from "../../assets/bg/Logo.png";


const Navbar = () => {

    return (
        <nav className="flex justify-between items-center px-[140px] py-5">
            <div>
                <img src={logo} alt="logo" className="" />
            </div>

            <div className="bg-[#4A8087] bg-opacity-[70%] py-3 px-[80px] rounded-[40px]">
                <ul className="flex text-white text-[17px] font-bold uppercase gap-[120px]">
                    <li><a href="" className="hover:border-b-2 border-white transform duration-150">Home</a></li>
                    <li><a href="" className="hover:border-b-2 border-white transform duration-150">Reason</a></li>
                    <li><a href="" className="hover:border-b-2 border-white transform duration-150">View Point</a></li>
                    <li><a href="" className="hover:border-b-2 border-white transform duration-150">Book NOw</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;