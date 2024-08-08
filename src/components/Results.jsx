import DigiCombat from "../public/thumb/digicombat.png";
import SpriteSurge from "../public/thumb/sprite.png";
import AIFSG from "../public/thumb/ai.png";
import CodeQuest from "../public/thumb/codequest.png";
import TT from "../public/thumb/technotire.png";
import techprint from "../public/thumb/techprint.png";
import techtrek from "../public/thumb/techtrek.png";
import md from "../public/thumb/md.png";
import logofusion from "../public/thumb/logofusion.png";
import qmb from "../public/mechabreakpreview.webp";

import React from "react";

import AnimationOnScroll from "react-animate-on-scroll";

function App() {
  return (
    <div>
      <AnimationOnScroll animateIn="fadeInDown" animateOnce={true}>
        <h1 className="justify-center mx-auto mt-2 mb-4 text-center">
          Results
        </h1>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="zoomIn">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label></label>
                </th>
                <th>Event</th>
                <th>1ST Position</th>
                <th>2ND Position</th>
                <th>3RD Position</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-14 h-14">
                        <img src={DigiCombat} alt="Digi Combat" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Digi Combat</div>
                      <div className="text-sm opacity-50">IX-XII</div>
                    </div>
                  </div>
                </td>

                <td className="font-bold">
                  Ryan International School, Noida
                  <br />
                </td>

                <td>Father Agnel School</td>

                <td>MSN & DPS GBN</td>
              </tr>

              <tr>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-circle">
                        <img
                          src={SpriteSurge}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Sprite Surge</div>
                      <div className="text-sm opacity-50">VI-VII</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  Sommerville Noida
                  <br />
                </td>
                <td>Mayoor Chopasni School,Jodhpur</td>

                <td>Mayoor School Noida</td>
              </tr>
              <tr>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-circle">
                        <img src={AIFSG} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">AI For Social Good</div>
                      <div className="text-sm opacity-50">IX-X</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  Mayoor Chopasni School , Jodhpur
                  <br />
                </td>
                <td>Mayo College , Ajmer & MSN</td>

                <td>Modern School , Noida</td>
              </tr>
              <tr>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-circle">
                        <img
                          src={CodeQuest}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Code Quest</div>
                      <div className="text-sm opacity-50">XI-XII</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  Ryan International ,MV & MSN
                  <br />
                </td>
                <td>Pragyan School , Greater Noida</td>

                <td>Mayoor Chopasni School ,Jodhpur</td>
              </tr>
              <tr>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-circle">
                        <img src={TT} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Techno Ttire</div>
                      <div className="text-sm opacity-50">II</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  Mayoor Chopasni School , Jodhpur
                  <br />
                </td>
                <td>Sommerville School Noida</td>

                <td>Sarvottam International & MSN</td>
              </tr>
              <tr>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-circle">
                        <img
                          src={techprint}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Tech Print</div>
                      <div className="text-sm opacity-50">III-IV</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  Sommerville School Noida & MSN
                  <br />
                </td>
                <td>Jaypee Public School </td>

                <td>Mayoor Chopasani School , Jodhpur</td>
              </tr>
              <tr>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-circle">
                        <img
                          src={techtrek}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Tech Trek</div>
                      <div className="text-sm opacity-50">V</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  ASPAM Scottish , Noida
                  <br />
                </td>
                <td>Vivekanand School , Preet Vihar & MSN</td>

                <td>Mayoor Chopasni School , Jodhpur</td>
              </tr>
              <tr>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-circle">
                        <img src={md} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Mecha Dash</div>
                      <div className="text-sm opacity-50">VI-VII</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  VBPS,Greater Noida
                  <br />
                </td>
                <td>Mayo College,Ajmer</td>

                <td>DPS RKP & MSN</td>
              </tr>
              <tr>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-circle">
                        <img
                          src={logofusion}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Logo Fusion</div>
                      <div className="text-sm opacity-50">VI-VII</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  Sommerville School Noida & MSN
                  <br />
                </td>
                <td>Jaypee Public School Noida</td>
                <td>Mayor College , Ajmer</td>
              </tr>
              <tr>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-circle">
                        <img src={qmb} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Quick Mecha Break</div>
                      <div className="text-sm opacity-50">VII-IX</div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">
                  VBPS,Greater Noida
                  <br />
                </td>
                <td>Mayo College,Ajmer</td>

                <td>The Khaitan School,Noida</td>
              </tr>
            </tbody>
            {/* foot */}
          </table>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default App;
