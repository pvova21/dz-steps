import PropTypes from 'prop-types';

export default function Form(props) {
  const {form, onFormChange, onFormSubmit } = props;

  return (
    <form className="step-form" onSubmit={onFormSubmit}>
      <section className="step-section">
        <label htmlFor='date'>
          Дата (ДД.ММ.ГГ)
        </label>
        <input id='date' 
          type="date" 
          name="date" 
          className="step-input" 
          value={form.date} 
          onChange={onFormChange}/>
      </section>

      <section className="step-section">
        <label htmlFor='path'>
          Пройдено, км
        </label>
        <input id='path'
           type="text"
           name="path"
           className="step-input"
           value={form.path}
           onChange={onFormChange}/>
      </section>

      <button>OK</button>
    </form>
  );
}

Form.propTypes = {
  form: PropTypes.object,
}
