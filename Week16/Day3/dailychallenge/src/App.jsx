import { useState } from 'react'
import './App.css'
import Form from './components/FormComponent '

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    veganMeal: false
  })

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const finalValue = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: finalValue
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryParams = Object.keys(formData)
      .map(key => {
        let value = formData[key];

        if (typeof value === 'boolean') {
          if (!value) return '';
          value = 'on';
        }

        if (value === '') return '';

        return `${key}=${value}`;
      })
      .filter(param => param.length > 0)
      .join('&');

    window.history.pushState({}, '', `/?${queryParams}`);
  }

  const renderBoolean = (bool) => (bool ? 'Yes' : 'No');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <section style={{ padding: '20px', backgroundColor: '#e5d8c3' }}>
        <h2>Sample form</h2>
        <form onSubmit={handleSubmit}>
          <Form
            formData={formData}
            handleChange={handleChange}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </section>

      <section style={{ backgroundColor: '#217357', color: 'white', padding: '20px', marginTop: '10px' }}>
        <h2>Entered Information:</h2>

        <p>Your name: **{formData.firstName} {formData.lastName}**</p>
        <p>Your age: **{formData.age}**</p>
        <p>Your gender: **{formData.gender}**</p>
        <p>Your destination: **{formData.destination}**</p>

        <h4>Your dietary restrictions:</h4>
        <p>**Nuts free :** {renderBoolean(formData.nutsFree)}</p>
        <p>**Lactose free :** {renderBoolean(formData.lactoseFree)}</p>
        <p>**Vegan meal :** {renderBoolean(formData.veganMeal)}</p>
      </section>
    </div>
  );
}

export default App;
