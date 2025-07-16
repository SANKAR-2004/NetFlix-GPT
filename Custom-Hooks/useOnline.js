import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setisOnline] = useState(true);
    
  useEffect(() => {
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
    
  function handleOffline() {
    setisOnline(false);
  }
  return isOnline;
};

export default useOnline;
