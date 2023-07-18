import Image from "next/image";
import banner from "@public/banner-img.jpg";
import JCD from "@public/JCD.jpg";
import Link from "next/link";

export default function EditProfile() {
  return (
    <>
      <h2>Edit Profile</h2>
      <Link href="profile">Save</Link>
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
      <input
        type="file"
        name="banner"
        id="banner-upload"
        accept=".jpg,.png,.jpeg"
      />
      <br />
      <Image src={JCD} width="48" height="48" alt={"JCD's face"} />
      <br />
      <input
        type="file"
        name="profile-picture"
        id="profile-picture-upload"
        accept=".jpg,.png,.jpeg"
      />
      <hr />
      <label htmlFor="name">Name</label>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        defaultValue={"WebDev"}
        placeholder="Name"
      />
      <hr />
      <label htmlFor="bio">Bio</label>
      <br />
      <textarea
        name="bio"
        id="bio"
        defaultValue={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        placeholder="Bio"
        cols={50}
        rows={10}
      />
    </>
  );
}
