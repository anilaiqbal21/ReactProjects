import React from "react";
import { useState } from "react";
import ProgressBar from "./progressBar";
import { BsPlusCircle } from "react-icons/bs";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    const selected = e.target.files;
    console.log(selected, "Image Selected");
    if (selected) {
      setFile([...selected]);
      setError(null);
    } else {
      setFile(null);
      setError("please select an valid image file");
    }
  };

  console.log(file, "File Array");

  return (
    <>
      <div className="progressbar">
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
      <div className=" main container">
        <div className="firstdiv">
          <div className="logo">
            <p>GalleryApp</p>
          </div>
          <div className="heading">
            <h1>Your Pictures</h1>
            <p>
              “Taking an image, freezing a moment, reveals how rich reality
              truly is”
            </p>
          </div>
        </div>
        <label>
          <BsPlusCircle />
          <input type="file" multiple onChange={handleChange} />
        </label>
        <div className="Output">
          {error && <div>please select an image file(png or jpeg)</div>}
        </div>
      </div>
    </>
  );
};
export default UploadFile;
