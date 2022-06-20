import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
    const {setNewData, data} = props
    const [first_name, setFirstname] = useState ("");
    const [last_name, setLastname]= useState ("");
    const [job, setJob]= useState ("");
    const handleSubmit= e => {
        e.preventDefault()

        const emp = {
            first_name: first_name,
            last_name: last_name,
            job: job,
            id: uuidv4()
        }
        setNewData([emp, ...data])
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="w-50 mx-auto border p-4">
  <div className="mb-3">
    <label htmlFor="first-name" className="form-label">Prénom de l'employé</label>
    <input value={first_name}  onChange={e => setFirstname(e.target.value)}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="last-name" className="form-label">Nom de l'employé</label>
    <input value={last_name} onChange={e => setLastname(e.target.value)} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
  <label htmlFor="job" className="form-label">Profession de l'employé</label>
    <input value={job} onChange={e => setJob (e.target.value)} type="text" className="form-control" id="exampleInputPassword3"/>
  </div>
  <button type="submit" className="btn btn-primary">Envoyer</button>
</div>
</form>
    )
}
    


export default Form