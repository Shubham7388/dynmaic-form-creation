
import './App.css';
import Input from './component/Input';
import Radioinput from './component/Radioinput';
import Checkbox from './component/Checkbox';
import Textarea from './component/Textarea';
import { useState } from 'react';
function App() {
  const[formData,setFormdata]=useState({});
  const [skillsArr,setSkills]=useState([]);
  const submitHandle=(e)=>{
    e.preventDefault();
    console.log(formData);
    e.target.reset();
    setFormdata({})
    setSkills([])
  }
  return (
    <div className="App">

      <form onSubmit={submitHandle}>
      <h1>Dynamic Form Creation</h1>
        
     <Input type={"text"} label={"First Name: " } placeholder='enter your first name' formData={formData} setFormdata={setFormdata} name="first_name"/>
     <Input type={"text"} label={"Last Name: " } placeholder='enter your last name' formData={formData} setFormdata={setFormdata} name="last_name"/>
     <Input type={"text"} label={"Address: " } placeholder='enter your address' formData={formData} setFormdata={setFormdata} name="address"/>
     <label style={{color:"black"}}>Type of Address: </label>
     <Radioinput text={"Rural"} name={"add"} value={"rural"} formData={formData} setFormdata={setFormdata}/>
     <Radioinput text={"Urban"} name={"add"} value={"urban"} formData={formData} setFormdata={setFormdata}/>

     <Input type={"number"} label={"Mobile No.: " } placeholder='enter your Mobile number' formData={formData} setFormdata={setFormdata} name="mobile"/>
     <Input type={"date"} label={"DOB: "} placeholder='Enter your date of birth' formData={formData} setFormdata={setFormdata} name="DOB"/>
     <label style={{color:"black"}}>Gender: </label>
     <Radioinput text={"Male"} name={"gender"} value={"male"} formData={formData} setFormdata={setFormdata}/>
     <Radioinput text={"Female"} name={"gender"} value={"Female"} formData={formData} setFormdata={setFormdata}/>
     <Radioinput text={"Other"} name={"gender"} value={"Other"} formData={formData} setFormdata={setFormdata}/>
     <br/>
      <label style={{color:"black"}}>Skills: </label>
      <Checkbox skillsArr={skillsArr} setSkills={setSkills} text={"Html"} name={"skills"} value={"Html"} formData={formData} setFormdata={setFormdata}/>
      <Checkbox skillsArr={skillsArr} setSkills={setSkills} text={"CSS"} name={"skills"} value={"css"} formData={formData} setFormdata={setFormdata}/>
      <Checkbox text={"JavaScript"} name={"skills"} value={"javascript"} formData={formData} setFormdata={setFormdata} skillsArr={skillsArr} setSkills={setSkills}/>
      <br/>
      <label style={{color:"black"}}>Text Area: </label>
      <Textarea text={"text"} formData={formData} setFormdata={setFormdata} name="textarea"/>
      <tr>
     <td><Input type={"reset"}/></td>
     <td><Input type={"submit"}/></td>
     </tr>
      </form>
      </div>


  );
}
export default App;


