export default function Hero() {
  return (
    <div>
      <div
        className="grid items-center h-screen bg-fixed"
        style={{
          backgroundImage: "url(/imgs/hero2.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgb(200,200,200)",
          backgroundBlendMode: "multiply",
        }}
        id="hero"
      >
        <div className="grid -mt-44">
          <div
            className="flex"
            style={{ width: "1100px", margin: "auto" }}
            id="heroDiv"
          >
            <p
              className="text-5xl font-bold text-center text-white"
              id="heroDivText"
            >
              Welcome to
            </p>
            <p
              className="ml-2 text-5xl font-bold text-orange-200"
              id="heroDivText"
            >
              Moonstaurant
            </p>
          </div>
          <div style={{ width: "1100px", margin: "auto" }} id="heroDiv2">
            <p className="text-2xl font-bold text-white " id="heroDivText2">
              Come and enjoy delicious foods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
