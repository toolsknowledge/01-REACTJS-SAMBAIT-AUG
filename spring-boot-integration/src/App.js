import React,{useEffect,useState} from "react";
import axios from "axios";
function App() {
  const [arr,setArr] = useState([]);
  useEffect(()=>{
      axios.get(`http://localhost:5000/api/v1/products`).then((posRes)=>{
        const {data} = posRes;
        setArr(data);
      },(errRes)=>{
        console.log(errRes);
      })
  },[]);
  return (
      <React.Fragment>
          <table border={1}
                 align="center">
              <tr>
                  <th>SNO</th>
                  <th>BRAND</th>
                  <th>COST</th> 
                  <th>COUNTINSTOCK</th>
                  <th>DESCRIPTION</th>
                  <th>NAME</th>
                  <th>QUANTITY</th>
                  <th>RATING</th> 
              </tr>  
              {
                  arr.map((element,index)=>{
                    return(
                      <tr key={index}>
                          <td>{element.id}</td>
                          <td>{element.brand}</td>
                          <td>{element.cost}</td>
                          <td>{element.countInstock}</td>
                          <td>{element.description}</td>
                          <td>{element.name}</td>
                          <td>{element.qty}</td>
                          <td>{element.rating}</td>
                      </tr>
                    )
                  })    
              }
          </table>        
      </React.Fragment>    
  );
}

export default App;
