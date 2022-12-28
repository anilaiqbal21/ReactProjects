import React from "react";
import useFirestore from "../hooks/useFirestore";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { motion } from "framer-motion";
import { useState } from "react";
import PaginationGallery from "./paginationGallery";

const ImageGrid = ({ selectedimg, setSelectedimg }) => {
  const { docs } = useFirestore("images");
  console.log(docs, "heloooooo");
  const [currentPage, setCurrentPage] = useState(1);
  const [imgsPerPage] = useState(10);

  //get Current images
  const indexofLastImg = currentPage * imgsPerPage;
  const indexofFirstImg = indexofLastImg - imgsPerPage;
  const currentImgs = docs.slice(indexofFirstImg, indexofLastImg);
  console.log(currentImgs, "hbshdfhjdfb");

  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };
  return (
    <>
      <div className="container maindiv">
        <Masonry columns={{ lg: 4, xs: 1, sm: 2, md: 3 }} spacing={1}>
          {docs &&
            currentImgs.map((doc) => {
              return (
                <motion.div
                  layout
                  className=" grid-image "
                  key={doc.id}
                  onClick={() => setSelectedimg(doc.url)}
                >
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="image"
                    src={doc.url}
                    alt="uplode your photo"
                  />
                </motion.div>
              );
            })}
        </Masonry>
      </div>
      <PaginationGallery
        imgsPerPage={imgsPerPage}
        totalImgs={docs.length}
        paginate={paginate}
      />
    </>
  );
};
export default ImageGrid;
