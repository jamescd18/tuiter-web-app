import Link from "next/link";

export default function ProfileContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href="profile">Back</Link>
      <h1>Tuiter</h1>
      {children}
    </>
  );
}
