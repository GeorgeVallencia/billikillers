import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { UserAuth } from "../context/AuthContext";

function SignInPage() {

  const divEl = useRef();

  const { signIn } = UserAuth();
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //const [showModal, setShowModal] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    setError('');
    try {
      await signIn(email, password)
      navigate('/articles');
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    // const handler = (event) => {
    //   if(!divEl.current) {
    //     return;
    //   }
    //   if(!divEl.current.contains(event.target)) {
    //     setShowModal(false);
    //   }
    // };

    return () => {
      document.body.classList.remove('overflow-hidden');
      //document.removeEventListener('click', handler);
    }
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-80 flex"></div>
      <div className="fixed rounded sm:inset-40 p-10 bg-white sm:mx-auto ml-8 py-10 pt-24 items-center max-w-md">
        <p className="text-4xl font-bold mb-8">Sign In</p>
        <form onSubmit={handleSubmit} className="flex flex-col max-w-96">
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border-2 py-3 pl-2 rounded-lg outline-none" />
          <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border-2 py-3 pl-2 rounded-lg outline-none my-2" />
          <button className="bg-orange-600 py-3 rounded-lg text-white font-bold">Sign In</button>
        </form>
        <p className="text-center my-4 cursor-pointer hover:underline hover:text-orange-600">Forgot password?</p>
      <div className="flex my-4">
        <input type="checkbox" className="mr-4" />
        <p>Remember me</p>
      </div>
      <div className="flex">
        <p className="mr-2">New to BilliKillers?</p>
        <Link to="/register" className="hover:underline hover:text-orange-600">Sign up now.</Link>
      </div>
      <p className="my-8 text-sm">This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href='43' className="text-orange-600 cursor-pointer hover:underline">Learn more</a></p>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default SignInPage;