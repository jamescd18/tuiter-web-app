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

      <br />

      <p style={{ fontWeight: "bold" }}>Disclaimer:</p>
      <p>
        As described in Piazza Post{" "}
        <Link href="https://piazza.com/class/ljepnjv9gy3pp/post/25">@25</Link>,
        I have gotten permission to implement the assignments with an
        alternative technology stack, so please understand the URLs, layouts,
        and source code may be different. I have done my best to ensure the
        results are achieved as close to the original as possible.
      </p>

      <p style={{ fontWeight: "bold" }}>Author: James Chang-Davidson</p>
    </main>
  );
}
