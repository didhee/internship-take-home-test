import metaDataList from "./../constants/constant";
import ReadMore from "./ReadMore";
// import iPhone from "../assets/images/img1.jpeg"

export default function ViewItems() {
  return (
    <>
        <h1>A Simple Display of Items</h1>
        
        {metaDataList.map((item) => (
           <div className="grid">
              <img src={item.picture} alt={item.name} />
              <h3>{item.name}</h3>
              <ReadMore text={item.description} />
           </div>
        ))}
    </>
  );
}

// What I did was to break this into different components, as react is a component based library to ensure reusability. I broke the "read more" feature into another componrnt.
// I also put all the data or constants I am to use into a js file so as my code base won't be clogged and for easy usability and reading
