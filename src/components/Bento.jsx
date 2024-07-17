import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";

function Bento() {
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          //   paddingBottom: "8px",
          padding: "8px",
        }}
      >
        <div
          className="grid"
          style={{
            display: "grid",
            height: "100%",
            width: "100%",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            gap: "16px",
            padding: "8px",
            borderRadius: "8px",
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 2",
              gridRow: "span 1",
              backgroundColor: "transparent",
              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AnimationOnScroll animateIn="zoomIn" animateOnce={true}>
              <img
                className="rounded"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // CODEQUEST
                }}
                src="https://cdn.discordapp.com/attachments/1159888188228259930/1263169945886396447/a7fbdc4e-3679-4f5c-b2d2-3d3afde9d10f.png?ex=6699422f&is=6697f0af&hm=78709f554ef04d14e6554d9c5b8cffe5a742c2b52f84937d8c1943553bacfa5d& "
              ></img>
            </AnimationOnScroll>
          </div>
          <div
            className="rounded"
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 1",
              gridRow: "span 1",
              backgroundColor: "transparent",

              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
            }}
          >
            <AnimationOnScroll animateIn="slideInDown" animateOnce={true}>
              <img
                className="rounded"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Logo Fusion
                }}
                src="https://cdn.discordapp.com/attachments/1159888188228259930/1263171753564307486/d682aeb4-336f-4ccc-90bd-7241b1503f08.png?ex=669943de&is=6697f25e&hm=758be788d10194e377e067f6183d2bb304a8615cd8c83ad29518a155bbb6fb84&"
              ></img>
            </AnimationOnScroll>
          </div>
          <div
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 1",
              gridRow: "span 4",
              backgroundColor: "transparent",
              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "103%",
            }}
          >
            <AnimationOnScroll animateIn="slideInDown" animateOnce={true}>
              <img
                className="rounded "
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Mecha Dash
                }}
                src="https://cdn.discordapp.com/attachments/1159888188228259930/1263173554585997332/ce3dbc0f-1ad7-425d-b843-4f28acacd650.png?ex=6699458c&is=6697f40c&hm=6b1db70d05c46b438a8c47ab3a92adaaeb121c1ac8af2a42960d4f8502de7879&"
              ></img>
            </AnimationOnScroll>
          </div>
          <div
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 1",
              gridRow: "span 2",

              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <AnimationOnScroll animateIn="zoomIn" animateOnce={true}>
              <img
                className="rounded "
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // This line ensures the image covers the container fully
                }}
                src="https://cdn.discordapp.com/attachments/1159888188228259930/1263171835445641356/6cba3ff5-5d0b-4a35-8168-8d8e7635086c.png?ex=669943f2&is=6697f272&hm=5697916b9b4f3008e75a3e9b71912086ac198c7d9b90924a61464640fc7c4317&"
              ></img>
            </AnimationOnScroll>
          </div>
          <div
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 2",
              gridRow: "span 2",

              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AnimationOnScroll animateIn="slideInLeft" animateOnce={true}>
              <img
                className="rounded "
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Valo
                }}
                src="https://media.discordapp.net/attachments/1159888188228259930/1263171651454107660/28086bbd-9df7-4694-a478-821f002ac8b6.png?ex=669943c6&is=6697f246&hm=47e4ab1cfb5e5926575b62fbf36f4a809ddac92d3df49b5e07ef4a674f34a429&=&format=webp&quality=lossless&width=1405&height=702"
              ></img>
            </AnimationOnScroll>
          </div>
          <div
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 2",
              gridRow: "span 2",

              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* mechb reak */}
            <AnimationOnScroll
              animateIn="slideInUp"
              animateOnce={true}
              offset={0}
            >
              <img
                className="rounded "
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // This line ensures the image covers the container fully
                }}
                src="https://media.discordapp.net/attachments/1159888188228259930/1263171897777192981/7076afbe-fe18-44d9-a602-895d726f6ff5.png?ex=66994401&is=6697f281&hm=6d627564407532607bb197d5e8a70c76d81b3330159ceb3aa5b059592c0225b3&=&format=webp&quality=lossless&width=687&height=343"
              ></img>
            </AnimationOnScroll>
          </div>
          <div
            style={{
              fontFamily: "'M PLUS 2 Variable', sans-serif",
              gridColumn: "span 1",
              gridRow: "span 1",

              borderRadius: "8px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "110%",
            }}
          >
            <AnimationOnScroll
              animateIn="zoomInUp"
              animateOnce={true}
              animatePreScroll={true}
              offset={0}
            >
              <img
                className="rounded "
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // TechPrint
                }}
                src="https://cdn.discordapp.com/attachments/1159888188228259930/1263178111495835831/9f74292e-7401-40ef-964c-d7def07387f0.png?ex=669949ca&is=6697f84a&hm=614e1cb11c15b878b535b0c14c4d8ccc654516cc0253c3d9684dc02d14759259&"
              ></img>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bento;
