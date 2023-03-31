import Fade from "react-reveal/Fade";

export default function Special4() {
  return (
    <div
      className="flex justify-between"
      style={{ width: "100%" }}
      id="special1"
    >
      <Fade>
        <div className="" style={{ width: "37%" }} id="specialsChild">
          <p className="text-3xl text-white">GOLDEN BASIL BURRATA PIZZA</p>
          <p className="mt-2 text-sm text-gray-400">27,900</p>
          <p className="mt-5 text-sm text-orange-400 bg-black bg-opacity-60">
            다테리노 품종의 프리미엄 골든 토마토 소스 위에 부라타 치즈, 모타델라
            햄, 프레시 바질을 함께 즐기는 골든 바질 부라타 피자
          </p>
        </div>
      </Fade>
      <Fade>
        <div
          className="float-right rounded-lg"
          style={{
            width: "500px",
            height: "500px",
            backgroundImage: "url(/imgs/specials/specials4.png)",
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
