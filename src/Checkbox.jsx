import React from 'react'

const Checkbox = ({ label, checked, onChange }) => {
    
    const handleCheckboxChange = (event) => {
      onChange(event.target.checked);
    };
  
    return (
      <div className="checkbox">
        <label className="checkbox-label">
          <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
          <span className={`custom-checkbox ${checked ? 'checked' : ''}`}></span>
          {label}
        </label>
      </div>
    );
  };

export default Checkbox