import Link from "next/link";
import style from "../styles/navStyle.module.css";

export default function Navigation() {
  return (
    <div className={style.nav}>
      <Link href="/">
        <div>Home</div>
      </Link>
      <Link href="/about">
        <div>About</div>
      </Link>
    </div>
  );
}
