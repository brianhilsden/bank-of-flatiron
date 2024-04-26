function Row({date,description,category,amount,id,handleDelete}){
    return(
        <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td><button className="btn btn-danger" onClick={()=>handleDelete(id)}>Delete</button></td>
        </tr> 
    )
}
export default Row