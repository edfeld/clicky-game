import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json"

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {/* <SpongeBobCard />
      <MrKrabsCard />
      <SquidwardCard /> */}
      {/* <FriendCard type={friends[0]}/>
      <FriendCard type={friends[1]}/>
      <FriendCard type={friends[2]}/> */}
      
      {friends.map(friends => {
        return (<FriendCard type={friends}/>)
      })} 
    </Wrapper>
  );
}

export default App;
