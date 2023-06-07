import React from 'react';
import UserList from './UserList';

const App = () => {
  return (
    <div className="App">
      <UserList style={{marginTop: "50px", boxSizing:"border-box", borderBlockStyle:"double", backgroundImage: "linear-gradient(yellow,lightblue)", padding:"30px",fontsize: "20px", color:"#4a54f1", textalign:"center"}}/>
    </div>
  );
};

export default App;
