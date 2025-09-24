import { Link } from "react-router";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* flex 1 makes the items in the container fill availible space but give as items are added*/}
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">New Build</h1>
        <Link to={"/build"} className="btn btn-primary text-base-100">
          Build
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
