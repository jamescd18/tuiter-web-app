import H1 from "@blocks/h1";
import P from "@blocks/p";
import Bold from "@blocks/bold";
import Link from "@blocks/link";

export default function Landing() {
  return (
    <main>
      <H1>Web Dev Assignments</H1>

      <ul className="list-disc list-inside ml-3">
        <li>
          <Link href="labs/a1">Assignment 1 Labs</Link>
        </li>
        <li>
          <Link href="labs/a2">Assignment 2 Labs</Link>
        </li>
        <li>
          <Link href="labs/a3">Assignment 3 Labs</Link>
        </li>
        <li>
          <Link href="labs/a4">Assignment 4 Labs</Link>
        </li>
        <li>
          <Link href="tuiter/navigation">Tuiter</Link>
        </li>
      </ul>

      <Bold>Disclaimer:</Bold>
      <P>
        As described in Piazza Post{" "}
        <Link href="https://piazza.com/class/ljepnjv9gy3pp/post/25">@25</Link>,
        I have gotten permission to implement the assignments with an
        alternative technology stack, so please understand the URLs, layouts,
        colors, and source code may be different. I have done my best to ensure
        the results are achieved as close to the original as possible.
      </P>

      <Bold>Author: James Chang-Davidson</Bold>
    </main>
  );
}
