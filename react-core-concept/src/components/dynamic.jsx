export function Person (props){
    return (
      <div style={{ border:'2px solid red', width:'300px' }}>
        <h>My Name is { props.name }</h>
        <p>Age:{props.age}</p>
        <p>Salary:{props.salary} taka</p>
      </div>
    );
  };