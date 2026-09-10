import cv from "../../assets/docs/cv--.pdf";
const DownloadCv = () => {
  return (
    <a href={cv} download="CV-Badrane">
      download resume
    </a>
  );
};

export default DownloadCv;
