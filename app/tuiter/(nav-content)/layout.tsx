import Nav from "../nav";

export default function NavContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <table>
        <tr>
          <td valign="top">
            <Nav />
          </td>
          <td>{children}</td>
        </tr>
      </table>
    </>
  );
}
