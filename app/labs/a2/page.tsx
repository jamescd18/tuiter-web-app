import H1 from "@blocks/h1";
import H2 from "@blocks/h2";
import H3 from "@blocks/h3";
import P from "@blocks/p";

export default function LabA2() {
  return (
    <>
      <style>
        {/* {`
            p {
                background-color: blue;
                color: white;
            }
         `} */}
      </style>
      <H1>Cascading Style Sheets (CSS)</H1>
      <H2>Style attribute and tag</H2>
      <H3>Style attribute</H3>
      <P className="bg-blue-700 text-white">
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </P>

      <H3>Style tag</H3>
      <P className="bg-blue-700 text-white">
        A slightly better way to configure look and feel is to declare CSS rules
        in the STYLE tag in the header and then refer to the tag by their name,
        ID, or class This paragraph&apos;s style is set by a rule referring to
        the P tags
      </P>

      <H3>Link tag</H3>
      <P className="bg-blue-700 text-white">
        The best way to apply CSS rules is to declare them in a separate CSS
        file and load it with the LINK tag. Always use this method.
      </P>

      <H3>ID selectors</H3>
      <P id="id-selector-1">
        Instead of changing the look and feel of all the elements of the same
        name, e.g., P, we can refer to a specific element by its ID
      </P>
      <P id="id-selector-2">
        Here&apos;s another paragraph using a different ID and a different look
        and feel
      </P>
    </>
  );
}
