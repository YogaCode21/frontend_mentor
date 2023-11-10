import image from "../assets/image-qr-code.png";
export default function Card(){
    return(
        <div className="card">
            <div className="card-top">
                <img src={image} alt="card-img" />
            </div>
            <div className="card-bottom">
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}
