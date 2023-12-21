import "./style/style.scss";
import QrImage from "./images/image-qr-code.png";
const QrCode = () => {
  return (
    <div className="qr-code">
      <div className="qr-code-container">
        <img src={QrImage} alt="Qr Code Image" />
        <div className="qr-code-detail">
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
