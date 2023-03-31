import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div
      id="about"
      className="bg-fixed "
      style={{
        width: "100%",
        backgroundImage: "url(/imgs/aboutBg.jpeg)",
        backgroundSize: "cover",
        backgroundColor: "rgb(50,50,50)",
        backgroundBlendMode: "multiply",
      }}
    >
      <Fade>
        <div
          className="flex"
          style={{
            width: "1100px",
            margin: "auto",
            height: "700px",
          }}
          id="aboutDiv"
        >
          <div
            className="mt-20 mr-3 text-white"
            style={{ width: "550px" }}
            id="aboutText"
          >
            <p className="text-2xl font-bold">COOKING ON SPOT</p>
            <p className="mt-2 text-sm">
              문스토랑은 모든 음식을 매장의 키친에서 신선한 식재료로 전문 쉐프가
              직접 조리합니다.
            </p>
            <p className="mt-12 text-2xl font-bold">WINE</p>
            <p className="mt-2 text-sm">
              'Creative Way'로 개발된 창작메뉴와 독자적인 프라이빗 브랜드 와인
              페어링은 '오직 문스토랑'
            </p>

            <p className="text-sm">에서만 누릴 수 있는 특별한 가치입니다.</p>
            <p className="text-sm">
              문스토랑의 프라이빗 브랜드 와인은 와인라벨의 독창적인 디자인
              아트웍과 함께 이탈리아, 프랑스, 스페인 등 유서깊은 정통 유럽
              와이너리에서 생산된 와인만을 엄선합니다.
            </p>
          </div>
          <div
            className="mt-20"
            style={{
              backgroundImage: "url(/imgs/about.jpeg)",
              width: "500px",
              height: "500px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderWidth: "5px",
              borderColor: "rgb(40,40,40)",
            }}
            id="aboutImg"
          ></div>
        </div>
      </Fade>
    </div>
  );
}
