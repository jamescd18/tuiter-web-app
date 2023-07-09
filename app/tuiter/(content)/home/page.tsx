import Link from "next/link";
import Image from "next/image";

import JCD from "@public/JCD.jpg";
import robot from "@public/robot.jpg";
import dog from "@public/dog.jpg";

export default function Home() {
  return (
    <>
      <h2>Home</h2>
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
      <ul>
        <li>
          <Link href="topic">Topic 123</Link>
          <br />
          <Image src={JCD} width="48" height="48" alt={"JCD's face"} />
          <Link href="profile">James</Link> @jcd - 4h
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, dolore accusamus. Quo provident illo molestias quaerat
            dolor eum sunt aliquam nihil doloribus, eveniet possimus
            exercitationem repudiandae architecto unde sit consectetur! Aliquam
            accusantium quo, asperiores odio alias qui eos quaerat numquam autem
            amet nobis aspernatur tenetur nisi nulla! Itaque impedit illum
            consequuntur magni atque nam fuga velit alias quas, adipisci
            reiciendis dolorum laudantium perspiciatis. Atque consectetur
            placeat officiis, odio vitae nostrum error iste amet mollitia
            impedit exercitationem beatae fuga libero quaerat tempora tenetur
            officia natus eius velit laudantium illum autem! Debitis sit culpa
            recusandae deleniti, totam aliquid pariatur saepe vel eius! Odit ut
            odio totam, repellendus officia sint magni. Quibusdam sit magnam
            placeat ratione velit saepe est. Neque obcaecati quasi nam?
          </p>
          <Link href="reply">Reply</Link> 123 |{" "}
          <Link href="retuit">Retuit</Link> 234 | <Link href="like">Like</Link>{" "}
          345 | <Link href="share">Share</Link>
        </li>
        <br />
        <li>
          <Link href="topic">Topic 123</Link>
          <br />
          <Image src={dog} width="48" height="48" alt={"acd's profile"} />
          <Link href="profile">Alexander</Link> @acd - 2h
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            voluptatibus officia sed nemo amet autem nesciunt minus nam sint
            voluptas laboriosam laudantium, et, quasi harum sequi aut veritatis
            optio quia doloremque eum placeat alias modi id. Qui ullam a
            nostrum!
          </p>
          <Link href="reply">Reply</Link> 321 |{" "}
          <Link href="retuit">Retuit</Link> 45 | <Link href="like">Like</Link>{" "}
          27 | <Link href="share">Share</Link>
        </li>
        <br />
        <li>
          <Link href="topic">Topic 123</Link>
          <br />
          <Image src={robot} width="48" height="48" alt={"parth's profile"} />
          <Link href="profile">Parth</Link> @parth - 1h
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            quisquam cupiditate, sit ratione eum voluptates beatae alias.
            Laudantium, quod reiciendis.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Et7TTfwvBFo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <br />
          <Link href="reply">Reply</Link> 1 | <Link href="retuit">Retuit</Link>{" "}
          82 | <Link href="like">Like</Link> 5584 |{" "}
          <Link href="share">Share</Link>
        </li>
      </ul>
    </>
  );
}
