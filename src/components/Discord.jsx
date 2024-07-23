import React, { useEffect } from "react";

function Brochure() {
  useEffect(() => {
    // Replace 'https://example.com/my-brochure' with your actual brochure link
    window.location.href = "https://discord.gg/RC3wxVetdk";
  }, []);

  return <div>Redirecting to brochure...</div>;
}

export default Brochure;
