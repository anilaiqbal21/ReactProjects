import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  projectStorage,
  projectfirestore,
  timeStamp,
} from "../firebase/config";

const useStorage = (file) => {
  console.log("file===>", file);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    file.map((image) => {
      const storageRef = projectStorage.ref(`${image.name}`);
      const collectionref = projectfirestore.collection("images");
      storageRef.put(image).on(
        "state_onChange",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          const createdAt = timeStamp();
          collectionref.add({ url, createdAt });
          setUrl(url);
        }
      );
    });
  }, [file]);
  return { progress, error, url };
};
export default useStorage;
