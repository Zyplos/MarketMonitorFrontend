import { useEffect } from "react";

function AndroidRedirect() {
  useEffect(() => {
    window.location.href = "https://play.google.com/store/apps/details?id=com.marketmonitor.marketmonitormobile";
  }, []);

  return <div>Redirecting...</div>;
}

export default AndroidRedirect;
