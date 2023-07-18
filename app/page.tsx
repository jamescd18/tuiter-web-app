import Link from "next/link";

export default function Landing() {
  return (
    <main>
      <h1 className="block text-4xl my-3 font-bold font-serif">
        Web Dev Assignments
      </h1>

      <ul className="list-disc list-inside ml-3">
        <li className="">
          <Link className="hover:underline text-blue-700" href="labs/a1">
            Assignment 1 Labs
          </Link>
        </li>
        <li>
          <Link className="hover:underline text-blue-700" href="labs/a2">
            Assignment 2 Labs
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline text-blue-700"
            href="tuiter/navigation"
          >
            Tuiter
          </Link>
        </li>
      </ul>

      <p className="font-bold mt-10 font-serif">Disclaimer:</p>
      <p className="font-serif">
        As described in Piazza Post{" "}
        <Link
          className="hover:underline text-blue-700"
          href="https://piazza.com/class/ljepnjv9gy3pp/post/25"
        >
          @25
        </Link>
        , I have gotten permission to implement the assignments with an
        alternative technology stack, so please understand the URLs, layouts,
        colors, and source code may be different. I have done my best to ensure
        the results are achieved as close to the original as possible.
      </p>

      <p className="font-bold mt-5 font-serif">Author: James Chang-Davidson</p>
    </main>
  );
}
