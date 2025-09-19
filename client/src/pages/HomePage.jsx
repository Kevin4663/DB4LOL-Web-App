import { Link } from "react-router";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-primary">New Build</h1>
        <Link to={"/build"} className="btn btn-primary">
          Build
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
