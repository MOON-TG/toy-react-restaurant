export default function Footer() {
  return (
    <div>
      <div
        className="flex items-center justify-center w-screen h-28"
        style={{
          borderTop: "1px solid rgba(158, 54, 42, .4)",
          backgroundColor: "rgb(34,13,13)",
        }}
      >
        <div>
          <div className="flex mb-2 ">
            <p className="text-xs text-gray-400">© Copyright</p>
            <p className="ml-2 text-xs text-white"> MOON TAE GYU. </p>
            <p className="ml-2 text-xs text-gray-400">All Rights Reserved</p>
          </div>
          <p className="text-xs text-center text-gray-400">takeyou@kakao.com</p>
        </div>
      </div>
    </div>
  );
}
