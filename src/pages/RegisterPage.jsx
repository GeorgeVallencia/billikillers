import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoMail, GoLock } from "react-icons/go";

function RegisterPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/packages');
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return(
    <div>
      <div className="text-center">
        <p className="font-bold text-2xl mt-6 tracking-wide">Welcome</p>
        <p className="mt-6 text-2xl tracking-wide">Signup to continue</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-24 max-w-5xl mx-auto items-center">
        <div className="flex justify-center mb-4">
          {/* <label className="items-center flex font-bold">Email:</label> */}
          <div className="flex items-center">
            <GoMail size={20} className="text-orange-600 translate-x-8" />
          </div>
          <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email Address" className="border shadow-lg rounded-lg py-2 pl-10 w-60 outline-none"/>
        </div>
        <div className="flex justify-center mb-4">
          {/* <label className="items-center flex font-bold">Password:</label> */}
          <div className="flex items-center">
            <GoLock size={20} className='text-orange-600 translate-x-8'/>
          </div>
          <input value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="border shadow-lg rounded-lg py-2 pl-10 w-60 outline-none"/>
        </div>
        <div className="flex justify-center">
          <button className="border px-5 py-2 ml-4 w-60 bg-orange-600 text-white rounded-lg font-bold">SignUp</button>
        </div>
      </form>
      <div>
        <p className="ml-10 text-lg tracking-wide text-center mt-20 mx-auto">Already a BilliKiler? <Link to='/signin' className="underline hover:text-orange-600 cursor-pointer">Sign In</Link></p>
      </div>
    </div>
  );
}

export default RegisterPage;