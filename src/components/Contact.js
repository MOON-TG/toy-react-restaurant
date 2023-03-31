/*global kakao */
import React, { useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function Contact() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(36.3762966509867, 127.38132873591407),
      level: 3,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      36.3762966509867,
      127.38132873591407
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return (
    <div
      className=""
      style={{ width: "100%", backgroundColor: "black", zIndex: "1" }}
      id="contect"
    >
      <div
        className=""
        style={{
          width: "1100px",
          margin: "auto",
          height: "800px",
        }}
        id="contactDiv"
      >
        <div className="py-10">
          <div className="">
            <p className="font-extrabold text-gray-400">CONTACTㅤ───────────</p>
            <p
              className="text-3xl font-extrabold"
              style={{ color: "rgb(201,186,88)" }}
            >
              Contact Us
            </p>
          </div>
          <div className="mt-10">
            <div
              className="rounded-md"
              id="map"
              style={{ width: "1100px", height: "500px", zIndex: "1" }}
            ></div>

            <div className="flex mt-5" id="contactIconDiv">
              <div className="flex" id="contactIconDivChild">
                <div
                  className="flex items-center justify-center bg-orange-400 rounded-full"
                  id="contactIcon"
                  style={{ width: "50px", height: "50px" }}
                >
                  <MdLocationOn className="text-2xl text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-white text-md"> Location </p>
                  <p className="text-sm text-gray-400">
                    대전 유성구 엑스포로 1 신세계 Art&Science 5층
                  </p>
                </div>
              </div>
              <div className="flex ml-10" id="contactIconDivChild">
                <div
                  className="flex items-center justify-center bg-orange-400 rounded-full"
                  id="contactIcon"
                  style={{ width: "50px", height: "50px" }}
                >
                  <BsFillTelephoneFill className="text-lg text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-white text-md">Call</p>
                  <div className="flex">
                    <p className="text-sm text-gray-400">042-011-1234</p>
                    <p className="mx-3 text-sm text-gray-400">|</p>
                    <p className="text-sm text-gray-400">010-0000-1234</p>
                  </div>
                </div>
              </div>
              <div className="flex ml-10" id="contactIconDivChild">
                <div
                  className="flex items-center justify-center bg-orange-400 rounded-full"
                  id="contactIcon"
                  style={{ width: "50px", height: "50px" }}
                >
                  <AiOutlineClockCircle className="text-2xl text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-white text-md">Open Hours</p>
                  <div className="flex">
                    <p className="text-sm text-gray-400">
                      Monday-Saturday 11:00 AM - 23:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
