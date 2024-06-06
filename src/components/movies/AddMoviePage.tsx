import React, { useState } from 'react';

interface FormValues {
  title: string;
  director: string;
}

const AddMoviePage: React.FC<{ history: any }> = ({ history }) => {
  const [formData, setFormData] = useState<FormValues>({
    title: '',
    director: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      
      console.log('FormData:', formData);
      
      history.push('/'); 
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="director">Director:</label>
          <input type="text" id="director" name="director" value={formData.director} onChange={handleChange} required />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMoviePage;
