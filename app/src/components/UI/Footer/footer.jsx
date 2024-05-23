import React from "react";
import styles from "./ui/footer.module.css";
import user from "./assets/user.png";
import truck from "./assets/truck.png";
import timeless from "./assets/timelessshopping.png";
import getback from "./assets/return.png";
import insta from "./assets/insta.png";
function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.footer_advantages}>
          <div className={styles.user}>
            <img className="user__img" src={user} alt="" />
            <div className="user__info">
              <div className="title">Online Support</div>
              <div className="extra">Dedicated Support Team</div>
            </div>
          </div>
          <div className={styles.shipping}>
            <img className="user__img" src={truck} alt="" />
            <div className="user__info">
              <div className="title">Free Shiping</div>
              <div className="extra">Purchases Over $50</div>
            </div>
          </div>
          <div className={styles.shopping}>
            <img className="user__img" src={timeless} alt="" />
            <div className="user__info">
              <div className="title">Timeless Shopping</div>
              <div className="extra">24/7 Purchasing</div>
            </div>
          </div>
          <div className={styles.return}>
            <img className="user__img" src={getback} alt="" />
            <div className="user__info">
              <div className="title">Product Returns</div>
              <div className="extra">No-Questions-Asked Returns</div>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.footer_content}>
          <div className={styles.footer_first_line}>
            <div className={styles.footer_title}>Stay Connected</div>
            <div className={styles.footer_address}>
              Address: Pavlodar, Lermontova 93
              <div className={styles.phone}>Phone: (+7) 705 777 77 77</div>
            </div>
            <div className={styles.social}>
              Follow us on social media
              <img className={styles.insta} src={insta} alt="" />
            </div>
          </div>
          <div className={styles.footer_second_line}>
            <div className={styles.footer_title}>KIT3D</div>
            <div className={styles.footer_info}>
              <a href="">About Us</a>
              <a href="">Careers</a>
              <a href="">Collaboration</a>
              <a href="">Dashboard</a>
              <a href="">Policies</a>
            </div>
          </div>

          <div className={styles.footer_third_line}>
            <div className={styles.footer_title}>Quick Access</div>
            <div className={styles.footer_info}>
              <a href="">Contact Us</a>
              <a href="">Blog</a>
              <a href="">Returns and refunds</a>
              <a href="">FAQ</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>© All Rights Reserved for KIT3D - 2024</div>
    </div>
  );
}

export default Footer;
