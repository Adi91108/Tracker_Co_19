import "./totalCases.css";

const TotalCases = ({ titleStyle, titleValue, casesStyle, casesValue, imageName }) => {
  return (
    <>
      <div className="tarjetaContent">
        <div className=" container totalCases">
          <span className={ titleStyle }>{ titleValue }</span><br/><hr></hr>
          <span className={ casesStyle }> {casesValue} </span>
          {/* <img src={`../src/assets/img/${ imageName }`} className="backgroundImg" /> */}
        </div>
      </div>
    </>
  );
};
export default TotalCases;
