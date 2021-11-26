import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // setUsers(response.data)
  }, [users]);

  const { user } = useSelector((store) => store.user);

  return <div>{user.name}</div>;
};

export default Dashboard;
