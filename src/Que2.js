import { useEffect, useState } from "react";
import axios from "axios";
export default function Que2() {
  const [counter, setcounter] = useState(0);
  const [apiData, setApiData] = useState([]);
  const incre = () => {
    setcounter((count) => count + 1);
  };
  const decre = () => {
    if (counter > 0) {
      setcounter((count) => count - 1);
    }
  };
  const api = async () => {
    const res = await axios.get(`https://randomuser.me/api`);
    // const tempData = apiData;
    // tempData.push(res.data.results[0]);

    // console.log(tempData);
    // tempData.map((ele)=>console.log(ele.gender))

    setApiData((tempData)=>tempData.isArray?.push(res.data.results[0]));
  };
  useEffect(()=>{
    console.log(apiData)
  },[apiData])
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => incre()}>Add</button>
      <h2>{counter}</h2>
      <button onClick={() => decre()}> Sub</button>
      <button onClick={() => api()}> Api Call</button>
      <div>
        {apiData.isArray &&
          apiData.map((ele, idx) => {
            console.log(ele.name, ele.pic);
            // console.log(typeof apiData);
            // console.log(apiData.map((ele2)=>console.log("ddsss",ele.gender)))
            // console.log("ele", ele.gender, idx);
            return (
              <div key={idx}>
                <div>{`${ele.name.first} ${ele.name.last}`}</div>
                <img src={ele.picture.large} alt="profilePic" />
              </div>
            );
          })}
      </div>
    </div>
  );
}
