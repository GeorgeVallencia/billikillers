import { GoMail } from "react-icons/go";
import { Link } from "react-router-dom";

function ProductsPage() {
  return(
    <div className="bg-gray-100 h-screen">
      <div className="mx-auto h-screen max-w-5xl px-28 items-center bg-white" >
        <p className="font-bold py-10 pt-32 text-5xl">Coming Soon!</p>
        <p className="text-gray-500 mb-10">Make sure to join my mailing list to stay in the loop for upcoming products that I will be offering!</p>
        <form action="https://getform.io/f/paoxokxb" method="POST" className="border rounded-lg p-4 max-w-lg mb-32">
          <div className="flex items-center mb-5">
            <GoMail className="mr-3 text-orange-600 font-bold"/>
            <p className="font-semibold">Stay up to date</p>
          </div>
          <div className="mb-5 text-gray-500">
            <p>Get notified when I publish something new, or when we have a new merchandise and unsubscribe at any time.</p>
          </div>
          <div className="flex flex-col">
            <input placeholder="First Name" name="name" className="border py-2 pl-2 shadow-lg rounded"/>
            <input placeholder="Last Name" name="name" className="border py-2 mt-3 pl-2 shadow-lg rounded"/>
            <input placeholder="Email Address" name="email" className="border py-2 pl-2 shadow-lg mt-3 rounded"/>
          </div>
          <div className="flex justify-end">
            <button className="text-white mt-4 bg-orange-600 py-2 px-4 rounded-lg">Join</button>
          </div>
        </form >
          <hr className="mb-32"></hr>
          <div className="flex flex-col justify-between">
            <div className="space-x-5">
              <Link to='/articles' className="hover:text-orange-600">Articles</Link>
              <Link to='/products' className="hover:text-orange-600">Products</Link>
              <Link to='/packages' className="hover:text-orange-600">Packages</Link>
            </div>
            <div className="text-gray-500 my-4">© 2024 George Valencia. All rights reserved.</div>
          </div>
      </div>
    </div>
  );
}

export default ProductsPage;