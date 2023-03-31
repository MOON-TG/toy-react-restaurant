import { useState } from "react";
import Special1 from "./specials/Special1";
import Special2 from "./specials/Special2";
import Special3 from "./specials/Special3";
import Special4 from "./specials/Special4";

export default function Specials() {
  const [selectedSpe1, setSelectdSpe1] = useState(true);
  const [selectedSpe2, setSelectdSpe2] = useState(false);
  const [selectedSpe3, setSelectdSpe3] = useState(false);
  const [selectedSpe4, setSelectdSpe4] = useState(false);

  const [currentComponent, setCurrentComponent] = useState(<Special1 />);
  const handleButtonClick = (component) => {
    setCurrentComponent(component);
  };
  return (
    <div style={{ backgroundColor: "rgb(0,0,0)" }} id="specials">
      <div
        style={{ width: "1100px", margin: "auto", height: "800px" }}
        id="specialsDiv"
      >
        <div className="py-10">
          <div className="">
            <p className="font-extrabold text-gray-400">
              SPECIALSㅤ───────────
            </p>
            <p
              className="text-3xl font-extrabold"
              style={{ color: "rgb(253, 186, 116)" }}
            >
              Check Our Specials
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <div
              className="flex mt-10"
              style={{ width: "100%" }}
              id="specialsDivChild"
            >
              <div style={{ width: "25%" }} id="specialMenu">
                <div
                  className="text-white border-r-2 border-orange-300"
                  id="specialBorder"
                  style={{ width: "100%" }}
                >
                  <p
                    className={
                      selectedSpe1
                        ? "px-4 py-3 bg-orange-300 text-black hover:cursor-pointer duration-300"
                        : "px-4 py-3 hover:cursor-pointer hover:text-orange-300 duration-300"
                    }
                    onClick={() => {
                      setSelectdSpe1((selectedSpe1) => true);
                      setSelectdSpe2((selectedSpe2) => false);
                      setSelectdSpe3((selectedSpe3) => false);
                      setSelectdSpe4((selectedSpe4) => false);
                      handleButtonClick(<Special1 />);
                    }}
                  >
                    Tomahawk Steak
                  </p>
                  <p
                    className={
                      selectedSpe2
                        ? "px-4 py-3 bg-orange-300 text-black hover:cursor-pointer duration-300"
                        : "px-4 py-3 hover:cursor-pointer hover:text-orange-300 duration-300"
                    }
                    onClick={() => {
                      setSelectdSpe1((selectedSpe1) => false);
                      setSelectdSpe2((selectedSpe2) => true);
                      setSelectdSpe3((selectedSpe3) => false);
                      setSelectdSpe4((selectedSpe4) => false);
                      handleButtonClick(<Special2 />);
                    }}
                  >
                    T-Bone Steak
                  </p>
                  <p
                    className={
                      selectedSpe3
                        ? "px-4 py-3 bg-orange-300 text-black hover:cursor-pointer duration-300"
                        : "px-4 py-3 hover:cursor-pointer hover:text-orange-300 duration-300"
                    }
                    onClick={() => {
                      setSelectdSpe1((selectedSpe1) => false);
                      setSelectdSpe2((selectedSpe2) => false);
                      setSelectdSpe3((selectedSpe3) => true);
                      setSelectdSpe4((selectedSpe4) => false);
                      handleButtonClick(<Special3 />);
                    }}
                  >
                    Gorgonzola Pizza
                  </p>
                  <p
                    className={
                      selectedSpe4
                        ? "px-4 py-3 bg-orange-300 text-black hover:cursor-pointer duration-300"
                        : "px-4 py-3 hover:cursor-pointer hover:text-orange-300 duration-300"
                    }
                    onClick={() => {
                      setSelectdSpe1((selectedSpe1) => false);
                      setSelectdSpe2((selectedSpe2) => false);
                      setSelectdSpe3((selectedSpe3) => false);
                      setSelectdSpe4((selectedSpe4) => true);
                      handleButtonClick(<Special4 />);
                    }}
                  >
                    Golden Basil Pizza
                  </p>
                </div>
              </div>
              <div
                className=""
                style={{ width: "80%", height: "600px" }}
                id="specialInfo"
              >
                <div className="ml-5" id="specialInfo2">
                  {currentComponent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
