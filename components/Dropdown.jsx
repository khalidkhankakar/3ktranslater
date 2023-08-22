'use client'
import React, { useState } from 'react';

function DropdownComponent() {
  // Define the initial state for the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Define the function to handle changes in the dropdown
  const handleDropdownChange = (event) => {
    // Get the selected value from the event
    const newValue = event.target.value;

    // Update the state with the new selected value
    setSelectedValue(newValue);

    // You can also perform other actions here based on the selected value
    // For example, make an API call, update other components, etc.
  };

  return (
    <div>
      <h2>Dropdown Component</h2>
      <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
}

export default DropdownComponent;
