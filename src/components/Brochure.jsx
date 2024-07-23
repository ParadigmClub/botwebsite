import React, { useEffect } from "react";

function Brochure() {
  useEffect(() => {
    // Replace 'https://example.com/my-brochure' with your actual brochure link
    window.location.href =
      "https://drive.google.com/file/d/1Coq7lmUBd7TzEOVKHzVHRfZJtuYcoEzQ/view?usp=sharing";
  }, []);

  return <div>Redirecting to brochure...</div>;
}

export default Brochure;
