import Link from "next/link";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href="navigation">Back</Link>
      <h1>Tuiter</h1>
      {children}
    </>
  );
}
