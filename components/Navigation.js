import Link from "next/link";
import { useState, useEffect } from "react";
export default function Navigation() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    document.body.className = "has-navbar-fixed-top";
  }, []);

  return (
    <div
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      {/* <div className="container"> */}
      <div className="navbar-brand navbar-start">
        <Link href="/">
          <a className="navbar-item">
            <img
              src="images/uploads/NFIDELERBANNER.png"
              width="112"
              height="28"
            />
          </a>
        </Link>

        <a
          onClick={() => {
            setIsActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu navbar-end ${isActive ? "is-active" : ""}`}>
        <Link href="/">
          <a className="navbar-item">Home</a>
        </Link>
        <Link href="/Music">
          <a className="navbar-item">Music</a>
        </Link>
        <Link href="/Bio">
          <a className="navbar-item">Bio</a>
        </Link>
        <Link href="/MyWork">
          <a className="navbar-item">My Work</a>
        </Link>
        <Link href="/Calendar">
          <a className="navbar-item">Calendar</a>
        </Link>
        <Link href="/Contact">
          <a className="navbar-item">Contact</a>
        </Link>
        <Link href="/PressKit">
          <a className="navbar-item">Press Kit</a>
        </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Media</a>
          <div className="navbar-dropdown">
            <Link href="/Photos">
              <a className="navbar-item">Photos</a>
            </Link>
            <Link href="/Videos">
              <a className="navbar-item">Videos</a>
            </Link>
            <Link href="/Press">
              <a className="navbar-item">Press</a>
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
