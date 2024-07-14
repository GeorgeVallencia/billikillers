import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { GoXCircle } from "react-icons/go";
import CommentCreate from "./CommentCreate";
import CommentShow from "./CommentShow";

function CommentModal({ onComment }) {

  const [commentCount, setCommentCount] = useState(128);
  const [openCommentBox, setOpenCommentBox] = useState(false);

  const handleClose = () => {
    onComment();
  };

  const handleCreateComment = () => {
    setOpenCommentBox(!openCommentBox);
  };

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, []);
 
  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-80 flex"></div>
      <div className="fixed rounded inset-20 sm:inset-40 p-10 bg-white sm:mx-auto ml-8 items-center max-w-md">
        <div className="flex items-center justify-end">
          <GoXCircle size={30} onClick={handleClose} className="text-orange-600 mr-[-3.4rem] mt-[-6.6rem] cursor-pointer"/>
        </div>
        <p className="mb-8 mt-[5rem] tracking-wide text-xl text-gray-600">COMMENTS (<span className="">{commentCount}</span>)</p>
        { openCommentBox ?<CommentCreate onOpen={handleCreateComment} /> : <div className="shadow-lg rounded-md pl-4 py-4">
          <input onClick={handleCreateComment} placeholder="What are your thoughts?" className="outline-none w-full"/>
        </div> }
        <div className="mt-20">
          <CommentShow />
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default CommentModal;