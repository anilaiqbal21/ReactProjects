import React from "react";
import useStorage from "../hooks/useStorage";
import { useEffect } from "react";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [setFile, url]);

  return (
    <>
      <div className="Progress" style={{ width: progress + "%" }}></div>
    </>
  );
};
export default ProgressBar;
