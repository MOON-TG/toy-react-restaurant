import Fade from "react-reveal/Fade";

export default function Steak() {
  return (
    <div className="flex" id="menuDivChild">
      <Fade right>
        <div className="grid mr-5" style={{ width: "50%" }} id="menuDivChild1">
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
                  id="menuIcon"
                />
              </div>
              <div
                className="grid content-center ml-5 "
                style={{ width: "100%" }}
              >
                <div className="flex justify-between" style={{ width: "100%" }}>
                  <p className="text-white " id="menuText">
                    Herb Ribye Steak
                  </p>
                  <p className="text-gray-400" id="menuLine">
                    -------------------------------
                  </p>
                  <p className="text-yellow-600">52,000</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="mt-2" id="menuText">
                    쇠고기(등심 200g) : 호주산
                  </p>
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
                  id="menuIcon"
                />
              </div>
              <div
                className="grid content-center ml-5"
                style={{ width: "100%" }}
              >
                <div className="flex justify-between" style={{ width: "100%" }}>
                  <p className="text-white" id="menuText">
                    Garlic Steak
                  </p>
                  <p className="text-gray-400" id="menuLine">
                    --------------------------------------
                  </p>
                  <p className="text-yellow-600">50,600</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="mt-2" id="menuText">
                    쇠고기(등심 200g) : 호주산
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 ml-5" style={{ width: "50%" }} id="menuDivChild2">
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
                  id="menuIcon"
                />
              </div>
              <div
                className="grid content-center ml-5"
                style={{ width: "100%" }}
              >
                <div className="flex justify-between" style={{ width: "100%" }}>
                  <p className="text-white" id="menuText">
                    Garlic Hug Steak
                  </p>
                  <p className="text-gray-400" id="menuLine">
                    ---------------------------------
                  </p>
                  <p className="text-yellow-600">52,000</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="mt-2" id="menuText">
                    쇠고기(안심 150g) : 호주산
                  </p>
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
                    id="menuIcon"
                  />
                </div>
                <div
                  className="grid content-center ml-5"
                  style={{ width: "100%" }}
                >
                  <div
                    className="flex justify-between"
                    id="munuInfo"
                    style={{ width: "100%" }}
                  >
                    <p className="text-white" id="menuText">
                      Tornado Striploin Steak
                    </p>
                    <p className="text-gray-400" id="menuLine">
                      ------------------------
                    </p>
                    <p className="text-yellow-600">48,500</p>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p className="mt-2" id="menuText">
                      쇠고기(채끝 등심 200g): 호주산
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
