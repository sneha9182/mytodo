

export const ButtonsComponent=(props)=>{

    return <div className="list-of-buttons" >   
        <button className="btn btn-success btn-lg" name="complete" onClick={props.pending}>Completed</button>
        <button className="btn btn-warning btn-lg" name="pending" onClick={props.pending} >Pending</button>
  </div>
}