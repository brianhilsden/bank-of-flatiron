import Row from "./row"
function Table({data,handleDelete}){
    const mappedData = data.map((item,index)=>{
        return(
            <Row key={index} id={index} date = {item.date} description = {item.description} category = {item.category} amount = {item.amount} handleDelete={handleDelete}/>
        )
    })
    return(
        <div className="mt-2">
            <table className="table table-striped text-center table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {mappedData}
                </tbody>
            </table>
        </div>
    )
}
export default Table