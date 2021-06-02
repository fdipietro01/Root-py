import "./Loader.css"

export const Loader = ({mensaje})=> {


return (
          <div className="loader"> 
            <div className="spinner"></div> 
            <h2 className="loading"> {mensaje}...</h2> 
          </div>
          )

}