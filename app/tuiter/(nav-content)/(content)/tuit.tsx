import Image from "next/image";

import JCD from "@public/JCD.jpg";

export default function Tuit() {
  return (
    <>
      <Image src={JCD} width="48" height="48" alt={"JCD's face"} />
      <br />
      <textarea placeholder="What's happening?" />
      <br />
      <select defaultValue={"EVERYONE"}>
        <option value="EVERYONE">Everyone can reply</option>
        <option value="FOLLOWING">People you follow</option>
        <option value="MENTIONED">Only people you mention</option>
      </select>
      <hr />
      <input type="file" name="media" id="tuit-media" />
      <button type="submit">Tuit</button>
      <hr />
    </>
  );
}
