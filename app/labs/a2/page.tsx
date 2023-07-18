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
      <h1 className="block text-4xl my-3 font-bold font-serif">
        Cascading Style Sheets (CSS)
      </h1>
      <h2 className="block text-2xl my-4 font-bold font-serif">
        Style attribute and tag
      </h2>
      <h3 className="block text-xl my-5 font-bold font-serif">
        Style attribute
      </h3>
      <p
        className="block text-base my-4 font-serif"
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>

      <h3 className="block text-xl my-5 font-bold font-serif">Style tag</h3>
      <p className="block text-base my-4 font-serif bg-blue-700 text-white">
        A slightly better way to configure look and feel is to declare CSS rules
        in the STYLE tag in the header and then refer to the tag by their name,
        ID, or class This paragraph&apos;s style is set by a rule referring to
        the P tags
      </p>

      <h3 className="block text-xl my-5 font-bold font-serif">Link tag</h3>
      <p className="block text-base my-4 font-serif bg-blue-700 text-white">
        The best way to apply CSS rules is to declare them in a separate CSS
        file and load it with the LINK tag. Always use this method.
      </p>

      <h3 className="block text-xl my-5 font-bold font-serif">ID selectors</h3>
      <p id="id-selector-1">
        Instead of changing the look and feel of all the elements of the same
        name, e.g., P, we can refer to a specific element by its ID
      </p>
      <p id="id-selector-2">
        Here's another paragraph using a different ID and a different look and
        feel
      </p>
    </>
  );
}
