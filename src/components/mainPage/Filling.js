const Filling = () => {
  const doctors = ['Аганесов Александр Георгиевич', 'Белов Юрий Владимирович', 'Давыдов Михаил Иванович'];

  return (
    <div className="filling">
      <div className="name-patient">
        <span>Имя:</span>
        <input 
          type='text' 
          className="name-patient__input"
        />
      </div>
      <div className="doctor">
        <span>Врач:</span>
        <select className="doctor-select">
          {doctors.map(item =>
            <option>{item}</option>
          )}
        </select>
      </div>
      <div className="data">
        <span>Дата:</span>
        <input 
          type='date' 
          className="data-input"
        />
      </div>
      <div className="complaints">
        <span>Жалобы:</span>
        <input 
          type='text' 
          className="complaints-input"
        />
      </div>
      
      <button className="add-btn">Добавить</button>
    </div>
  )
}

export default Filling;