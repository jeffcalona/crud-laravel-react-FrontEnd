import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Card from "./Card";

import imgAdd from "../img/add.png"
import imgDelete from "../img/delete.png"
import imgEdit from "../img/Edit.png"

const endPoint = "http://localhost:8000/api";

const GetTareas = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    getAllTareas();
  }, []);

  const getAllTareas = async () => {
    const response = await axios.get(`${endPoint}/tareas`);
    setTareas(response.data);
  };

  const deleteTarea = async (id) => {
    await axios.delete(`${endPoint}/tarea/${id}`);
    getAllTareas();
  };

  return (
    <div className="container">
        <h1 className="text-center pb-4">Tareas</h1>
      <div className="">
        {tareas.map((tarea) => (
          <div key={tarea.id} className="mb-3 d-flex justify-content-center position-relative">
            <Card
              CardName={tarea.name}
              CardDescription={tarea.description}
              CardDate={tarea.date}
            />
            <div className="d-flex position-absolute align-items-center justify-content-end mt-2" style={{width: "85%"}}>
                <div className="mx-3" style={{width: 20}}>
                    <Link to={`/edit/${tarea.id}`}>
                        <img src={imgEdit} alt="Edit" className="" style={{width: 20}}/>
                    </Link>
                </div>
                <div className="" style={{width: 20}}>
                    <button onClick={() => deleteTarea(tarea.id)} className="btn btn-link p-0">
                        <img src={imgDelete} alt="Delete" className="" style={{width: 20}}/>
                    </button>
                </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-5">
        <Link to="/create">
          <img src={imgAdd} alt="add" className="" style={{width: 70}} />
        </Link>
      </div>
    </div>
  );
};

export default GetTareas;
