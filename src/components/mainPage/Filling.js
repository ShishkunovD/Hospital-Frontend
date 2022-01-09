const Filling = () => {
  return(
    <div className="filling">
      <div className="name-patient">
        <span>Имя:</span>
        <input type='text' className="name-patient__input"/>
      </div>
      <div className="doctor">
        <span>Врач:</span>
        <select className="doctor__select">
          <option selected disabled></option>
          <option>Аганесов Александр Георгиевич</option>
          <option>Белов Юрий Владимирович</option>
          <option>Давыдов Михаил Иванович</option>
        </select>
      </div>
      <div className="data">
        <span>Дата:</span>
        <input type='date' className="data__input"/>
      </div>
      <div className="complaints">
        <span>Жалобы:</span>
        <input type='text' className="complaints__input"/>
      </div>
      
      <button className="add-btn">Добавить</button>
    </div>
  )
}

export default Filling;