const Pagination = ({page, lastPage, setPage}) => {
    const scrollTop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }

    const handlePrevPage = () => {
        if(page != 1){
            setPage((prevState) => prevState-1)
            scrollTop()
        }
    }
    const handleNextPage = () => {
        setPage((prevState) => prevState+1)
        scrollTop()
    }
  return (
    <div className="flex justify-center items-center gap-2 py-2 bg-slate-600">
    {page <= 1 ? null : 
        <button onClick={handlePrevPage} className="px-4 py-1 bg-amber-300 text-white hover:bg-slate-500 transition-all rounded-sm">Prev</button>
    }
        <div className="py-1 px-2 text-white">{page} of {lastPage}</div>
    {page >= lastPage ? null : 
        <button onClick={handleNextPage} className="px-4 py-1 bg-amber-300 text-white hover:bg-slate-500 transition-all rounded-sm">Next</button>
    }
    </div>
  )
}

export default Pagination