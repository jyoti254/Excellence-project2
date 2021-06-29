import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./Table";
import "./App.css";
const HomePage = () => {
  const [num, setNum] = useState(1);
  const [tableData, settableData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://reqres.in/api/users?page=${num}`);
      settableData(res.data);
    }
    getData();
  }, [num]);
  return (
    <>
      <h1>Your Table Data</h1>
      <DataTable tableData={tableData&&tableData.data} />
      <button className = {[num==1? 'activeClass':"nonActiveClass"]} onClick={()=>setNum(1)}>1</button>
      <button className = {[num==2? 'activeClass':'nonActiveClass']} onClick={()=>setNum(2)}>2</button>
    </>
  );
};
export default HomePage;
