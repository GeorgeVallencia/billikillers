import { useNavigate } from "react-router-dom";
function HomeMenu() {

 const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  return(
    <div>
      <div className="mx-auto sm:grid grid-cols-2 px-10 gap-4 justify-between items-center max-w-5xl mt-36 mb-20">
        <div className="">
          <p className="text-orange-600 font-bold text-5xl p-3 tracking-wider">Read, comment and even earn a little bit of money on the side with BilliKillers.</p>
          <p className="p-3 tracking-wide">There's no other place that combines such an excellent level of writing with a truly engaged and active community.</p>
        </div>
        <div>
          <img className="rounded-lg" src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="description image" />
        </div>
      </div>
      <div className="flex justify-center mx-auto items-center max-w-5xl mt-48 ">
        <button onClick={handleClick} className="border rounded-lg bg-orange-600 text-white py-3 px-7 font-bold text-xl">Get Started</button>
      </div>
      <hr className="mt-8 max-w-5xl mx-auto" />
    </div>
  );
}

export default HomeMenu;