import React, { useState, useEffect } from 'react';

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    // Check if the user is on an iOS device
    const isIosDevice = () => {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    };

    if (isIosDevice()) {
      setIsIos(true);
      setIsInstallable(true); // Show the button for iOS devices
    } else {
      const handleBeforeInstallPrompt = (event) => {
        event.preventDefault();
        setDeferredPrompt(event);
        setIsInstallable(true);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }
  }, []);

  const handleInstallClick = () => {
    if (isIos) {
      // Show instructions for iOS users
      alert('To install this app, tap the share icon and select "Add to Home Screen".');
    } else if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setIsInstallable(false);
      });
    }
  };

  if (!isInstallable) {
    return null;
  }

  return (
    <button onClick={handleInstallClick} style={styles.button}>
      {isIos ? 'Install App' : 'Install App'}
    </button>
  );
};

const styles = {
  button: {
    border: "0.5px solid #f5f5f5b4",
    borderRadius: '6px',
    boxShadow: "2px 2px 3px #f5f5f5b4",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: "#000",
    color: '#fff',
    padding: '5px 10px',
    margin: '5px 10px'
  },
};

export default InstallButton;