import Fade from "react-reveal/Fade";

export default function Special2() {
  return (
    <div
      className="flex justify-between"
      style={{ width: "100%" }}
      id="special1"
    >
      <Fade>
        <div className="" style={{ width: "37%" }} id="specialsChild">
          <p className="text-3xl text-white">T-BONE STEAK</p>
          <p className="mt-2 text-sm text-gray-400">210,000</p>
          <p className="mt-5 text-sm text-orange-400 bg-black bg-opacity-60">
            부드러운 안심과 풍미가 진한 등심을 함께 즐길 수 있는 프리미엄
            스테이크
          </p>
        </div>
      </Fade>
      <Fade>
        <div
          className="float-right rounded-lg"
          style={{
            width: "500px",
            height: "500px",
            backgroundImage: "url(/imgs/specials/specials2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgb(220,220,220)",
            backgroundBlendMode: "multiply",
          }}
          id="specialsImg"
        ></div>
      </Fade>
    </div>
  );
}
