import React, { useState } from "react";
import "./gallery.css";
import { AiOutlineClose } from "react-icons/ai";

let data = [
  { id: 1, imgSrc: "/imgs/gallery/gallery1.png" },
  { id: 2, imgSrc: "/imgs/gallery/gallery2.png" },
  { id: 3, imgSrc: "/imgs/gallery/gallery3.png" },
  { id: 4, imgSrc: "/imgs/gallery/gallery7.png" },
  { id: 5, imgSrc: "/imgs/gallery/gallery4.png" },
  { id: 6, imgSrc: "/imgs/gallery/gallery6.png" },
];
export default function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <div className="" style={{ backgroundColor: "rgb(0,0,0)", height: "100%" }}>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <AiOutlineClose onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className=" pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
