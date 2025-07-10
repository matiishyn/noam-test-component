import { AppData } from '@/lib/data';
import React from 'react';
import './styles.scss';

const AppBanner: React.FC<{ app: AppData }> = ({ app }) => {
  return (
    <div className="app-banner">
      <div className="app-banner__left">
        <img src="/images/qr.png" alt="QR Code" className="app-banner__qr" />
        <div className="app-banner__store-buttons">
          <img src="/images/appstore.svg" alt="Download on App Store" />
          <img src="/images/googleplay.svg" alt="Get it on Google Play" />
        </div>
      </div>

      <div className="app-banner__center">
        <img src="/images/phone.png" alt="Phone with App" className="app-banner__phone" />
        <img src="/images/rlive.png" alt="RLive Logo" className="app-banner__rlogo" />
      </div>

      <div className="app-banner__right">
        <h2 className="app-banner__title">Continue listening through the app</h2>
        <p className="app-banner__text">
          <strong>Station Name</strong> broadcasts are available on our mobile app.
          Listening to the live broadcast provides an immediate solution anywhere and in any situation.
        </p>
        <a href="#" className="app-banner__more">&#x276E; More information</a>
      </div>
    </div>
  );
};

export default AppBanner;
