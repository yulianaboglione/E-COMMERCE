import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="copyright">
          <span>©2022 Yuliana Boglione. All Rights Reserved </span>
          <span>Powered by React, Router and Redux.</span>
        </div>
        <div class="social-networks">
          <a
            style={{ color: "white" }}
            href="https://www.instagram.com/boglioneyuliana/"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            style={{ color: "white" }}
            href="https://www.linkedin.com/in/yuliana-boglione-461424151/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            style={{ color: "white" }}
            href="https://github.com/yulianaboglione"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
