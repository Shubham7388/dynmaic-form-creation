import React from 'react';

const Input = ({ label, name, type, value, placeholder, formData,setFormdata,}) => {
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setFormdata({...formData,[name]:e.target.value});
  };

  return (
    <tr>
      <td><label style={{color:"black"}}>{label}</label></td>
      <td><input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        
      />
      </td>
    </tr>
  );
};
export default Input;





