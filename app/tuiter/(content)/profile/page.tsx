import Image from "next/image";
import banner from "@public/banner.jpg";
import JCD from "@public/JCD.jpg";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <h2>Profile</h2>
      <div
        style={{
          position: "relative",
          height: "200px",
          overflow: "hidden",
        }}
      >
        <Image
          src={banner}
          fill
          objectFit="cover"
          objectPosition="0px 30%"
          alt={"banner image"}
        />
      </div>
      <br />
      <Image src={JCD} width="48" height="48" alt={"JCD's face"} />
      <Link href="edit-profile">Edit Profile</Link>
      <h2>James</h2>
      <p>@jcd</p>
      <p>
        Aspiring technology leader and current Computer Science student at
        Northeastern University with a passion for utilizing software and
        technology to improve people&apos;s lives and make the world a better
        place for everyone.
      </p>
      <p>Joined March 2001</p>
      <p>
        <span style={{ fontWeight: "bold" }}>559</span> Following{" "}
        <span style={{ fontWeight: "bold" }}>2459</span> Followers
      </p>
      <ul>
        <li>
          <Link href="tuits">Tuits</Link>
        </li>
        <li>
          <Link href="tuits-and-replies">Tuits and Replies</Link>
        </li>
        <li>
          <Link href="media">Media</Link>
        </li>
        <li>
          <Link href="likes">Likes</Link>
        </li>
      </ul>
    </>
  );
}
