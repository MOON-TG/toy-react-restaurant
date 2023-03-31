import Fade from "react-reveal/Fade";

export default function Wine() {
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
                    backgroundImage: "url(/imgs/menu/wine/wine1.png)",
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
                    Sendero Cabernet Sauvignon
                  </p>
                  <p className="text-gray-400" id="menuLine">
                    -----------------
                  </p>
                  <p className="text-yellow-600">38,000</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="mt-2" id="menuText">
                    Chile / Maipo Valley
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
                    backgroundImage: "url(/imgs/menu/wine/wine2.png)",
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
                    Trapiche Oak Cask Malbec
                  </p>
                  <p className="text-gray-400" id="menuLine">
                    ----------------------
                  </p>
                  <p className="text-yellow-600">42,000</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="mt-2" id="menuText">
                    Argentina / Mendoza
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
                    backgroundImage: "url(/imgs/menu/wine/wine3.png)",
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
                    Real Compania de Vinos, Blanco
                  </p>
                  <p className="text-gray-400" id="menuLine">
                    -------------
                  </p>
                  <p className="text-yellow-600">37,000</p>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="mt-2" id="menuText">
                    Spain / Rioja
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
                      backgroundImage: "url(/imgs/menu/wine/wine4.png)",
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
                      Santa Digna Reserva Chardonnay
                    </p>
                    <p className="text-gray-400" id="menuLine">
                      ------------
                    </p>
                    <p className="text-yellow-600">45,000</p>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p className="mt-2" id="menuText">
                      Chile / Curico Valley
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
