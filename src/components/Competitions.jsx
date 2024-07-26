import React, { useState } from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import products from "./products";
function Competitions() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Assuming `filteredProducts` is your array of items
  const productsLength = filteredProducts.length;
  const isLastItemAlone = productsLength % 3 === 1;
  {
    const isLastItemAlone = productsLength % 3 === 1;
    return (
      <div className="container px-6 py-8 mx-auto">
        <AnimationOnScroll animateIn="fadeInDown" animateOnce={true}>
          <h1 className="mb-8 text-5xl font-bold text-center">Events</h1>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="bounceInDown" animateOnce={true}>
          <input
            type="text"
            placeholder="🔎 Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="items-center content-center justify-center w-full h-12 mb-8 text-center align-middle input input-bordered outline-zinc-400 hover:outline-dashed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-primary-200"
          />
        </AnimationOnScroll>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`card bordered shadow-lg compact bg-base-100`}
            >
              <Card
                title={product.name}
                description={product.description}
                details={product.details}
                previewImage={product.previewImage}
                link={product.amazonLink}
                mode={product.mode}
                domain={product.domain}
                participants={product.participants}
                theme={product.theme}
                judgmentCriteria={product.judgmentCriteria}
                duration={product.duration}
                contactNumber={product.contactNumber}
                emoji={product.emoji}
                newImage={product.newImage}
                incharge={product.eventIncharge}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  const applyBlur = () => {
    document.body.style.filter = "blur(10px)";
  };

  const removeBlur = () => {
    document.body.style.filter = "none";
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    document.getElementById(props.title).showModal();
    setIsModalOpen(true);
    applyBlur(); // Apply blur when opening the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    removeBlur(); // Remove blur when closing the modal
    document.getElementById(props.title).close();
  };

  return (
    <div>
      <AnimationOnScroll animateIn="zoomIn" animateOnce={true}>
        {/* modal start  */}
        <div className={isModalOpen ? "blur-background" : ""}></div>
        <a
          onClick={openModal}
          className="relative block h-64 group sm:h-80 lg:h-96"
        >
          <dialog
            id={props.title}
            className="modal"
            open={isModalOpen}
            onClose={closeModal}
          >
            <div className="modal-box ease-in-out delay-50 bg-[#9713fb] shadow-2xl">
              <figure className="px-10 pt-10 ">
                <img
                  src={props.previewImage}
                  alt="Feature"
                  className="rounded-xl"
                  height={200}
                  width={200}
                  loading="lazy"
                />
              </figure>

              <div className="items-center text-center card-body">
                <h2 className="card-title">{props.title}</h2>

                <p>
                  <strong>Mode:</strong> {props.mode}
                </p>
                <p>
                  <strong>Classes:</strong> {props.domain}
                </p>
                <p>
                  <strong>Participants:</strong> {props.participants}
                </p>
                <p>
                  <strong>Theme:</strong> {props.theme}
                </p>
                <p>
                  <strong>Duration:</strong> {props.duration}
                </p>
                <p>
                  <strong>Judgement Criteria:</strong>
                </p>
                <ul>{props.judgmentCriteria}</ul>
                <p className="text-center">
                  <strong>Event Head Contact:</strong> Mrs.
                  {props.incharge} -{" "}
                  <number className="text-[#77fb13] bold">
                    {props.contactNumber}
                  </number>
                </p>
              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button onClick={closeModal}>close</button>
            </form>
          </dialog>
          {/* modal end */}
          <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>

          <div className="relative rounded-lg flex flex-col h-full transform border-2 border-white bg-[white] transition-transform -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 ">
            {/* Image as a thumbnail at the top */}
            <img
              src={
                props.newImage ||
                `https://dummyimage.com/420x260&text=` + props.title + ``
              }
              alt="Thumbnail"
              className="object-cover w-full rounded-t-lg "
              style={{ height: "200px", width: "100%" }}
            />

            <div
              style={{
                backgroundColor: `${isHovered ? "#0F1018" : "#0F1018"}`,
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex-grow p-4 !pt-0 text-center justify-center items-center transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 bg-green-400 rounded-b-lg "
            >
              <h2 className="flex items-center justify-center flex-grow mt-4 text-xl font-extrabold text-center text-white sm:text-2xl contrast-more hover:opacity-0">
                {props.title}
              </h2>
            </div>

            <div className="absolute p-4 transition-opacity duration-0 opacity-0 group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-medium text-black sm:text-2xl">
                {props.title}
              </h3>

              <p className="mt-4 text-sm font-medium text-black sm:text-base">
                {props.description}
              </p>
            </div>
          </div>
        </a>
      </AnimationOnScroll>
    </div>
  );
}

export default Competitions;

// src/components/Products.js
