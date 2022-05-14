import { useState } from 'react';
const Form = ({ setMoviesToSearch }) => {
  const [formData, setFormData] = useState('');

  const handleChange = (e) => {
    setFormData(() => e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMoviesToSearch(() => formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={formData} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default Form;
