import Link from "@blocks/link";

export default function Nav() {
  return (
    <ul className="list-disc list-inside ml-3">
      <li>
        <Link href="home">Home</Link>
      </li>
      <li>
        <Link href="explore">Explore (CSS)</Link>
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
