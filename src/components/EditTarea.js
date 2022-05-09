import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios'

const endPoint = 'http://localhost:8000/api/tarea/'

function EditTarea() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const navigate = useNavigate()

  const {id} = useParams()

  const editar = async (e) => {
    e.preventDefault()
    await axios.put(`${endPoint}${id}`, {name: name, description: description, date: date})
    navigate('/')
  }

  useEffect (() => {
    const getTareaId = async() => {
      const respose = await axios.get(`${endPoint}${id}`)
      setName(respose.data.name)
      setDescription(respose.data.description)
      setDate(respose.data.date)
    }
    getTareaId()
  }, [id])

  return (
    <div className='container'>
      <h2 className="text-center pb-4">Editar Tarea</h2>
      <form className='container' onSubmit={editar} >
        <div>
          <label class="form-label">Nombre</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control text-secondary text-capitalize"/>
        </div>
        <div className='py-4'>
          <label class="form-label">Descripción</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} class="form-control text-secondary" rows="3"></textarea>
        </div>
        <div className='py-2'>
          <label class="form-label">Fecha Edición</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} class="form-control text-secondary"/>
        </div>
        <div className='pt-4 text-center'>
          <button type='submit' className='btn btn-primary' >Editar</button>
        </div>
      </form>
    </div>
  )
}

export default EditTarea