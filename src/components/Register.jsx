import React, { useEffect } from "react";

function Register() {
  useEffect(() => {
    // Replace 'https://example.com/my-brochure' with your actual brochure link
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSfoIp-3erOri72MpCI5F-jYFvS9XLNLS-De2aWW3ywQeBk65Q/viewform";
  }, []);

  return <div>Redirecting to brochure...</div>;
}

export default Register;
