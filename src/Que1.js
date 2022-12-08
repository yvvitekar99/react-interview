port axios from "axios";
import { useEffect, useState } from "react";
export default function Que1() {
  const [data, setData] = useState([]);
  const [newDefined, setnewDefined] = useState([]);
  const apiCall = async () => {
    const res = await axios.get(`https://randomuser.me/api/?results=20`);
    return res.data.results;
  };
  const newDefinedMapper = (lata) => {
    const data = lata["location"];
    const newDefined = [];
    const newObj = {};
    Object.keys(data).map((ele) => {
      if (typeof data[ele] === "object") {
        Object.keys(data[ele]).map((ele2) => {
          newDefined.push(ele2);
          newObj[`${ele}${ele2}`] = data[ele][ele2];
        });
      } else {
        newDefined.push(ele);
        newObj[ele] = data[ele];
      }
    });
    return newObj;
  };
  async function set() {
    const temp = await apiCall();
    const loactionArray = [];
    temp.map((ele) => {
      const tempObj = newDefinedMapper(ele);
      loactionArray.push(tempObj);
      console.log(typeof loactionArray);
    });
    setData(temp);
    setnewDefined(loactionArray);
  }
  useEffect(() => {
    set();
  }, []);

  return (
    <div className="App">
      <div>
        {newDefined.length ? (
          <table>
            <thead>
              <tr>
                {Object.keys(newDefined[0]).map((ele, idx) => {
                  return <th key={idx}>{ele}</th>;
                })}
              </tr>
            </thead>

            <tbody>
              {newDefined?.map((ele, idx) => (
                <tr key={idx}>
                  {Object.values(ele).map((ele2, ndx) => (
                    <td key={ndx}>{ele2}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}
