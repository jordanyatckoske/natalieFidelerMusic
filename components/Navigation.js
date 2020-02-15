import Link from "next/link";
export default function Navigation() {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/music">
          <a>Music</a>
        </Link>
        <Link href="/bio">
          <a>Bio</a>
        </Link>
        <Link href="/mywork">
          <a>My Work</a>
        </Link>
        <Link href="/calendar">
          <a>Calendar</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/presskit">
          <a>Press Kit</a>
        </Link>
        <div>
          Media
          <ul>
            <li>
              <Link href="/photos">
                <a>Photos</a>
              </Link>
            </li>
            <li>
              <Link href="/videos">
                <a>Videos</a>
              </Link>
            </li>
            <li>
              <Link href="/press">
                <a>Press</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
