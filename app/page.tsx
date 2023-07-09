import Link from "next/link";

export default function Landing() {
  return (
    <main>
      <h1>Web Dev Assignments</h1>
      <ul>
        <li>
          <Link href="labs/a1">Assignment 1 Labs</Link>
        </li>
        <li>
          <Link href="tuiter/navigation">Tuiter</Link>
        </li>
      </ul>
    </main>
  );
}
