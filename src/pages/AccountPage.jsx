import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function AccountPage() {

  const { user, logout } = UserAuth();

  return(
    <div className="mt-20 flex flex-col max-w-5xl mx-auto items-center">
      <p className="font-bold mx-auto ml-7 tracking-wide text-2xl text-center text-orange-600">My Account</p>
      <p className="font-bold tracking-wide mb-3">Display Name:</p>
      <p className="font-bold tracking-wide">Phone Number:</p>
      <p className="mx-auto mt-3 text-center tracking-wide font-bold ">My Email: <span className="text-gray-500">{user && user.email} </span></p>
      <Link to='/' className="border mt-4 mx-auto border-orange-600 tracking-wide py-2 px-5 font-bold hover:bg-orange-600 hover:text-white">Logout</Link>
    </div>
  );
}

export default AccountPage;