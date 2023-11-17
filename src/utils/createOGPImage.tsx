import fs from "fs";
import satori from "satori";

// ogp画像を動的に生成。
// Next.jsのデフォルトでサポートされているが、edgeランタイムで使用するとエラーになるため、satoriを使用。
const createOGPImage = async function (title: string, writerName: string) {
  const fontData = fs.readFileSync("public/ZenKakuGothicNew-Regular.ttf");

  return await satori(
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(90deg, #FFC121, #FF5E2C)",
        fontFamily: "Noto Sans JP",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          gap: "16px",
          backgroundColor: "#FFFCF2",
          color: "#484335",
          width: "90%",
          height: "85%",
          padding: "32px",
        }}
      >
        <div style={{ display: "flex", fontSize: "32px" }}>{title}</div>
        <div style={{ display: "flex", fontSize: "20px" }}>@{writerName}</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Zen Kaku Gothic New",
          data: fontData,
        },
      ],
    }
  );
};

export default createOGPImage;
