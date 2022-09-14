import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { OverlayTrigger, Popover, ListGroup } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { unsetUser } from "../../redux/user/userSlice";
import style from "./UserNavbar.module.css";

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: "/users/" + user.userId,
        method: "GET",
      });
      setUserData(response.data);
    }
    fetchData();
  }, [user]);

  const handleLogout = async () => {
    dispatch(unsetUser());
  };
  return (
    <OverlayTrigger
      trigger="click"
      placement={"bottom"}
      rootClose="true"
      overlay={
        <Popover>
          <Popover.Body className="px-0 py-1">
            <ListGroup variant="flush">
              <ListGroup.Item action as={Link} to="/order-history">
                Order history
              </ListGroup.Item>
              <ListGroup.Item action onClick={handleLogout}>
                Log out
              </ListGroup.Item>
            </ListGroup>
          </Popover.Body>
        </Popover>
      }
    >
      <button className={`${style.button} d-flex align-items-center border-0 bg-transparent`}>
        <BiUser className="me-2 fs-5" />{" "}
        {userData && (
          <span className="fw-bold">
            {userData.firstname[0].toUpperCase()}. {userData.lastname.toUpperCase()}
          </span>
        )}
      </button>
    </OverlayTrigger>
  );
}
