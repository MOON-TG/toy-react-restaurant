import Fade from "react-reveal/Fade";

export default function Special3() {
  return (
    <div
      className="flex justify-between"
      style={{ width: "100%" }}
      id="special1"
    >
      <Fade>
        <div className="" style={{ width: "37%" }} id="specialsChild">
          <p className="text-3xl text-white">GORGONZOLA PIZZA</p>
          <p className="mt-2 text-sm text-gray-400">26,300</p>
          <p className="mt-5 text-sm text-orange-400 bg-black bg-opacity-60">
            이태리 특유의 진한 고르곤졸라 치즈와 달콤한 꿀의 궁합이 환상인 피자
          </p>
        </div>
      </Fade>
      <Fade>
        <div
          className="float-right rounded-lg"
          style={{
            width: "500px",
            height: "500px",
            backgroundImage: "url(/imgs/specials/specials3.png)",
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
