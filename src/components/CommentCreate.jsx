import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

function CommentCreate({ onOpen }) {

  const { user } = UserAuth();
  const [comment, setComment] = useState('');

  const handleCloseComment = () => {
    onOpen(false);
  }

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return(
    <div className="flex flex-col text-sm border shadow-lg rounded-lg p-4">
      <div className="flex items-center">
        <div className="border rounded-full w-10 p-3 h-10"/>
        <p className="ml-4">{user?.email}</p>
      </div>
      <div>
        <input value={comment} onChange={handleChange} placeholder="What are your thoughts?" className="outline-none w-full mt-10"/>
      </div>
      <form className="flex items-center justify-end text-sm mt-20">
        <button onClick={handleCloseComment}>Cancel</button>
        <button disabled={!comment} className={`ml-4 font-semibold rounded-full px-4 py-1 ${comment ? 'bg-orange-600 text-white' : 'bg-orange-200 text-white'}`}>Comment</button>
      </form>
    </div>
  );
}

export default CommentCreate;