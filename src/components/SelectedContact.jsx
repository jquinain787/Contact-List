import React, { useState, useEffect } from 'react';

function SelectedContact() {
  const [contact, setContact] = useState(null);
    
  useEffect(() => {
    const fetchContactData = async (selectedContactId) => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };
  }, []);

  return (
    <div>
      {/* JSX code for rendering the selected contact */}
    </div>
  );
}

export default SelectedContact;
