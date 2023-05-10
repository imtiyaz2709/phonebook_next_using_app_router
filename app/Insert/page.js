"use client"
import React, { useState } from "react";
const page = () => {
  const [data, setData] = useState({
    name: "",
    contact: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        const insert = await fetch("http://127.0.0.1:3000/api/PhoneBook",{
            method:"POST",
            headers:{
                "content-type" : "application/json",
            },
            body:JSON.stringify(data)
        })

        const insertRecord = await insert.json();
        setData({name:"",contact:""})
        console.log(insertRecord.data)


  }

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-6/12">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={data.name}
              className="px-3 py-2 border rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">contact</label>
            <input
              type="text"
              name="contact"
              onChange={handleChange}
              value={data.contact}
              className="px-3 py-2 border rounded"
            />
          </div>
          <button type="submit" className="px-3 py-2 rounded w-full bg-teal-800 text-white mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
