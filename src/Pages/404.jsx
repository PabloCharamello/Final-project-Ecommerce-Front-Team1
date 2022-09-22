import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Admin/Sidebar";
import { useSelector } from "react-redux";

export default function Error404() {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user.isAdmin ? (
        <div className="d-flex">
          <Sidebar />
          <div className="d-flex flex-column w-100">
            <h1 className="mt-5">Error 404:</h1>
            <h3>Page not found</h3>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <h1 className="mt-5">Error 404:</h1>
          <h3>Page not found</h3>
        </>
      )}
    </>
  );
}
