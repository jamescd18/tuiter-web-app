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

      <H2>Colors</H2>
      <H3 className="text-[#7070ff]">Foreground color</H3>
      <P className="text-[#ff7070]">
        The text in this paragraph is red but{" "}
        <span className="text-green-500">this text is green</span>
      </P>

      <H3 className="bg-[#7070ff] text-white">Background color</H3>
      <P className=" bg-[#ff7070]  text-black">
        This background of this paragraph is red but
        <span className="bg-green-500 text-white">
          {" "}
          the background of this text is green and the foreground white
        </span>
      </P>

      <H2>Borders</H2>
      <P className="border-x-[30px] border-y-[20px] border-[#ff7070]">
        Solid fat red border
      </P>
      <P className="border-4 border-[#7070ff] border-dashed">
        Dashed thin blue border
      </P>

      <H2>Padding</H2>
      <div className="pt-[50px] pl-[50px] border-x-[30px] border-y-[20px] border-[#ff7070] bg-[#ffff07] text-center">
        Padded top left
      </div>

      <div className="pb-[50px] pr-[50px] border-x-[30px] border-y-[20px] border-[#7070ff] bg-[#ffff07]">
        Padded bottom right
      </div>
      <div className="p-[50px] border-x-[30px] border-y-[20px] border-[#ffff07] bg-[#7070ff] text-white">
        Padded all around
      </div>

      <H2>Margins</H2>
      <div className="mb-[50px] pt-[50px] pl-[50px] border-x-[30px] border-y-[20px] border-[#ff7070] bg-[#ffff07] text-center">
        Margin bottom
      </div>

      <div className="mx-[50px] pb-[50px] pr-[50px] border-x-[30px] border-y-[20px] border-[#7070ff] bg-[#ffff07]">
        Margin left right
      </div>
      <div className="m-[30px] p-[50px] border-x-[30px] border-y-[20px] border-[#ffff07] bg-[#7070ff] text-white">
        Margin all around
      </div>

      <H3>Rounded corners</H3>
      <P className="rounded-t-[40px] border-4 border-[#7070ff] p-[50px]">
        Rounded corners on the top
      </P>
      <P className="rounded-b-[40px] border-4 border-[#7070ff] p-[50px]">
        Rounded corners at the bottom
      </P>
      <P className="rounded-[50px] border-4 border-[#7070ff] p-[50px]">
        Rounded corners all around
      </P>
      <P className="rounded-tl-[30px] rounded-br-[20px] rounded-bl-[50px] border-4 border-[#7070ff] p-[50px]">
        Different rounded corners
      </P>

      <H2>Dimension</H2>
      <div>
        <div className="w-[75px] h-[100px] bg-[#ffff07]">Portrait</div>
        <div className="w-[100px] h-[75px] bg-[#7070ff] text-white">
          Landscape
        </div>
        <div className="w-[75px] h-[75px] bg-[#ff7070]">Square</div>
      </div>
    </>
  );
}
