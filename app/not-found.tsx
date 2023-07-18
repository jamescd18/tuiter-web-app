import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        Go <Link href="/">back to start</Link>
      </p>
    </div>
  );
}
