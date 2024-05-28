import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  const Filter = (event) => {
    setRecords(
      data.filter((current) =>
        current.name.toLowerCase().includes(event.target.value)
      )
    );
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((results) => {
        setData(results.data);
        setRecords(results.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div class="bg-light m-3 p-3">
      <div className="table-responsive bg-white shadow border">
        <input
          type="text"
          placeholder="input name to search in the table"
          className="form-controls"
          style={{ width: "100%" }}
          onChange={Filter}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <td>name</td>
              <td>username</td>
              <td>email</td>
            </tr>
          </thead>
          <tbody>
            {records.map((current) => (
              <tr key={current.id}>
                <td>{current.name}</td>
                <td>{current.username}</td>
                <td>{current.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
