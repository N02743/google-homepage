import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import 'bootstrap/dist/css/bootstrap.css';

function DownNavBar() {
  return (
    <>
      <div id="footer">
        <div className="footer-left">
          <a href="https://about.google/?utm_source=google-TH&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
          <a href="https://www.google.co.th/intl/en_th/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
          <a href="https://www.google.co.th/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">Business</a>
          <a href="https://google.com/search/howsearchworks/?fg=1">How Search works</a>
        </div>

        <div className="footer-right">
          <a href="https://policies.google.com/privacy?hl=en-TH&fg=1">Privacy</a>
          <a href="https://policies.google.com/terms?hl=en-TH&fg=1">Terms</a>
          <a>Settings</a>
        </div>
      </div>
    </>
  );
}

export default DownNavBar;
