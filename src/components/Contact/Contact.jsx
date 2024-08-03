import style from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={style.contact}>
      <div className={style.contactColumn}>
        <p className={style.contactText}>
          <FaUser className={style.contactIcon} />
          {name}
        </p>
        <p className={style.contactText}>
          <BsFillTelephoneFill className={style.contactIcon} />
          {number}
        </p>
      </div>
      <button className={style.contactBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
