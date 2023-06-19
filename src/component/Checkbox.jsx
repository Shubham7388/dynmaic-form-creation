import React, { useEffect } from 'react'

function Checkbox({text,name,value,formData, setFormdata,skillsArr,setSkills}) {
  const handleInputChange = (e) => {

    const {value,checked}=e.target;
    // console.log(value,checked);
    if(checked){
      setSkills([...skillsArr,value]);
    }
    else{
      setSkills(skillsArr.filter(i=>i!==value))
    }
  };

  useEffect(()=>{
    setFormdata({...formData,[name]:skillsArr})
  },[skillsArr])

  



  return (
    <>
    <label>{text}</label>
    <input type="checkbox" name={name} value={value} onClick={handleInputChange}/>
    </>
    )
}
export default Checkbox







