import Fade from "react-reveal/Fade";

export default function Special1() {
  return (
    <div
      className="flex justify-between"
      style={{ width: "100%" }}
      id="special1"
    >
      <Fade>
        <div className="" style={{ width: "37%" }} id="specialsChild">
          <p className="text-3xl text-white">TOMAHAWK STEAK</p>
          <p className="mt-2 text-sm text-gray-400">140,000</p>
          <p className="mt-5 text-sm text-orange-400 bg-black bg-opacity-60">
            오직 황제만이 즐길 수 있었던 블랙 앵거스의 단 1%의 부위 3cm 이상의
            두께에서 뿜어져 나오는 압도적인 크기와 풍미가 가득한 예술적 스테이크
          </p>
        </div>
      </Fade>
      <Fade>
        <div
          className="float-right rounded-lg"
          style={{
            width: "500px",
            height: "500px",
            backgroundImage: "url(/imgs/specials/specials1.png)",
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
