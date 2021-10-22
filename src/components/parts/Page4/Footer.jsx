import React from "react";
import instragram from "../../../imgs/instragram.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <hr style={{ color: "white", fontWeight: "700", marginTop: "5%" }} />

          <div className="footerDetail">
            <div className="company">
              <h4>Company</h4>
              <ul className="noStyle">
                <li>
                  <p>Terms and Conditions</p>
                </li>
                <li>
                  <p>Privacy Policy</p>
                </li>
                <li>
                  <p>FDA Disclaimer</p>
                </li>
              </ul>
            </div>
            <div className="support">
              <h4>Support</h4>
              <ul className="noStyle">
                <li>
                  <p>Cancel and refunds</p>
                </li>
              </ul>
            </div>
            <div className="social">
              <h4>Social</h4>
              <div class="socialImg">
                <div className="fb">
                  <img
                    src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                    alt="FB"
                  />
                  <p>
                    <a href="https://www.facebook.com/" target="blank">
                      Facebook
                    </a>
                  </p>
                </div>
                <div className="ig">
                  <img src={instragram} alt="IG" />
                  <p>
                    <a href="https://www.instagram.com/" target="blank">
                      Instragram
                    </a>
                  </p>
                </div>
                <div className="tw">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                    alt="TW"
                  />
                  <p>
                    <a href="https://twitter.com/" target="blank">
                      Twitter
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
