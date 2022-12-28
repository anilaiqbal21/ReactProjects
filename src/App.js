import "./assets/style.css";
import ImageGrid from "./Components/imageGrid";
import { useState } from "react";
import ImageModal from "./Components/imageModal";
import UploadFile from "./Components/UploadFile";

function App() {
  const [selectedimg, setSelectedimg] = useState(null);
  return (
    <div className="container">
      <UploadFile />
      <ImageGrid selectedimg={selectedimg} setSelectedimg={setSelectedimg} />
      {selectedimg && (
        <ImageModal selectedimg={selectedimg} setSelectedimg={setSelectedimg} />
      )}
    </div>
  );
}

export default App;
