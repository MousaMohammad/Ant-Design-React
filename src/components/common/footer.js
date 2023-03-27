import React from 'react';

import { BackTop } from 'antd';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="/">MousaTech</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/mousa.abdelmaxod"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/AbdulmaxodMousa"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/mousa-abdelmaksoud/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.instagram.com/mousa_muhamad/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2023 Mousa</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;