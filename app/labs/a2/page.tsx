import Image from "next/image";

import Link from "@blocks/link";
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
      <P id="id-selector-1" className="bg-red-generic text-white">
        Instead of changing the look and feel of all the elements of the same
        name, e.g., P, we can refer to a specific element by its ID
      </P>
      <P id="id-selector-2" className="bg-yellow-generic text-black">
        Here&apos;s another paragraph using a different ID and a different look
        and feel
      </P>
      <H3>Class selectors</H3>
      <P className="class-selector bg-yellow-generic text-blue-600">
        Instead of using IDs to refer to elements, you can use an element&apos;s
        CLASS attribute
      </P>
      <h4 className="class-selector bg-yellow-generic text-blue-600 font-serif font-bold">
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
      <H3 className="text-blue-lab">Foreground color</H3>
      <P className="text-red-lab">
        The text in this paragraph is red but{" "}
        <span className="text-green-hi">this text is green</span>
      </P>
      <H3 className="bg-blue-lab text-white">Background color</H3>
      <P className=" bg-red-lab  text-black">
        This background of this paragraph is red but
        <span className="bg-green-generic text-white">
          {" "}
          the background of this text is green and the foreground white
        </span>
      </P>
      <H2>Borders</H2>
      <P className="border-x-[30px] border-y-[20px] border-red-lab">
        Solid fat red border
      </P>
      <P className="border-4 border-blue-lab border-dashed">
        Dashed thin blue border
      </P>
      <H2>Padding</H2>
      <div className="pt-[50px] pl-[50px] border-x-[30px] border-y-[20px] border-red-lab bg-yellow-lab text-center">
        Padded top left
      </div>
      <div className="pb-[50px] pr-[50px] border-x-[30px] border-y-[20px] border-blue-lab bg-yellow-lab">
        Padded bottom right
      </div>
      <div className="p-[50px] border-x-[30px] border-y-[20px] border-yellow-lab bg-blue-lab text-white">
        Padded all around
      </div>
      <H2>Margins</H2>
      <div className="mb-[50px] pt-[50px] pl-[50px] border-x-[30px] border-y-[20px] border-red-lab bg-yellow-lab text-center">
        Margin bottom
      </div>
      <div className="mx-[50px] pb-[50px] pr-[50px] border-x-[30px] border-y-[20px] border-blue-lab bg-yellow-lab">
        Margin left right
      </div>
      <div className="m-[30px] p-[50px] border-x-[30px] border-y-[20px] border-yellow-lab bg-blue-lab text-white">
        Margin all around
      </div>
      <H3>Rounded corners</H3>
      <P className="rounded-t-[40px] border-4 border-blue-lab p-[50px]">
        Rounded corners on the top
      </P>
      <P className="rounded-b-[40px] border-4 border-blue-lab p-[50px]">
        Rounded corners at the bottom
      </P>
      <P className="rounded-[50px] border-4 border-blue-lab p-[50px]">
        Rounded corners all around
      </P>
      <P className="rounded-tl-[30px] rounded-br-[20px] rounded-bl-[50px] border-4 border-blue-lab p-[50px]">
        Different rounded corners
      </P>
      <H2>Dimension</H2>
      <div>
        <div className="w-[75px] h-[100px] bg-yellow-lab">Portrait</div>
        <div className="w-[100px] h-[75px] bg-blue-lab text-white">
          Landscape
        </div>
        <div className="w-[75px] h-[75px] bg-red-lab">Square</div>
      </div>
      <H2>Position</H2>
      <H3>Relative</H3>
      <div>
        <div className="bg-yellow-lab w-[75px] h-[100px]">
          <div className="relative top-[20px] left-[20px]">Portrait</div>
        </div>
        <div className="relative bottom-[30px] left-[30px] bg-blue-lab text-white w-[100px] h-[75px]">
          Landscape
        </div>
        <div className="bg-red-lab w-[75px] h-[75px]">Square</div>
      </div>
      <H3>Absolute position</H3>
      <div className="relative">
        <div className="absolute top-[10px] left-[10px] w-[75px] h-[100px] bg-yellow-lab">
          Portrait
        </div>
        <div className="absolute top-[50px] left-[50px] w-[100px] h-[75px] bg-blue-lab text-white">
          Landscape{" "}
        </div>
        <div className="absolute top-[20px] left-[120px] bg-red-lab w-[75px] h-[75px]">
          Square{" "}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <H3>Fixed position</H3>
      Checkout the blue square that says &quot;Fixed position&quot; stuck all
      the way on the right and half way down the page. It doesn&apos;t scroll
      with the rest of the page. Its position is &quot;Fixed&quot;.
      <div className="fixed bottom-[50%] right-[0px] w-[75px] h-[75px] bg-blue-lab text-white">
        Fixed position
      </div>
      <H2>Z index</H2>
      <div className="relative">
        <div className="absolute top-[10px] left-[10px]  w-[75px] h-[100px] bg-yellow-lab">
          Portrait
        </div>
        <div className="z-10 absolute top-[50px] left-[50px] w-[100px] h-[75px] bg-blue-lab text-white">
          Landscape
        </div>
        <div className="absolute top-[20px] left-[120px] bg-red-lab w-[75px] h-[75px]">
          Square
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <H2>Float</H2>
      <div>
        <div className="float-left w-[75px] h-[100px] bg-yellow-lab">
          Yellow
        </div>
        <div className="float-left w-[75px] h-[100px] bg-blue-lab text-white">
          Blue
        </div>
        <div className="float-left w-[75px] h-[100px] bg-red-lab">Red</div>
        <Image
          className="float-right h-[100px]"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt={"The gap between the two halves of the Starship rocket"}
          width={178}
          height={100}
        />
        <div className="clear-both"></div>
      </div>
      <H2>Grid layout</H2>
      <div className="clear-both">
        <div className="w-[50%] float-left bg-yellow-lab">
          <h3>Left half</h3>
        </div>
        <div className="w-[50%] float-left bg-blue-lab text-white">
          <h3>Right half</h3>
        </div>
      </div>
      <div className="clear-both">
        <div className="w-[33%] float-left bg-green-generic text-white">
          <h3>Left third</h3>
        </div>
        <div className="w-[67%] float-left bg-red-lab text-white">
          <h3>Right two thirds</h3>
        </div>
      </div>
      <div className="clear-both">
        <div className="w-[20%] float-left bg-yellow-lab">
          <h3>Side bar</h3>
          <p>This is the left sidebar</p>
        </div>
        <div className="w-[60%] float-left bg-blue-lab bg-green-lab">
          <h3>Main content</h3>
          <p>
            This is the main content. This is the main content. This is the main
            content.{" "}
          </p>
        </div>
        <div className="w-[20%] float-left bg-green-generic text-white">
          <h3>Side bar</h3>
          <p>This is the right sidebar</p>
        </div>
      </div>
      <div className="container">
        <H1>Bootstrap</H1>
        <p>Welcome to Bootstrap!</p>
        <H2>
          <Link href="https://getbootstrap.com/docs/5.1/layout/grid/">
            Grid system
          </Link>
        </H2>
        <div className="grid grid-cols-2">
          <div className="bg-bsdanger text-white">
            <H3>Left half</H3>
          </div>
          <div className="bg-bsprimary text-white">
            <H3>Right half</H3>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1 bg-bswarning">
            <H3>One thirds</H3>
          </div>
          <div className="col-span-2 bg-bssuccess text-white">
            <H3>Two thirds</H3>
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-1 bg-bsdark text-white">
            <H3>Sidebar</H3>
          </div>
          <div className="col-span-4 bg-bssecondary text-white">
            <H3>Main content</H3>
          </div>
          <div className="col-span-1 bg-bsinfo">
            <H3>Sidebar</H3>
          </div>
        </div>
      </div>
      <H2>Responsive grid system</H2>
      <div className="grid grid-cols-4">
        <div className="col-span-4 md:col-span-2 xl:col-span-1 bg-bswarning">
          <H3>Column A</H3>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1 bg-bsprimary text-white">
          <H3>Column B</H3>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1 bg-bsdanger text-white">
          <H3>Column C</H3>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1 bg-bssuccess text-white">
          <H3>Column D</H3>
        </div>
      </div>
    </>
  );
}
