import "./Loading.scss";

export default function Loading() {
  return (
    <div className="Loading-container">
      <div className="pencil">
        <div className="pencil-ball-point"></div>
        <div className="pencil-cap"></div>
        <div className="pencil-cap-base"></div>
        <div className="pencil-middle"></div>
        <div className="pencil-eraser"></div>
      </div>
      <div className="line"></div>
      <h2 className="Loading-title">Page Loading...Please Wait</h2>
    </div>
  );
}
