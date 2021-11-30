import { useAuth } from "../../providers/AuthContext";

const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <div>
      Dashboard;
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
