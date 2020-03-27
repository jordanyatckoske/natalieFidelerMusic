import Link from "next/link";
import { useState, useEffect } from "react";
import ActiveLink from "./ActiveLink";
export default function Navigation() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    document.body.className = "has-navbar-fixed-top";
  }, []);

  return (
    <div
      className="animated fadeInDown navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      {/* <div className="container"> */}
      <div className="navbar-brand navbar-start">
        <Link href="/">
          <a className="animated fadeInLeft delay-2s navbar-item">
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
          className={`animated fadeInRight delay-1s navbar-burger burger ${
            isActive ? "is-active" : ""
          }`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        className={`animated fadeIn navbar-menu navbar-end ${
          isActive ? "is-active" : ""
        }`}
      >
        <ActiveLink activeClassName="animated bounce has-text-link" href="/">
          <a className="navbar-item">Home</a>
        </ActiveLink>
        <ActiveLink
          activeClassName="animated bounce has-text-link"
          href="/Music"
        >
          <a className="navbar-item">Music</a>
        </ActiveLink>
        <ActiveLink activeClassName="animated bounce has-text-link" href="/Bio">
          <a className="navbar-item">Bio</a>
        </ActiveLink>
        <ActiveLink
          activeClassName="animated bounce has-text-link"
          href="/MyWork"
        >
          <a className="navbar-item">My Work</a>
        </ActiveLink>
        <ActiveLink
          activeClassName="animated bounce has-text-link"
          href="/Calendar"
        >
          <a className="navbar-item">Calendar</a>
        </ActiveLink>
        <ActiveLink
          activeClassName="animated bounce has-text-link"
          href="/Contact"
        >
          <a className="navbar-item">Contact</a>
        </ActiveLink>
        <ActiveLink
          activeClassName="animated bounce has-text-link"
          href="/PressKit"
        >
          <a className="navbar-item">Press Kit</a>
        </ActiveLink>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Media</a>
          <div className="navbar-dropdown">
            <ActiveLink
              activeClassName="animated bounce has-text-link"
              href="/Photos"
            >
              <a className="navbar-item">Photos</a>
            </ActiveLink>
            <ActiveLink
              activeClassName="animated bounce has-text-link"
              href="/Videos"
            >
              <a className="navbar-item">Videos</a>
            </ActiveLink>
            <ActiveLink
              activeClassName="animated bounce has-text-link"
              href="/Press"
            >
              <a className="navbar-item">Press</a>
            </ActiveLink>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
