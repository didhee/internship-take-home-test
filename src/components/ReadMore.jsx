import  {useState} from "react";

function ReadMore({ text }) {
   // i created a state and set it's initial state to false.
      const [readMore, setReadMore] = useState(false);

   return (
     // created an onClick function, such that when the read more is clicked, the state changes and it expands and reveals the description, on expansion, the state has changed to true, since it is a boolean in this case.
      // the slice method, I used it to shorten the words, so that the read more can be there and carry out it's function.
    <p onClick={() => setReadMore(!readMore)}>
      {readMore ? text : text.slice(0, 80)}
      {!readMore && (
        <span className="expand">
          ...read more
        </span>
      )}
    </p>
  );
}

export default ReadMore;
