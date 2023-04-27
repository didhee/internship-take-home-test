import metaDataList from './../constants/constant';
import ReadMore from './ReadMore';



export default function ViewItems () {
   return (
      //I called the metadata and mapped through each item to return the name and the description. I also called the Read More component here too.
      metaDataList.map(item => (
         <div className="grid">
            {/* <img src={item.image} alt={item.name} /> */}
            <h3>{item.name}</h3>
            <ReadMore text={item.description}/>
        </div>
     ))
  )
}


// What I did was to break this into different components, as react is a component based library to ensure reusability. I broke the "read more" feature into another componrnt.
// I also put all the data or constants I am to use into a js file so as my code base won't be clogged and for easy usability and reading
