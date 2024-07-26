import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import "../styles/team.css";
import Aditya from "../public/pics/aditya.png";
import Samriddh from "../public/pics/samriddh.png";
function Team() {
  return (
    <div className="bg-base-100">
      <div className="hero">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <AnimationOnScroll animateIn="fadeInDown" animateOnce={true}>
              <h1 className="mt-10 mb-10 text-5xl font-bold">Our Team</h1>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
        <TeamMember
          name="Md.Arquam"
          avatar="https://media.discordapp.net/attachments/1264873364237975623/1266489475727622174/image.png?ex=66a555bd&is=66a4043d&hm=188ceb5668af1a0eaaac253a97ce79ddb67a73503706d8c78496f0a2cbf99d69&=&format=webp&quality=lossless&width=621&height=628"
          title1="President Computers"
          title2="Beta Tester"
          github="https://discord.com/users/864736437710487583"
        ></TeamMember>
        <TeamMember
          name="Aditya Das"
          avatar="https://media.discordapp.net/attachments/1264873364237975623/1266485881926062150/image.png?ex=66a55264&is=66a400e4&hm=e724a12c9c978139181dc98f9d523ad5f3d818eae6a980c8dad9e47157b03d50&=&format=webp&quality=lossless&width=433&height=437"
          title1="President Council"
          title2="Beta Tester"
          github="https://instagram.com/_adityxa"
          twitter="https://discord.com/users/1131499587442581564"
        ></TeamMember>
        <TeamMember
          name="Md.Rayyan"
          avatar="https://media.discordapp.net/attachments/1264873364237975623/1266492848757542912/image.png?ex=66a558e1&is=66a40761&hm=8e3f1250d9eb6b31462649ceb6526339afb41c730c24a751456452eb596247e8&=&format=webp&quality=lossless&width=348&height=437"
          title1="President Robotics"
          title2="Beta Tester"
          github="https://instagram.com/vedrecide"
          twitter="https://github.com/vedrecide"
        ></TeamMember>

        <TeamMember
          name="Samriddh Khanna"
          avatar={Samriddh}
          title1="President Robotics"
          title2="Beta Tester"
          github="https://instagram.com/samrridh.k "
          twitter="https://instagram.com/samrridh.k "
        ></TeamMember>
        <TeamMember
          name="Medhansh Kapoor"
          avatar="https://media.discordapp.net/attachments/1264873364237975623/1266487388360937482/image.png?ex=66a553cb&is=66a4024b&hm=7fcbf556bd0121d619a78d90cafa1e5fb5de674efbb49b5d7e66976bbc366d90&=&format=webp&quality=lossless&width=521&height=476&"
          title1="Vice President Robotics"
          title2="Vice President"
          github="https://instagram.com/whirlxd"
          twitter="https://whirlxd.xyz"
        ></TeamMember>
        <TeamMember
          name="Ayaan Hashmi"
          avatar="https://media.discordapp.net/attachments/1159509339426533428/1266092590147567668/profile-pic_2.png?ex=66a5359c&is=66a3e41c&hm=b92f4c34f244e9f271e51cbefed1976dd4dd15c1f4e9108c0323bb243c391ec4&=&format=webp&quality=lossless&width=702&height=702"
          title1="Vice President Robotics"
          title2="Beta Tester"
          github="https://discord.com/users/951491358500216842"
          twitter="https://github.com/ayaanhashmi08"
        ></TeamMember>

        <TeamMember
          name="Inesh Aggarwal"
          avatar="https://media.discordapp.net/attachments/1264873364237975623/1266471226461651077/PHOTO-2024-07-25-22-49-26.jpg?ex=66a544be&is=66a3f33e&hm=6e908a766c379b9dd7c32926f763f199c70377af3ecfa04f507dfab69b3b6d71&=&format=webp&width=372&height=437"
          title1="Vice President Computers"
          title2="Beta Tester"
          github="https://instagram.com/inesh.agrawal.56"
          twitter="https://instagram.com/inesh.agrawal.56"
        ></TeamMember>
        <TeamMember
          name="Vansh Bhardwaj"
          avatar="https://avatar.iran.liara.run/public/34"
          title1="Vice President Computers"
          title2="Beta Tester"
          github="https://instagram.com/_vxnsh25"
          twitter="https://open.spotify.com/user/l8mtiwbl6fv3jgwkjx0q9qj2t?si=ddw2_JsISgGojeNHJ5Ybjg&nd=1&dlsi=1b3ebe1c34ad4913"
        ></TeamMember>

        <TeamMember
          name="Abdullah Viqar"
          avatar="https://media.discordapp.net/attachments/996737071802761266/1266063288169660466/IMG_2316.JPG?ex=66a51a52&is=66a3c8d2&hm=61b86367b3ef8843e1c74641b2b52ff65752b89be69f696ef45240fa2cfe0b9e&=&format=webp&width=702&height=702"
          title1="Vice President Photography"
          title2="Beta Tester"
          github="https://www.instagram.com/abdullah.vqr/"
          twitter="https://unsplash.com/@abdullahvqr"
        ></TeamMember>
        <TeamMember
          name="Vansh Sharma"
          avatar="https://avatar.iran.liara.run/public/36"
          title1="Volunteer"
          title2="Beta Tester"
          github="https://www.instagram.com/vansh_sharma1144"
        ></TeamMember>
        <TeamMember
          name="Ranjana Ma'am"
          avatar="https://avatar.iran.liara.run/public/job/teacher/female"
          title1="HOD Computers"
          github="https://wa.me/9891435310"
          twitter="tel:9891435310"
        ></TeamMember>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
function TeamMember(props) {
  return (
    <div
      id="component-demo"
      className="items-center gap-4 px-10 pt-1 pb-10 overflow-x-scroll overflow-y-hidden scr xl:grid xl:overflow-x-auto xl:px-4"
    >
      <AnimationOnScroll
        animateIn="jackInTheBox"
        animateOnce={true}
        className="overflow-hidden"
      >
        <div className="bg-[#9713fb] scr rounded-box col-span-3 row-span-3 mx-2 grid w-auto flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full hover:scale-95 transition-transform scroll-smooth ">
          <div className="dropdown">
            <div tabindex="0">
              <div className=" avatar">
                <div className="w-32 h-32 p-px mask mask-squircle bg-base-content bg-opacity-10">
                  <img
                    src={props.avatar}
                    alt="Avatar"
                    className="bg-transparent "
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full dropdown">
              <div tabindex="0">
                <div className="text-center">
                  <div className="text-lg font-extrabold text-[#77fb13]">
                    {props.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full dropdown">
              <div tabindex="0">
                <div className="mt-2 text-center">
                  <div className="py-2 mr-3 badge badge-ghost">
                    {props.title1}
                  </div>
                </div>
              </div>
              <div tabindex="0" className="py-2 dropdown-content"></div>
            </div>
          </div>
          <div className="dropdown dropdown-top">
            <div tabindex="0">
              <div className="btn-group">
                <a
                  href={props.github}
                  className="mr-1 btn btn-neutral btn-circle hover:scale-90"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                  </svg>
                </a>

                <a
                  href={props.twitter || props.github}
                  className="ml-1 btn btn-neutral btn-circle hover:scale-90"
                  target="_blank"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                    style={{
                      transform: "scale(1.1)",
                      transformOrigin: "center",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Team;
