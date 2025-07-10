import { AppData } from '@/lib/data';
import { darkenColor } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import './styles.scss';

const AppBanner: React.FC<{ app: AppData }> = ({ app }) => {
  const appColor = app.color || '#4F46E5';
  return (
    <div className="app-banner">
      <div className="app-banner__left">
        <Image
          src="/images/qr.png"
          alt="QR Code"
          width={110}
          height={110}
          className="app-banner__qr"
          priority
        />
        <div className="app-banner__store-buttons">
          <Image
            src="/images/appstore.svg"
            alt="Download on App Store"
            width={160}
            height={48}
          />
          <Image
            src="/images/googleplay.svg"
            alt="Get it on Google Play"
            width={160}
            height={48}
          />
        </div>
      </div>

      <div className="app-banner__center">
        <Image
          src="/images/phone.png"
          alt="Phone with App"
          width={240}
          height={340}
          className="app-banner__phone"
          priority
        />
        <div className="app-banner__phone-title">{app.title}</div>
        <Image
          src={app.logo}
          alt={`${app.title} Logo`}
          width={114}
          height={114}
          className="app-banner__phone-logo"
        />

        <div className="app-banner__gradient-box" style={{ background: `linear-gradient(135deg, ${appColor} 0%, ${darkenColor(appColor, 10)} 100%)` }}>
          <Image
            src="/images/rlive.png"
            alt="RLive Logo"
            width={53}
            height={53}
          />
        </div>
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
