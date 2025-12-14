import React from "react";

import { Link} from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-block1">
          <div className="heading">
            <h3>
              <span className="Titre1">#YouBio</span>
              <span
                className="Titre2 text-white"
              >
                cosmetique
              </span>
            </h3>
          </div>
          <div className="content">
            <div className="services">
              <h4 className="service--titre">NOS PRODUITS</h4>
              <p className="font-weight-bold">
                <a href="#">Soins de la peau</a>
              </p>
              <p className="font-weight-bold">
                <a href="#">Soins Visage</a>
              </p>
              <p className="font-weight-bold">
                <a href="#">Soins Corps</a>
              </p>
              <p className="font-weight-bold">
                <a href="#">Soins Mains</a>
              </p>
            </div>
            <div className="social-media">
              <h4 className="service--titre">Social media</h4>

              <p className="font-weight-bold">
                <a target="_blank" href="https://www.facebook.com">
                  <i className="fab fa-facebook"></i>facebook
                </a>
              </p>
              <p className="font-weight-bold">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/sanket-bodke-995b5b205/"
                >
                  <i className="fab fa-linkedin"></i> Linkedin
                </a>
              </p>
              <p className="font-weight-bold">
                <a target="_blank" href="https://twitter.com/Sanket46171296">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </p>

              <p className="font-weight-bold">
                <a
                  target="_blank"
                  href="https://www.instagram.com/imsanketbodke/?hl=en"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </p>
            </div>
            <div className="links">
              <h4 className="service--titre">Quick links</h4>

              <Link to="/">
                <p className="font-weight-bold">
                  <a>Home</a>
                </p>
              </Link>
              <Link to="/shop">
                <p className="font-weight-bold">
                  <a>shop</a>
                </p>
              </Link>
              <Link to="/service">
                <p className="font-weight-bold">
                  <a>Service</a>
                </p>
              </Link>
              <Link to="/contact">
                <p className="font-weight-bold">
                  <a>Contact us</a>
                </p>
              </Link>
              <Link to="/signup">
                <p className="font-weight-bold">
                  <a>inscription</a>
                </p>
              </Link>
              <Link to="/signin">
                <p className="font-weight-bold">
                  <a>Connextion</a>
                </p>
              </Link>
            </div>
            <div className="details">
              <h4 className="address service--titre">Address</h4>
              <p className="font-weight-bold">
                Quartier Smara Rue 36 N° 50 <br />
                Youssoufia 46300
              </p>
              <h4 className="mobile service--titre">Mobile</h4>
              <p className="font-weight-bold">
                <a href="#">+212690456212</a>
              </p>
              <h4 className="mail service--titre">Email</h4>
              <p className="font-weight-bold">
                <a href="#">khaliid.saaf@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <footer className="footer-block2 ">
          <hr />
          <p className="titre-footer">
            {" "}
            &copy; 2021 YouBiocosmétique Technologies{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}
