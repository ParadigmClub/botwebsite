import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";

function Team() {
  return (
    <div className="bg-base-100">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <AnimationOnScroll animateIn="fadeInDown" animateOnce={true}>
              <h1 className="text-5xl font-bold  mt-10">Our Team</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true}>
              <p className="py-6 mb-5">
                The Ones who made it happen behind the scenes
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 ">
        <TeamMember
          name="Medhansh Kapoor"
          avatar="https://github.com/whirlxd.png"
          title1="Site Developer"
          title2="Vice President"
          github="https://github.com/whirlxd"
          twitter="https://twitter.com/whirlxd"
        ></TeamMember>

        <TeamMember
          name="John Doe"
          avatar="https://github.com/whirlxd.png"
          title1="Site Developer"
          title2="Beta Tester"
          github="https://github.com/whirl21"
          twitter="https://twitter.com/whirl_21"
        ></TeamMember>
        <TeamMember
          name="John Doe"
          avatar="https://github.com/whirlxd.png"
          title1="Site Developer"
          title2="Beta Tester"
          github="https://github.com/whirl21"
          twitter="https://twitter.com/whirl_21"
        ></TeamMember>
        <TeamMember
          name="John Doe"
          avatar="https://github.com/whirlxd.png"
          title1="Site Developer"
          title2="Beta Tester"
          github="https://github.com/whirl21"
          twitter="https://twitter.com/whirl_21"
        ></TeamMember>
        <TeamMember
          name="John Doe"
          avatar="https://github.com/whirlxd.png"
          title1="Site Developer"
          title2="Beta Tester"
          github="https://github.com/whirl21"
          twitter="https://twitter.com/whirl_21"
        ></TeamMember>
        <TeamMember
          name="John Doe"
          avatar="https://github.com/whirlxd.png"
          title1="Site Developer"
          title2="Beta Tester"
          github="https://github.com/whirl21"
          twitter="https://twitter.com/whirl_21"
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
      className=" items-center gap-4 overflow-y-hidden overflow-x-scroll px-10 pt-1 pb-10 xl:grid xl:overflow-x-auto xl:px-4"
    >
      <AnimationOnScroll
        animateIn="jackInTheBox"
        animateOnce={true}
        className="overflow-hidden"
      >
        <div className="bg-[#9713fb] rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full ">
          <div className="dropdown">
            <div tabindex="0">
              <div className=" avatar">
                <div className="mask mask-decagon bg-base-content h-32 w-32  bg-opacity-10 p-px">
                  <img
                    src={props.avatar}
                    alt="Avatar"
                    className="mask mask-decagon bg-transparent "
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="dropdown w-full">
              <div tabindex="0">
                <div className="text-center">
                  <div className="text-lg font-extrabold text-[#77fb13]">
                    {props.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown w-full">
              <div tabindex="0">
                <div className="mt-2 text-center">
                  <div className="badge badge-ghost mr-3 py-2">
                    {props.title1}
                  </div>
                </div>
              </div>
              <div tabindex="0" className="dropdown-content py-2"></div>
            </div>
          </div>
          <div className="dropdown dropdown-top">
            <div tabindex="0">
              <div className="btn-group">
                <a
                  href={props.github}
                  className="btn btn-neutral mr-1 btn-circle"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                <a
                  href={props.twitter}
                  className="btn btn-neutral btn-circle"
                  target="_blank"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
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
