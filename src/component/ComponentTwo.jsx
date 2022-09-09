import React, { useEffect, useState } from "react";

const ComponentTwo = () => {
  console.log("Component Two is Executed");
  const [fetchdata, setFetchdata] = useState([]);
  useEffect(() => {
    fetchFunction();
  }, []);

  const fetchFunction = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchdata(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {fetchdata.map((val) => {
        return <p>{val.name}</p>;
      })}
      Component Two:{" "}
    </div>
  );
};

export default ComponentTwo;
