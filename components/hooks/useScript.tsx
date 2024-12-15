import { useEffect } from "react";

const useScript = (url, data?) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);
  }, [url, data]);
};

export default useScript;
