import { UserAuth } from "../context/AuthContext";

function CommentShow() {

  const { user } = UserAuth();

  return(
    <div className="text-sm flex flex-col">
      <hr />
      <div className="flex pt-8 mb-5">
        <div className="border rounded-full w-10 p-3 h-10"/>
        <div className="flex flex-col">
          <p className="ml-4">{user?.email}</p>
          <p className="ml-4 text-gray-500">2 months ago</p>
        </div>
      </div>
        <p className="mb-2">Super helpfull, where can i find the code base?</p>
      <hr />
    </div>
  );
}

export default CommentShow;