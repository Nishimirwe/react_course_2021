import React, { Component } from 'react';

class ContacList extends React.Component{
  render(){
    const people=[
      {name:'Paul'},
      {name: 'Yves'},
      {name: 'Patrick'},
      {name: 'Josiane'}
    ]
    return <ol type='I'>
      {people.map((data)=>(
        <li key={data.name}>
          "This is called { data.name} "
        </li>
      ))}
    </ol>
  }
}
function App() {
  return (
    <div className="App">
    <ContacList/>
      <ContacList/>
      <ContacList/>
    </div>
  );
}

export default App;
