import "./header.css"
import logoImg from "../images/logo.png";

export default function Header() {
  return (
    <div className="header-container">
        <div className="logo-header">
            <img src={logoImg} alt="eshop-logo" className="logo-img"/>
        </div>
        <div className="site-name">
            <i style={{color:"red"}} class="bi bi-envelope-at"></i>
            <i style={{color:"green"}} class="bi bi-whatsapp"></i>
            <i style={{color:"#1877F2"}} class="bi bi-facebook"></i>
            <i style={{color:"#C13584"}} class="bi bi-instagram"></i>
            <i style={{color:"white"}} class="bi bi-tiktok"></i>
        </div>
        <div className="logo-login">
            <i style={{color:"#e55d42"}} class="bi bi-heart"></i>
            <i style={{color:"#e55d42"}} class="bi bi-basket3-fill"></i>
            <i style={{color:"#e55d42"}} class="bi bi-file-person"></i>
        </div>
    </div>
  );
}
