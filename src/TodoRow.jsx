import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const TodoRow = ({ label, onDelete }) => {
    const [hovered, setHovered] = useState(false);
    const [checked, setChecked] = useState(false);
  
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  
    const handleCheckboxChange = (checked) => {
      setChecked(checked);
    };
  
    const handleDelete = () => {
      onDelete();
    };
  
    return (
      <div className="todo-row" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Checkbox label={label} checked={checked} onChange={handleCheckboxChange} />
        {hovered && (
          <Button variant="small" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        )}
      </div>
    );
  };

export default TodoRow 