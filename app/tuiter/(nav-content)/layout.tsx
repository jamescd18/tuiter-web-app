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
          <td width={"100%"}>{children}</td>
        </tr>
      </table>
    </>
  );
}
