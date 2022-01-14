const Reseptions = () => {

  const headerTable = ['Имя', 'Врач', 'Дата', 'Жалобы'];

  return(
    <div className='table-container'>
      <table className='table'>
        <thead >
          <tr className='table-header'>
            {headerTable.map(item => {
              <td>{item}</td>
            })}
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}

export default Reseptions;