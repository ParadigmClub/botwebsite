import Mechabreak from "../public/mechabreakpreview.webp";
import Mechadash from "../public/thumb/md.png";
import Techprint from "../public/thumb/techprint.png";
import Techtrek from "../public/thumb/techtrek.png";
import Logofusion from "../public/thumb/logofusion.png";

import Sprite from "../public/thumb/sprite.png";
import AI from "../public/thumb/ai.png";

import Digi from "../public/thumb/digicombat.png";
import Code from "../public/thumb/codequest.png";
import Technotire from "../public/thumb/technotire.png";
import aifsg from "../public/bult/aifsg.png";
import ssurge from "../public/bult/ssurge.png";
import cdquest from "../public/bult/cdquest.png";
import tp from "../public/bult/tp.png";
import notire from "../public/bult/notire.png";
import lf from "../public/bult/lf.png";
import dc from "../public/bult/dc.png";
import mechdash from "../public/bult/mechdash.png";
import qmb from "../public/bult/qmb.png";
import techt from "../public/bult/techt.png";

const products = [
  {
    id: 10,
    name: "Techno Tire",
    description:
      "Design a Flyer on the topic 'Future Innovations in Technology' using MS Word.",
    imageUrl: "https://via.placeholder.com/150",
    mode: "Offline(Round 2)",
    domain: "Class II",
    participants: "2",
    theme: "Web Browsers and Search Engine",
    software: "physical costume",
    judgmentCriteria: [
      "Relevance to the topic\n",
      "Creativity\n",
      "Overall Presentation\n",
    ],
    eventIncharge: "Vijeta Mishra",
    contactNumber: " 9971617120",
    emoji: "👔",
    previewImage: Technotire,
    newImage: notire,
  },
  {
    id: 1,
    name: "Tech Print",
    description:
      "Design a Flyer on the topic 'Future Innovations in Technology' using MS Word.",
    imageUrl: "https://via.placeholder.com/150",
    mode: "Online(Round 1)/Offline(Round 2)",
    domain: "Classes III & IV",
    participants: "2 (one from each class)",
    theme: "Future Innovations in Technology",
    software: "MS Word 2016",
    duration: "1 Hour",
    judgmentCriteria: [
      "Relevance to the topic\n",
      "Creativity\n",
      "Overall Presentation\n",
    ],
    eventIncharge: "Vijeta Mishra",
    contactNumber: "9560874111",
    emoji: "🖨️",
    previewImage: Techprint,
    newImage: tp,
  },
  {
    id: 2,
    name: "Tech Trek",
    description:
      "Create a PowerPoint presentation on 'Future Innovations' using MS PowerPoint.",
    imageUrl: "https://via.placeholder.com/150",
    mode: "Offline",
    domain: "Class V",
    participants: "1",
    theme: "Future Innovations",
    software: "MS PowerPoint",
    duration: "1 Hour",
    judgmentCriteria: ["Presentation\n", "Creativity\n", "Tools Used\n"],
    eventIncharge: "Manisha Pal",
    contactNumber: "9958995077",
    emoji: "🚀",
    previewImage: Techtrek,
    newImage: techt,
  },
  {
    id: 3,
    name: "Logo Fusion",
    description:
      "Design a logo for 'Future Innovators' using Canva/Adobe Express/Adobe Photoshop.",
    imageUrl: "https://via.placeholder.com/150",
    mode: "Offline",
    domain: "Classes VI-VIII",
    participants: "1",
    theme: "Future Innovators Logo Design Challenge",
    topic: "The Robotics Revolution",
    software: "Canva / Adobe Express / Adobe Photoshop",
    duration: "1 Hour",
    judgmentCriteria: [
      "Creativity and Originality\n",
      "Relevance\n",
      "Aesthetic Appeal\n",
      "Clarity and Legibility\n",
    ],
    eventIncharge: "Suksham Khare",
    contactNumber: "9871422159",
    emoji: "🎨",
    previewImage: Logofusion,
    newImage: lf,
  },
  {
    id: 4,
    name: "Mecha Dash",
    description:
      "Participate in a Robo-Race competition using DIY mechanical kits.",
    imageUrl: "https://via.placeholder.com/150",
    mode: "Offline",
    domain: "Classes VI-VII",
    participants: "2",
    duration: "40 min",
    judgmentCriteria: ["Effort\n", "Design\n", "Strategy\n", "Discipline\n"],
    eventIncharge: "Taruna Butani",
    contactNumber: "9818667337",
    emoji: "🤖",
    previewImage: Mechadash,
    newImage: mechdash,
  },
  {
    id: 5,
    name: "Sprite Surge",
    description: "Create a story on 'Cyber City Adventures' using Scratch.",
    imageUrl: "https://via.placeholder.com/150",
    mode: "Online",
    domain: "Classes VI-VIII",
    participants: "2",
    theme: "Cyber City Adventures",
    software: "Scratch",
    judgmentCriteria: [
      "Creativity and Originality\n",
      "Relevance\n",
      "Clarity and Legibility\n",
    ],
    eventIncharge: "Suksham Khare",
    contactNumber: "9871422159",
    emoji: "🎮",
    previewImage: Sprite,
    newImage: ssurge,
  },
  {
    id: 6,
    name: "AI for Social Good",
    description:
      "Develop AI-powered solutions that address societal challenges.",
    imageUrl: "https://via.placeholder.com/150",
    mode: "Online(Round 1)/Offline(Round 2)",
    domain: "Classes IX & X",
    participants: "1",
    software: "PowerPoint/ Canva",
    theme: "AI-powered solutions addressing societal challenges",
    judgmentCriteria: [
      "Original Ideas\n",
      "Relevance to Social Issue\n",
      "Demonstration of AI Techniques\n",
      "Project Impact\n",
      "Problem Identification\n",
      "Innovation and Creativity\n",
      "Technical Proficiency\n",
      "Impact and Effectiveness\n",
      "Presentation and Communication\n",
    ],
    eventIncharge: "Ms. Hina Sumbul",
    contactNumber: "7506721367",
    emoji: "🧠",
    previewImage: AI,
    newImage: aifsg,
  },
  {
    id: 7,
    name: "Quick Mecha Break",
    description:
      "Build an autonomous robot that moves straight and stops at the end of the road.",
    imageUrl: "https://via.placeholder.com/150",
    mode: "Offline",
    domain: "Classes VIII & IX",
    participants: "3",
    duration: "40 min",
    judgmentCriteria: [
      "Fastest robot reaching the finish line\n",
      "Stopping at the closest distance to the obstacle\n",
      "Negative points for maneuvering outside the dedicated area\n",
      "Robot shall not spoil the arena\n",
    ],
    eventIncharge: "Taruna Butani",
    contactNumber: "9818667337",
    emoji: "🚗",
    previewImage: Mechabreak,
    newImage: qmb,
  },
  {
    id: 8,
    name: "Digi Combat",
    description: "Valorant tournament following a knockout format.",
    imageUrl: "https://via.placeholder.com/150",
    mode: "Online",
    domain: "Classes IX - XII",
    participants: "5",
    judgmentCriteria: [
      "Outcome of the match\n",
      "First team to reach 13 victories\n",
    ],
    eventIncharge: "Ms. Ranjana Bajaj",
    contactNumber: "9891435310",
    emoji: "🔫",
    previewImage: Digi,
    newImage: dc,
  },
  {
    id: 9,
    name: "Code Quest",
    description:
      "Solve algorithm and data manipulation questions on HackerRank using Python.",
    imageUrl: "https://via.placeholder.com/150",
    mode: "Offline",
    domain: "Classes XI & XII",
    participants: "1",
    software: "Python 3.9 and above",
    duration: "90 minutes",
    judgmentCriteria: [
      "Correctness\n",
      "Creativity\n",
      "Originality\n",
      "Complexity\n",
    ],
    eventIncharge: "Ms. Ranjana Bajaj/ Ms. Prajakta Kalgaonkar",
    contactNumber: "9891435310/ 9818137177",
    emoji: "💻",
    previewImage: Code,
    newImage: cdquest,
  },
];

export default products;
