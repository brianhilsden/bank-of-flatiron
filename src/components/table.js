import Row from "./row"
function Table({data}){
    const mappedData = data.map((item,index)=>{
        return(
            <Row key={index} date = {item.date} description = {item.description} category = {item.category} amount = {item.amount} />
        )
    })
    return(
        <div className="mt-3">
            <table className="table table-striped text-center table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
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