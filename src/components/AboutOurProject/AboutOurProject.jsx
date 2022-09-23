import { Link } from "react-router-dom";
import style from "./AboutOurProject.module.css";

export default function AboutOurProject() {
  return (
    <Link className={style.aboutProjectDiv} as={Link} to="/about-our-project">
      ABOUT OUR PROJECT
    </Link>
  );
}
