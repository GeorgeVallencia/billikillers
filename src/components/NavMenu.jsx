import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { AiOutlineMenu } from 'react-icons/ai';


function NavMenu() {

  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signin');
  };

  const handleLogOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <div>
      <div className="flex mx-auto px-5 items-center max-w-5xl justify-between py-3">
        <div className="cursor-pointer hover:text-orange-600 tracking-wide">
          <Link to='/'>BilliKillers</Link>
        </div>
        <div className="hidden md:flex">
          <div className="flex items-center">
            <Link to='/articles' className="px-5 cursor-pointer hover:text-orange-600">Articles</Link>
            <Link to='/products' className="px-5 cursor-pointer hover:text-orange-600">Products</Link>
            <Link to='/packages' className="px-5 cursor-pointer hover:text-orange-600">Packages</Link>
          </div>
          { user?.email ?
            <div onClick={handleLogOut} className="cursor-pointer hover:text-orange-600 border border-orange-600 px-5 py-2 rounded-lg">
              <button onClick={handleClick}>LogOut</button>
            </div>
            :
            <div className="cursor-pointer hover:text-orange-600 border border-orange-600 px-5 py-2 rounded-lg">
              <button onClick={handleClick}>Sign In</button>
            </div>
          }
        </div>
        <div className='md:hidden cursor-pointer hover:text-orange-600' >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <hr className="max-w-5xl mx-auto mt-4" />
    </div>
  );
}

export default NavMenu;