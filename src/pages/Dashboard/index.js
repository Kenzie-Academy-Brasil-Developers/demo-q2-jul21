const Dashboard = () => {
    return (
      <h1>
        Dashboard
        <button
          // Gambiarra
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout
        </button>
      </h1>
    );
  };
  
  export default Dashboard;
  