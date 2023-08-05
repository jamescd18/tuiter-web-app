import Image from "next/image";

import Link from "@blocks/link";
import H1 from "@blocks/h1";
import H2 from "@blocks/h2";
import H3 from "@blocks/h3";
import H4 from "@blocks/h4";
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
      <H2>Responsive grid system</H2>
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 bg-bswarning">
          <H4>1</H4>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 bg-bsprimary text-white">
          <H4>2</H4>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 bg-bsdanger text-white">
          <H4>3</H4>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 bg-bssuccess text-white">
          <H4>4</H4>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 bg-bswarning">
          <H4>5</H4>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 bg-bsprimary text-white">
          <H4>6</H4>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 bg-bsdanger text-white">
          <H4>7</H4>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 bg-bssuccess text-white">
          <H4>8</H4>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 bg-bswarning">
          <H4>9</H4>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 bg-bsprimary text-white">
          <H4>10</H4>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 bg-bsdanger text-white">
          <H4>11</H4>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 bg-bssuccess text-white">
          <H4>12</H4>
        </div>
      </div>
      <H2>Hiding and showing responsive content</H2>
      <div className="hidden max-[576px]:block">XS</div>
      <div className="hidden min-[576px]:block">S</div>
      <div className="hidden min-[768px]:block">M</div>
      <div className="hidden min-[992px]:block">L</div>
      <div className="hidden min-[1200px]:block">XL</div>
      <div className="hidden min-[1400px]:block">XXL</div>
      <H2>Tables</H2>
      <table id="table-one" className="table-auto w-full">
        <thead>
          <tr className="bg-bsdark text-white text-left">
            <th className="p-2">Quiz</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-yellow-100">
            <td className="p-2">Q1</td>
            <td>HTML</td>
            <td>2/3/21</td>
            <td>85</td>
          </tr>
          <tr className="bg-red-100 border-1 border-t-slate-100">
            <td className="p-2">Q2</td>
            <td>CSS</td>
            <td>2/10/21</td>
            <td>90</td>
          </tr>
          <tr className="bg-blue-100 border-1 border-t-slate-100">
            <td className="p-2">Q3</td>
            <td>JavaScript</td>
            <td>2/17/21</td>
            <td>90</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="bg-green-100 border-2 border-t-black">
            <td className="p-2" colSpan={3}>
              Average
            </td>
            <td>90</td>
          </tr>
        </tfoot>
      </table>
      <H2>
        <Link href="https://getbootstrap.com/docs/5.1/content/tables/#responsive-tables">
          Responsive tables
        </Link>
      </H2>
      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <thead className="border-b-2 border-b-slate-500 text-left">
            <tr>
              <th className="w-[75px]">Very</th>
              <th className="w-[75px]">long</th>
              <th className="w-[75px]">set</th>
              <th className="w-[75px]">of</th>
              <th className="w-[75px]">columns</th>
              <th className="w-[75px]">Very</th>
              <th className="w-[75px]">long</th>
              <th className="w-[75px]">set</th>
              <th className="w-[75px]">of</th>
              <th className="w-[75px]">columns</th>
              <th className="w-[75px]">Very</th>
              <th className="w-[75px]">long</th>
              <th className="w-[75px]">set</th>
              <th className="w-[75px]">of</th>
              <th className="w-[75px]">columns</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Very</td>
              <td>long</td>
              <td>set</td>
              <td>of</td>
              <td>columns</td>
              <td>Very</td>
              <td>long</td>
              <td>set</td>
              <td>of</td>
              <td>columns</td>
              <td>Very</td>
              <td>long</td>
              <td>set</td>
              <td>of</td>
              <td>columns</td>
            </tr>
          </tbody>
        </table>
      </div>
      <H2>
        <Link href="https://getbootstrap.com/docs/5.1/components/list-group/">
          Favorite movies
        </Link>
      </H2>
      <ul className="border border-slate-200 w-[40%] rounded-lg overflow-hidden m-2">
        <li className="border border-b-2 border-slate-200 bg-bsprimary text-white p-2 text-sm">
          Aliens
        </li>
        <li className="border-b border-slate-200 p-2 text-sm">Terminator</li>
        <li className="border-b border-slate-200 p-2 text-sm">Blade Runner</li>
        <li className="border-b border-slate-200 p-2 text-sm">
          Lord of the Ring
        </li>
        <li className="border-b border-slate-200 disabled p-2 text-sm">
          Star Wars
        </li>
      </ul>
      <H2>
        <Link href="https://getbootstrap.com/docs/5.1/components/list-group/#links-and-buttons">
          Favorite books
        </Link>
      </H2>
      <div className="flex flex-col border border-slate-200 w-[40%] rounded-lg overflow-hidden m-2">
        <Link
          href="https://en.wikipedia.org/wiki/Dune_(novel)"
          className="border border-b-2 border-slate-200 bg-bsprimary p-2 text-sm text-white hover:no-underline"
        >
          Dune
        </Link>

        <Link
          href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
          className="border-b border-slate-200 p-2 text-sm hover:bg-slate-100 active:bg-slate-200 text-black hover:no-underline"
        >
          Lord of the Rings
        </Link>

        <Link
          href="https://en.wikipedia.org/wiki/The_Forever_War"
          className="border-b border-slate-200 p-2 text-sm hover:bg-slate-100 active:bg-slate-200 text-black hover:no-underline"
        >
          The Forever War
        </Link>

        <Link
          href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
          className="border-b border-slate-200 p-2 text-sm hover:bg-slate-100 active:bg-slate-200 text-black hover:no-underline"
        >
          2001 A Space Odyssey
        </Link>

        <Link
          href="https://en.wikipedia.org/wiki/Ender%27s_Game"
          className="border-b border-slate-200 disabled p-2 text-sm text-slate-500 hover:no-underline"
          aria-disabled="true"
        >
          Ender&apos;s Game
        </Link>
      </div>
      <H2>
        <Link href="https://getbootstrap.com/docs/5.1/forms/form-control/">
          Forms
        </Link>
      </H2>
      <div className="mb-3 flex flex-col mx-3">
        <label htmlFor="input1" className="form-label mb-2">
          Email address
        </label>
        <input
          type="email"
          className="form-control border rounded-md px-2 py-1"
          id="input1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3 flex flex-col mx-3">
        <label htmlFor="textarea1" className="form-label mb-2">
          Example textarea
        </label>
        <textarea
          className="form-control  border rounded-md"
          id="textarea1"
          rows={3}
        ></textarea>
      </div>
      <H3>
        <Link href="https://getbootstrap.com/docs/5.1/forms/select/">
          Dropdowns
        </Link>
      </H3>
      <select className="form-select appearance-none border rounded-md px-2 py-1 w-full m-4">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <H3>
        <Link href="https://getbootstrap.com/docs/5.1/forms/checks-radios/#switches">
          Switches
        </Link>
      </H3>
      this is too difficult to do with tailwind
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="switch1" />
        <label className="form-check-label" htmlFor="switch1">
          Default switch checkbox input
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="switch2"
          checked
        />
        <label className="form-check-label" htmlFor="switch2">
          Checked switch checkbox input
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="switch3"
          disabled
        />
        <label className="form-check-label" htmlFor="switch3">
          Disabled switch checkbox input
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="switch4"
          checked
          disabled
        />
        <label className="form-check-label" htmlFor="switch4">
          Disabled checked switch checkbox input
        </label>
      </div>
      I give up on this lab, it is too much. I know how to do all of this
      already.
    </>
  );
}
