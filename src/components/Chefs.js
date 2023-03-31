import "./chefs.css";

export default function Chefs() {
  return (
    <div id="chefs" style={{ backgroundColor: "rgb(34,13,13)" }}>
      <div
        className=""
        style={{
          width: "1100px",
          margin: "auto",
          height: "750px",
        }}
        id="chefsDiv"
      >
        <div className="py-10">
          <div className="">
            <p className="font-extrabold text-gray-400">CHEFSㅤ───────────</p>
            <p
              className="text-3xl font-extrabold"
              style={{ color: "rgb(201,186,88)" }}
            >
              Our Proffesional Chefs
            </p>
          </div>
          <div className="flex justify-between mt-10" id="chefsDivChildr">
            <div
              className="relative chef1"
              style={{
                width: "350px",
                height: "400px",
                backgroundImage: "url(/imgs/chefs/chef1.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              id="chefsImg"
            >
              <div className="absolute right-3 bottom-10 chefInfo1">
                <p className="text-sm italic text-orange-300">Head Chef</p>
                <p className="text-2xl text-white">김명식</p>
                <p className="text-sm text-white">Kim Myeong Sik</p>
                <p className="mt-3 text-white">前 LA 그랜드 워커힐 주방장</p>
                <p className="text-white">前 LA Proper 오너 쉐프</p>
                <p className="text-white">Chef School 교장</p>
              </div>
            </div>
            <div
              className="relative chef1"
              style={{
                width: "350px",
                height: "400px",
                backgroundImage: "url(/imgs/chefs/chef3.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              id="chefsImg"
            >
              <div className="absolute right-3 bottom-10 chefInfo1">
                <p className="text-sm italic text-orange-300">Director Chef</p>
                <p className="text-2xl text-white">박명수</p>
                <p className="text-sm text-white">Park Myeong Su</p>
                <p className="mt-3 text-white">前 유니버셜 호텔 주방장</p>
                <p className="text-white">前 Hilton Tokyo 주방장 </p>
                <p className="text-white">행복재단 사업본부 고문</p>
              </div>
            </div>
            <div
              className="relative chef1"
              style={{
                width: "350px",
                height: "400px",
                backgroundImage: "url(/imgs/chefs/chef2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              id="chefsImg"
            >
              <div className="absolute right-3 bottom-10 chefInfo1">
                <p className="text-sm italic text-orange-300">Chef</p>
                <p className="text-2xl text-white">박정민</p>
                <p className="text-sm text-white">Park Jeung Min</p>
                <p className="mt-3 text-white">
                  프랑스 루앙 INBP 프로과정 연수 수료
                </p>
                <p className="text-white">Siba 초콜릿 대형공예 동상</p>
                <p className="text-white">프랑스 파리 유명제과점 기술연수</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
