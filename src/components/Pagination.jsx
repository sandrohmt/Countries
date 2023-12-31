import './Pagination.css'

function Pagination ({pages, itensPerPage, setItensPerPage, currentPage, setCurrentPage}) {
  
  return (
    <div className='pagination'>

      <div>
        <span className='qtt-pages'>Quantity of items: </span>
        <select 
        multiple={false}
        value={itensPerPage}
         onChange={(event) => setItensPerPage(Number(event.target.value))}>
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div>
          {Array.from(Array(pages), (item, index) => {
            return <button 
            key={index}
            className="button page"
            style={index === currentPage ? {backgroundColor: "gray"} : null}
            value={index}
            onClick={(event) => setCurrentPage(Number(event.target.value))}> 
            {index + 1} 
            </button>
          })}
      </div>
    </div>
  )
}

export default Pagination