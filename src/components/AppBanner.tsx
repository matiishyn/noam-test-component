import Image from 'next/image';
import React from 'react';
import styles from './AppBanner.module.scss';

const AppBanner: React.FC = () => {
  return (
    <div className={styles.appBanner}>
      <div className={styles.appBannerLeft}>
        <Image
          src="/images/qr.png"
          alt="QR Code"
          width={110}
          height={110}
          className={styles.appBannerQr}
          priority
        />
        <div className={styles.appBannerStoreButtons}>
          <Image
            src="/images/appstore.svg"
            alt="Download on App Store"
            width={160}
            height={48}
            className={styles.storeButton}
          />
          <Image
            src="/images/googleplay.svg"
            alt="Get it on Google Play"
            width={160}
            height={48}
            className={styles.storeButton}
          />
        </div>
      </div>

      <div className={styles.appBannerCenter}>
        <Image
          src="/images/phone.png"
          alt="Phone with App"
          width={240}
          height={340}
          className={styles.appBannerPhone}
          priority
        />
        <Image
          src="/images/rlive.png"
          alt="RLive Logo"
          width={70}
          height={70}
          className={styles.appBannerRlogo}
        />
      </div>

      <div className={styles.appBannerRight}>
        <h2 className={styles.appBannerTitle}>Continue listening through the app</h2>
        <p className={styles.appBannerText}>
          <strong>Station Name</strong> broadcasts are available on our mobile app.
          Listening to the live broadcast provides an immediate solution anywhere and in any situation.
        </p>
        <a href="#" className={styles.appBannerMore}>&#x276E; More information</a>
      </div>
    </div>
  );
};

export default AppBanner; 