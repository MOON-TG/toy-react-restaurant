import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";

export default function scrollButton() {
  return (
    <div style={{ zIndex: "3" }}>
      <div
        className="fixed duration-300 scrollB"
        style={{ top: "30%", right: "3%", zIndex: "3" }}
      >
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full hover:cursor-pointer"
          style={{ backgroundColor: "rgb(50,50,50, 0.6)" }}
        >
          <AiFillPhone className="w-6 h-6 text-center text-green-200" />
        </div>
        <div
          className="flex items-center justify-center w-12 h-12 mt-3 rounded-full hover:cursor-pointer"
          style={{ backgroundColor: "rgb(50,50,50, 0.6)" }}
        >
          <RiKakaoTalkFill className="text-center text-yellow-300 w-7 h-7" />
        </div>
        <div
          className="flex items-center justify-center w-12 h-12 mt-3 rounded-full hover:cursor-pointer"
          style={{ backgroundColor: "rgb(50,50,50, 0.6)" }}
        >
          <SiNaver className="w-4 h-4 text-center text-green-400" />
        </div>
      </div>
    </div>
  );
}

window.addEventListener("scroll", () => {
  const scrollB = document.querySelector(".scrollB");
  if (window.scrollY > 100) {
    // scrollB.style.visibility = "visible";
    scrollB.style.opacity = "1";
    scrollB.style.marginRight = "0";
  } else {
    // scrollB.style.visibility = "hidden";
    scrollB.style.opacity = "0";
    scrollB.style.marginRight = "-100px";
  }
});
