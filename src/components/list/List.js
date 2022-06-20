import Card from "../card/Card";

const List =(props)=> {
    const {data}= props
    return (
    <div className="row">
      <div className="col">
       {
         data.map((employe) => (
          <Card 
          key={employe.id}
          firstName={employe.first_name}  
          lastName={employe.last_name}  
          job={employe.job} 
          
           />
         ))
       }
      
      </div>
    
      
    </div>
    )
}

export default List;