import React, { useState } from "react";
import Steak from "./Steak";
import Pasta from "./Pasta";
import Wine from "./Wine";

export default function Menu() {
  const [selectedSteak, setSelectedSteak] = useState(true);
  const [selectedPasta, setSelectedPasta] = useState(false);
  const [selectedWine, setSelectedWine] = useState(false);

  const [currentComponent, setCurrentComponent] = useState(<Steak />);
  const handleButtonClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div style={{ backgroundColor: "rgb(34,13,13)" }} id="menu">
      <div
        style={{ width: "1100px", margin: "auto", height: "700px" }}
        id="menuDiv"
      >
        <div className="py-10" id="menuDivTest">
          <div className="">
            <p className="font-extrabold text-gray-400">MENUㅤ───────────</p>
            <p
              className="text-3xl font-extrabold"
              style={{ color: "rgb(201,186,88)" }}
            >
              Check Our Tasty Menu
            </p>
          </div>
          <div className="flex justify-center mt-5 text-white">
            <p
              className={
                selectedSteak
                  ? "text-yellow-500 duration-300 hover:cursor-pointer p-3"
                  : "p-3 text-white duration-300 hover:cursor-pointer hover:text-yellow-500"
              }
              onClick={() => {
                setSelectedSteak((selectedSteak) => true);
                setSelectedPasta((selectedPasta) => false);
                setSelectedWine((selectedWine) => false);
                handleButtonClick(<Steak />);
              }}
            >
              Steak
            </p>
            <p
              className={
                selectedPasta
                  ? "text-yellow-500 duration-300 hover:cursor-pointer p-3"
                  : "p-3 text-white duration-300 hover:cursor-pointer hover:text-yellow-500"
              }
              onClick={() => {
                setSelectedSteak((selectedSteak) => false);
                setSelectedPasta((selectedPasta) => true);
                setSelectedWine((selectedWine) => false);
                handleButtonClick(<Pasta />);
              }}
            >
              Pasta
            </p>
            <p
              className={
                selectedWine
                  ? "text-yellow-500 duration-300 hover:cursor-pointer p-3"
                  : "p-3 text-white duration-300 hover:cursor-pointer hover:text-yellow-500"
              }
              onClick={() => {
                setSelectedSteak((selectedSteak) => false);
                setSelectedPasta((selectedPasta) => false);
                setSelectedWine((selectedWine) => true);
                handleButtonClick(<Wine />);
              }}
            >
              Wine
            </p>
          </div>
          {/* <div className="flex">
            <div className="grid mr-5" style={{ width: "50%" }}>
              <div className="mt-8">
                <div className="flex">
                  <div>
                    <p
                      style={{
                        width: "120px",
                        height: "120px",
                        backgroundImage: "url(/imgs/menu/steak/steak2.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "100px",
                        borderColor: "rgb(30,30,30)",
                        borderWidth: "8px",
                      }}
                    />
                  </div>
                  <div
                    className="grid content-center ml-5"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="flex justify-between"
                      style={{ width: "100%" }}
                    >
                      <p className="text-white">Herb Ribye Steak</p>
                      <p className="text-gray-400">
                        -------------------------------
                      </p>
                      <p className="text-yellow-600">52,000</p>
                    </div>
                    <div className="text-sm text-gray-400">
                      <p className="mt-2">쇠고기(등심 200g) : 호주산</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 ">
                <div className="flex">
                  <div>
                    <p
                      style={{
                        width: "120px",
                        height: "120px",
                        backgroundImage: "url(/imgs/menu/steak/steak2.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "100px",
                        borderColor: "rgb(30,30,30)",
                        borderWidth: "8px",
                      }}
                    />
                  </div>
                  <div
                    className="grid content-center ml-5"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="flex justify-between"
                      style={{ width: "100%" }}
                    >
                      <p className="text-white">Garlic Steak</p>
                      <p className="text-gray-400">
                        --------------------------------------
                      </p>
                      <p className="text-yellow-600">50,600</p>
                    </div>
                    <div className="text-sm text-gray-400">
                      <p className="mt-2">쇠고기(등심 200g) : 호주산</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 ml-5" style={{ width: "50%" }}>
              <div className="grid">
                <div className="flex">
                  <div>
                    <p
                      style={{
                        width: "120px",
                        height: "120px",
                        backgroundImage: "url(/imgs/menu/steak/steak3.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "100px",
                        borderColor: "rgb(30,30,30)",
                        borderWidth: "8px",
                      }}
                    />
                  </div>
                  <div
                    className="grid content-center ml-5"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="flex justify-between"
                      style={{ width: "100%" }}
                    >
                      <p className="text-white">Garlic Hug Steak</p>
                      <p className="text-gray-400">
                        ---------------------------------
                      </p>
                      <p className="text-yellow-600">52,000</p>
                    </div>
                    <div className="text-sm text-gray-400">
                      <p className="mt-2">쇠고기(안심 150g) : 호주산</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex">
                    <div>
                      <p
                        style={{
                          width: "120px",
                          height: "120px",
                          backgroundImage: "url(/imgs/menu/steak/steak4.png)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderRadius: "100px",
                          borderColor: "rgb(30,30,30)",
                          borderWidth: "8px",
                        }}
                      />
                    </div>
                    <div
                      className="grid content-center ml-5"
                      style={{ width: "100%" }}
                    >
                      <div
                        className="flex justify-between"
                        style={{ width: "100%" }}
                      >
                        <p className="text-white">Tornado Striploin Steak</p>
                        <p className="text-gray-400">
                          ------------------------
                        </p>
                        <p className="text-yellow-600">48,500</p>
                      </div>
                      <div className="text-sm text-gray-400">
                        <p className="mt-2">쇠고기(채끝 등심 200g): 호주산</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {currentComponent}
        </div>
      </div>
    </div>
  );
}
