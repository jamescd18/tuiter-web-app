import Image from "next/image";

import Link from "@blocks/link";
import H1 from "@blocks/h1";
import H2 from "@blocks/h2";
import H3 from "@blocks/h3";
import H4 from "@blocks/h4";
import P from "@blocks/p";

export default function LabA3() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;

  return (
    <div className="container">
      <H1>Assignment A3</H1>
      <P>Hello world!</P>
      <H2>Variables</H2>
      <div>
        <h1>JavaScript</h1>
        <h2>Variables and Constants</h2>
        functionScoped = {functionScoped}
        <br />
        blockScoped = {blockScoped}
        <br />
        constant1 = {constant1}
        <br />
      </div>
    </div>
  );
}
