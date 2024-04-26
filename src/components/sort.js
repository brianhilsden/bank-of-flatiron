function Sort({selectedSortOption,handleSort}){
    return(
        <select className="form-select" aria-label="Default select example" value={selectedSortOption} onChange={handleSort}>
        <option >Sort by</option>
        <option value="category">category</option>
        <option value="description">description</option>
      </select>
    )
}
export default Sort