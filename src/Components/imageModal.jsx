import React from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";

const ImageModal = ({ selectedimg, setSelectedimg }) => {
  const handleClick = () => {
    setSelectedimg(null);
  };
  return (
    <>
      <motion.div
        className="image-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="onCickClose">
          <RxCross1 onClick={handleClick} />
        </div>
        <motion.img
          src={selectedimg}
          alt="modalimg"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
        />
      </motion.div>
    </>
  );
};
export default ImageModal;
