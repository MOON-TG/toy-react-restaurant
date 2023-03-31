import Fade from "react-reveal/Fade";

export default function Pasta() {
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
                    backgroundImage: "url(/imgs/menu/pasta/pasta1.png)",
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
                    Garlicpeno Pasta
                  </p>
                  <p className="text-gray-400" id="menuLine">
                    -------------------------------
                  </p>
                  <p className="text-yellow-600">24,900</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="mt-2" id="menuText">
                    다랑어: 필리핀산
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
                    backgroundImage: "url(/imgs/menu/pasta/pasta2.png)",
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
                    Triple Garlic Pasta
                  </p>
                  <p className="text-gray-400" id="menuLine">
                    -------------------------------
                  </p>
                  <p className="text-yellow-600">25,200</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="mt-2" id="menuText">
                    주꾸미 : 베트남산
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
                    backgroundImage: "url(/imgs/menu/pasta/pasta3.png)",
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
                    Myeongran Oil Pasta
                  </p>
                  <p className="text-gray-400" id="menuLine">
                    ----------------------------
                  </p>
                  <p className="text-yellow-600">26,800</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="mt-2" id="menuText">
                    명란 : 러시아산
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
                      backgroundImage: "url(/imgs/menu/pasta/pasta4.png)",
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
                    style={{ width: "100%" }}
                  >
                    <p className="text-white" id="menuText">
                      Fresh Ocean Soup Pasta
                    </p>
                    <p className="text-gray-400" id="menuLine">
                      ------------------------
                    </p>
                    <p className="text-yellow-600">26,800</p>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p className="mt-2" id="menuText">
                      다랑어 : 필리핀산
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
