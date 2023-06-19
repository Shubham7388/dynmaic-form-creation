import React from 'react'

function Radioinput({text,name,value,formData, setFormdata}) {
  const handleInputChange = (e) => {
    setFormdata({...formData,[name]:e.target.value});
  };
  return (
    <>
    <label>{text}</label>
    <input type="radio" name={name} value={value} onClick={handleInputChange}/>
    </>
  );
}
export default Radioinput

