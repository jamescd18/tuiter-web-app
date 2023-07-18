import Link from "next/link";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link href="home">Home</Link>
      </li>
      <li>
        <Link href="explore">Explore</Link>
      </li>
      <li>
        <Link href="notifications">Notifications</Link>
      </li>
      <li>
        <Link href="messages">Messages</Link>
      </li>
      <li>
        <Link href="bookmarks">Bookmarks</Link>
      </li>
      <li>
        <Link href="lists">Lists</Link>
      </li>
      <li>
        <Link href="profile">Profile</Link>
      </li>
      <li>
        <Link href="tuit">Tuit</Link>
      </li>
      <li>
        <Link href="reply">Reply</Link>
      </li>
    </ul>
  );
}
