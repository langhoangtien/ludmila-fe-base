/* eslint-disable @next/next/no-img-element */
import "@/app/globals.css";
import Image from "next/image";
import Search from "../search";

export default function Header() {
  return (
    <>
      <nav>
        <div className="wrapper">
          <label htmlFor="menu-btn" className="btn-icon menu-btn">
            <b className="fa-regular fa-bars"></b>
          </label>
          <div className="logo">
            <a href="#">
              <img
                src="https://logo.kiotviet.vn/KiotViet-Logo-Horizontal.svg"
                alt="Phần mềm quản lý bán hàng KiotViet"
              />
            </a>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <Search />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn-icon close-btn">
              <b className="btn-close"></b>
              {/* <Image
                width={21}
                height={21}
                src="/assets/icons/close.png"
              ></Image> */}
            </label>
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Về chúng tôi</a>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Dropdown Menu
              </a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                Dropdown Menu
              </label>
              <ul className="drop-menu">
                <li>
                  <a href="#">Drop menu 1</a>
                </li>
                <li>
                  <a href="#">Drop menu 2</a>
                </li>
                <li>
                  <a href="#">Drop menu 3</a>
                </li>
                <li>
                  <a href="#">Drop menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Mega Menu
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Mega Menu
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Vectors</a>
                      </li>
                      <li>
                        <a href="#">Business cards</a>
                      </li>
                      <li>
                        <a href="#">Custom logo</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Email Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Personal Email</a>
                      </li>
                      <li>
                        <a href="#">Business Email</a>
                      </li>
                      <li>
                        <a href="#">Mobile Email</a>
                      </li>
                      <li>
                        <a href="#">Web Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Site Seal</a>
                      </li>
                      <li>
                        <a href="#">VPS Hosting</a>
                      </li>
                      <li>
                        <a href="#">Privacy Seal</a>
                      </li>
                      <li>
                        <a href="#">Website design</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* <li>
              <a href="#">Feedback</a>
            </li> */}
          </ul>

          <div>
            {" "}
            <div className="cart">
              <span className="badge">2</span>
              <Image
                width={28}
                height={28}
                src="/assets/icons/basket-shopping-simple.svg"
              />
            </div>
            <span className="cart-text">Giỏ hàng</span>
          </div>
        </div>
      </nav>
    </>
  );
}
