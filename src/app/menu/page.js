/* eslint-disable @next/next/no-img-element */

export default function Navbar() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="industry-all-text">
          <div className="nav-item-image">
            <img
              alt="logo-nganh-retail"
              src="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/08074241/unnamed-3-2.png"
            />
          </div>
          <div className="industry-all-title">Bán buôn, bán lẻ</div>
        </div>
        <ul>
          <li>Khách hàng 1.1.1</li>
          <li>Khách hàng 1.1.2</li>
          <li>Khách hàng 1.1.3</li>
          <li>Khách hàng 1.1.4</li>
        </ul>
      </div>
    </div>
  );
}
