import H1 from "@blocks/h1";
import H2 from "@blocks/h2";
import H3 from "@blocks/h3";
import P from "@blocks/p";

export default function LabA2() {
  return (
    <>
      <style>
        {`
            // p {
            //     background-color: blue;
            //     color: white;
            // }

            #id-selector-1 {
              background-color: red;
              color: white;
            }
            
            #id-selector-2 {
              background-color: yellow;
              color: black;
            }
         `}
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
      <P id="id-selector-1" className="bg-red-500 text-white">
        Instead of changing the look and feel of all the elements of the same
        name, e.g., P, we can refer to a specific element by its ID
      </P>
      <P id="id-selector-2" className="bg-yellow-300 text-black">
        Here&apos;s another paragraph using a different ID and a different look
        and feel
      </P>

      <H3>Class selectors</H3>
      <P className="class-selector bg-yellow-300 text-blue-600">
        Instead of using IDs to refer to elements, you can use an element&apos;s
        CLASS attribute
      </P>
      <h4 className="class-selector bg-yellow-300 text-blue-600 font-serif font-bold">
        This heading has same style as paragraph above
      </h4>

      <div className="selector-1">
        <H3>Document structure selectors</H3>
        <div className="selector-2">
          Selectors can be combined to refer elements in particular places in
          the document
          <P className="selector-3 bg-red-600 text-white">
            This paragraph&apos;s red background is referenced as
            <br />
            .selector-2 .selector3
            <br />
            meaning the descendant of some ancestor.
            <br />
            <span className="selector-4 bg-yellow-300 text-blue-600">
              Whereas this span is a direct child of its parent
            </span>
            <br />
            You can combine these relationships to create specific styles
            depending on the document structure
          </P>
        </div>
      </div>
    </>
  );
}
