import React from 'react'

function Textarea({name,value,formData,setFormdata}) {
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setFormdata({...formData,[name]:e.target.value});
  };
  return (
    <>
    {/* <label>{text}</label> */}
    <textarea name={name} value={value} placeholder='enter text' maxLength={10}  onChange={handleInputChange}/>
    </>
  )
}

export default Textarea

