import React,{useState,useEffect} from "react";
import Feature from "./showing";
const Search = (props) => {
    let [show,setShow]=useState([])

    const filter =()=>{
        let data= [];
        if (props.value) {
            data = props.user.filter(
              (item) =>
                item.name.toLowerCase().search(props.value.toLowerCase().trim()) !==
                -1
            );
          } 
       
          setShow(data)
    }
   useEffect(()=>{
    filter()
   },[props.value])
  return (
    <div>
        {show.length?
         <Feature data ={show}/>
        : <h4 className="titleCag">Not found</h4>}
      
    </div>
  );
};

export default Search;
