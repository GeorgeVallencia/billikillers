import { GoBook, GoCheck, GoCheckCircle } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PackagesPage() {

  const navigate = useNavigate();

  const member = <p className="mb-2"><span className="text-gray-500 line-through mr-1">$7.99</span>$3.89 USD/year</p>
  const premium = <p className="mb-2"><span className="text-gray-500 line-through mr-1">$23.89</span>$11.99 USD/year</p>
  const monthly = <p className="mb-2">$1.99 USD/month</p> 
  const annual = <p className="mb-2">$3.99 USD/month</p>

  const [memberPrice, setMemberPrice] = useState(member);
  const [premiumPrice, setPremiumPrice] = useState(premium);
  const [activeMonthly, setActiveMonthly] = useState(false);
  const [activeAnnual, setActiveAnnual] = useState(false);

  let monthlyBtnClassName = 'border max-w-32 flex cursor-pointer items-center px-4 py-2 hover:hover:text-orange-600';
  let annualBtnClassName = 'border max-w-32 flex cursor-pointer items-center px-4 py-2 flex-col hover:hover:text-orange-600';

  const handleMonthlyClick = () => {
    
    setActiveMonthly(true);
    setActiveAnnual(false);
    setMemberPrice(monthly);
    setPremiumPrice(annual);
  }

  const handleAnnualClick = () => {
    
    setActiveMonthly(false);
    setActiveAnnual(true);
    setMemberPrice(member);
    setPremiumPrice(premium);
  }

  const handlePayment = () => {
    navigate('/payment');
  };

 return(
    <div className="mx-auto max-w-2xl text-center mt-10 px-4">
      <div className="font-bold text-orange-600 text-2xl my-6">
        <p>BilliKillers Post</p>
      </div>  
      <div className="mx-auto max-w-lg mb-6">
        <p className="text-2xl font-serif font-normal px-20">Support great writing and access all stories on BilliKillers.</p>
      </div>
      <div className="flex max-w-64 mx-auto justify-center mb-6">
        <button onClick={handleMonthlyClick} className={monthlyBtnClassName}>Pay monthly</button>
        <button onClick={handleAnnualClick} className={annualBtnClassName}>Pay annually<span className="text-xs">Save up to $20</span></button>
      </div>
      <div className="flex mx-auto max-w-2xl justify-between">
        <div className="border w-80 rounded">
          <div>
            <p className="font-bold text-xl my-2">Member</p>
            {memberPrice || member}
            <p className="text-sm text-gray-400">Access member-only stories and enjoy an enhanced reading and writing experience.
Cancel anytime.</p>
            <button onClick={handlePayment} className="my-4 border border-orange-600 py-1 px-6 rounded font-bold text-orange-600 cursor-pointer hover:bg-orange-600 hover:text-white mb-4">Subscribe</button>
            <hr className="mb-3 mx-3"></hr>
            <div className="text-left ml-5 font-light">
              <div className="flex items-center mb-2">
                <GoCheck  className="text-orange-600 mr-2 font-bold" />
                <p>Read member-only stories</p>
              </div>
              <div className="flex items-center mb-2">
                <GoCheck  className="text-orange-600 mr-2 font-bold" />
                <p>Support writers you read most</p>
              </div>
              <div className="flex items-center mb-2">
                <GoCheck  className="text-orange-600 mr-2 font-bold" />
                <p>Earn money for your reading</p>
              </div>
              <div className="flex items-center mb-2">
                <GoCheck  className="text-orange-600 mr-2 font-bold" />
                <p>Listen to audio narrations</p>
              </div>
              <div className="flex items-center mb-2">
                <GoCheck  className="text-orange-600 mr-2 font-bold" />
                <p>Read offline with the app</p>
              </div>
              <div className="flex items-center mb-2">
                <GoCheck  className="text-orange-600 mr-2 font-bold" />
                <p>Access to our community</p>
              </div>
              <div className="flex items-center mb-2">
                <GoCheck  className="text-orange-600 mr-2 font-bold" />
                <p>Connect your custom domain</p> 
              </div>
              <div className="flex items-center mb-2">
                <GoCheck  className="text-orange-600 mr-2 font-bold" />
              <p>Create your own publications</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border w-80 rounded">
          <div>
            <p className="font-bold text-xl my-2">Premium</p>
            {premiumPrice || premium}
            <p className="text-sm text-gray-400 px-2">Contribute more to writers and strengthen your support for the BilliKillers community.
Cancel anytime.</p>
            <button onClick={handlePayment} className="my-4 border border-orange-600 font-bold py-1 px-6 rounded text-orange-600 cursor-pointer hover:bg-orange-600 hover:text-white mb-4">Subscribe</button>
            <hr className="mb-3 mx-3"></hr>
            <div className="flex items-center font-light ml-5 my-5">
              <GoBook className="mr-2 text-orange-600"/>
              <p>All Storia Member benefits </p>
            </div>
            <div className="flex items-center mx-auto justify-center mb-3">
              <GoCheckCircle className="text-orange-600 mr-2" />
              <p className="items-center">PLUS</p>
            </div>
            <div className="flex items-center ml-5 mb-2">
              <GoCheck className="text-orange-600 mr-2" />
              <p className="font-light">Avid readers earn 4x</p>
            </div>
            <div className="flex items-center ml-5">
              <GoCheck size={21} className="text-orange-600 mr-2" />
              <p className="font-light">Share stories with anyone and drive more earnings</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-20"></hr>
      <div className="flex flex-col justify-between mt-20">
            <div className="space-x-5">
              <Link to='/Articles' className="hover:text-orange-600">Articles</Link>
              <Link to='/Products' className="hover:text-orange-600">Products</Link>
              {/* <Link to='/Packages' className="hover:text-teal-500">Packages</Link> */}
            </div>
            <div className="text-gray-500 my-4">© 2024 George Valencia. All rights reserved.</div>
          </div>
    </div>
  );
}

export default PackagesPage;