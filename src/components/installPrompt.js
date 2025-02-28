import React, { useEffect, useState } from "react";

const InstallPrompt = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    const isAndroidDevice = /android/.test(userAgent);
    const isDesktop = /win|mac/.test(userAgent);

    setIsIOS(isIOSDevice);
    setIsStandalone(window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches);

    // Capture the PWA install prompt event (for Android, Windows, Mac)
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Show the prompt for Android, Windows, and Mac users
    if (!isIOSDevice && (isAndroidDevice || isDesktop)) {
      setShowPrompt(true);
    }

    // Cleanup event listener
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const installPWA = () => {
    console.log("Hit 1");
    if (deferredPrompt) {
    console.log("Hit 2");

      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User installed the PWA");
        } else {
          console.log("User dismissed the PWA install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  if (!showPrompt || isStandalone) return null;

  return (
    <div style={messageStyle}>
      {isIOS ? (
        <p>To install this app, tap <strong>Share</strong> and select <strong>Add to Home Screen</strong>.</p>
      ) : (
        <button onClick={installPWA} style={installButtonStyle}>Install App</button>
      )}
      <button onClick={() => setShowPrompt(false)} style={closeButtonStyle}>×</button>
    </div>
  );
};

const messageStyle = {
  position: "fixed",
  bottom: "20px",
  left: "10%",
  width: "80%",
  padding: "10px",
  background: "#007bff",
  color: "white",
  textAlign: "center",
  borderRadius: "5px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const installButtonStyle = {
  background: "white",
  color: "#007bff",
  border: "none",
  padding: "8px 12px",
  cursor: "pointer",
  fontSize: "16px",
  borderRadius: "4px",
};

const closeButtonStyle = {
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "20px",
  cursor: "pointer",
  marginLeft: "10px",
};

export default InstallPrompt;