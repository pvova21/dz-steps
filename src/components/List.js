import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function List(props) {  
  const {steps, onDelClick, onEditClick } = props;

  function formatDate(date) {
    return `${date.split('-')[2]}.${date.split('-')[1]}.${date.split('-')[0]}`;
  }

  return (
    <div className="step-list">
      <div className="step-list_titles">
        <span>Дата</span>
        <span>Пройдено, км</span>
        <span>Действия</span>
      </div>

      <div className="step-list_items">
        {steps.map((step) => (
          <div className="step-item" key={nanoid()}>
            <div>{formatDate(step.date)}</div>
            <div>{step.path}</div>
            <div className="step-item_actions">
              <i className="material-icons edit-action" 
                onClick={() => onEditClick(step)}>add_circle</i>
              <i className="material-icons del-action" 
                onClick={() => onDelClick(step)}>delete_forever</i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

List.propTypes = {
  steps: PropTypes.array,
}
