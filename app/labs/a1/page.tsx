import Image from "next/image";
import Link from "next/link";

export default function LabA1() {
  return (
    <>
      <h1>HTML Examples</h1>
      <h2>Heading Tags</h2>
      <h2>Paragraph Tag</h2>
      <p>
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p>
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p>
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default browsers
        render them as one contiguous piece of text as shown here on the right.
      </p>
      <p>
        This is the third paragraph. Wrap each paragraph with the paragraph tag
        to tell browsers to render the gaps.
      </p>
      <h2>List Tags</h2>
      <h3>Ordered List Tag</h3>
      How to join the 1%
      <ol>
        <li>Get a masters in computer science</li>
        <li>Get a $100K+ starting salary job</li>
        <li>Marry a like-minded engineer</li>
        <li>Do great work for a decade</li>
      </ol>
      <h3>Unordered List Tag</h3>
      My favorite books (in no particular order)
      <ul>
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      <h2>Table Tag</h2>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td>HTML</td>
            <td>2/3/21</td>
            <td>85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td>CSS</td>
            <td>2/10/21</td>
            <td>90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td>JavaScript</td>
            <td>2/17/21</td>
            <td>95</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td>90</td>
          </tr>
        </tfoot>
      </table>
      <h2>Image tag</h2>
      Loading an image from the internet:
      <br />
      <Image
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        alt={"The gap between the two halves of the Starship rocket"}
        width={400}
        height={225}
      />
      <br />
      Loading a local image:
      <br />
      <Image src="/teslabot.jpg" height={200} width={145} alt={""} />
      <h2>Text fields</h2>
      <form id="text-fields">
        <label htmlFor="text-fields-username">Username:</label>
        <input id="text-fields-username" placeholder="jdoe" />
        <br />
        <label htmlFor="text-fields-password">Password:</label>
        <input type="password" id="text-fields-password" value="123@#$asd" />
        <br />
        <label htmlFor="text-fields-first-name">First name:</label>
        <input type="text" id="text-fields-first-name" title="John" />
        <br />
        <label htmlFor="text-fields-last-name">Last name:</label>
        <input
          type="text"
          id="text-fields-last-name"
          placeholder="Doe"
          defaultValue="Wonderland"
        />
        <h2>Other field types</h2>
        <label htmlFor="text-fields-email">Email:</label>
        <input
          type="email"
          placeholder="jdoe@somewhere.com"
          id="text-fields-email"
        />
        <br />
        <label htmlFor="text-fields-salary-start">Starting salary:</label>
        <input
          type="number"
          id="text-fields-salary-start"
          placeholder="1000"
          defaultValue="100000"
        />
        <br />
        <label htmlFor="text-fields-rating">Rating:</label>
        <input
          type="range"
          id="text-fields-rating"
          placeholder="Doe"
          max="5"
          defaultValue="4"
        />
        <br />
        <label htmlFor="text-fields-dob">Date of birth:</label>
        <input type="date" id="text-fields-dob" defaultValue="2000-01-21" />
        <br />
      </form>
      <h2>Text boxes</h2>
      <form id="textarea">
        <label>Biography:</label>
        <br />
        <textarea cols={30} rows={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </textarea>
      </form>
      <h3>Buttons</h3>
      <button type="button">Click me!</button>
      <h2>Dropdowns</h2>
      <h3>Select one</h3>
      <label htmlFor="select-one-genre">Favorite movie genre:</label>
      <br />
      <select id="select-one-genre">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
          Science Fiction
        </option>
        <option value="FANTASY">Fantasy</option>
      </select>
      <h3>Select many</h3>
      <label htmlFor="select-many-genre">Favorite movie genres:</label>
      <br />
      <select id="select-many-genre" multiple>
        <option selected value="COMEDY">
          Comedy
        </option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
          Science Fiction
        </option>
        <option value="FANTASY">Fantasy</option>
      </select>
      <h2>File upload</h2>
      <input type="file" />
      <h2>Radio buttons</h2>
      <label>Favorite movie genre:</label>
      <br />
      <input type="radio" value="COMEDY" name="radio-genre" id="radio-comedy" />
      <label htmlFor="radio-comedy">Comedy</label>
      <br />
      <input type="radio" value="DRAMA" name="radio-genre" id="radio-drama" />
      <label htmlFor="radio-drama">Drama</label>
      <br />
      <input
        type="radio"
        value="SCIFI"
        name="radio-genre"
        id="radio-scifi"
        checked
      />
      <label htmlFor="radio-scifi">Science Fiction</label>
      <br />
      <input
        type="radio"
        value="FANTASY"
        name="radio-genre"
        id="radio-fantasy"
      />
      <label htmlFor="radio-fantasy">Fantasy</label>
      <h2>Checkboxes</h2>
      <label>Favorite movie genre:</label>
      <br />
      <input
        type="checkbox"
        value="COMEDY"
        name="check-genre"
        id="chkbox-comedy"
        checked
      />
      <label htmlFor="chkbox-comedy">Comedy</label> <br />
      <input
        type="checkbox"
        value="DRAMA"
        name="check-genre"
        id="chkbox-drama"
      />
      <label htmlFor="chkbox-drama">Drama</label> <br />
      <input
        type="checkbox"
        value="SCIFI"
        name="check-genre"
        id="chkbox-scifi"
        checked
      />
      <label htmlFor="chkbox-scifi">Science Fiction</label> <br />
      <input
        type="checkbox"
        value="FANTASY"
        name="check-genre"
        id="chkbox-fantasy"
      />
      <label htmlFor="chkbox-fantasy">Fantasy</label>
      <h2 id="anchor-tag">Anchor tag</h2>
      Please <Link href="https://www.lipsum.com">click here</Link> to get dummy
      text
      <br />
      Checkout my <Link href="a1/other-page">other page</Link>
    </>
  );
}
