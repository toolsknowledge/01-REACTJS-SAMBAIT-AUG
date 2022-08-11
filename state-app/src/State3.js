import React,{useState} from "react";
const State3 = ()=>{
    const [sub,setSub] = useState("ReactJS 18.X");
    const [num,setNum] =useState(100);
    const [obj,setObj] = useState({key1:"MERN",key2:"MEAN",key3:"MEVN"});
    const [subjects,setSubjects] = useState(["ReactJS","NodeJS","MongoDB","VueJS","Angular"]);
    const [flag,setFlag] = useState(false);
    const my_fun = ()=>{
        setFlag(flag=>!flag)
    }
    return(
        <React.Fragment>
            <button onClick={my_fun}>Click Me</button>
            {flag?(<div><h5>{sub}</h5>
            <h5>{num}</h5>
            <h5>{obj.key1}.....{obj.key2}.....{obj.key3}</h5>
            {
                subjects.map((element,index)=>{
                    return(<h5 key={index}>{element}</h5>)
                })
            }</div>):null}
            
        </React.Fragment>
    )
}
export default State3;