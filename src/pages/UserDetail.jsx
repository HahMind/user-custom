import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  // const userId = Number(id);
  return (
    <div>
      <h1 className="p-6">This is User Detail page</h1>
      <p className="p-6">User ID: {id}</p>
    </div>
  );
};

export default UserDetail;
