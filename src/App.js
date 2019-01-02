import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  
  state = {
    // setting this.state.friends to the friends json array
    friends,
    intScore: 0,
    intTopScore: 0,
    gameStatus: "Click an image to begin"
  }

  //filter this.state.friends for friends with an id not equal to the id being removed
  arrayShuffle = function(arr) {
    let output = arr;
     
    for (var i = output.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = output[randomIndex]; 
         
        output[randomIndex] = output[i]; 
        output[i] = itemAtIndex;
    }
    return output;
  }

  // Update game status
  updateGameStatus = newStatus => {
  this.setState({gameStatus: newStatus});
  }

  //Process the click.  
  processGuess = id => {
    console.log("The id: ", id)
    let arrIdx = friends.findIndex(arr => arr.id === id);
    console.log("arrIdx: ", arrIdx);
    if (arrIdx > -1) {
      if (friends[arrIdx].isClicked === 0) {
        friends[arrIdx].isClicked = 1;
        console.log("this.state.intScore before:", this.state.intScore)
        let tempScore = this.state.intScore + 1;
        this.setState({ intScore: tempScore}); 
        console.log("friends[arrIdx]", friends[arrIdx]);
        console.log("====>intScore: ", tempScore);
        let tempTopScore = this.state.intTopScore;
         (tempScore > tempTopScore)? this.setState({intTopScore: tempTopScore+1 }): console.log("");
         this.updateGameStatus("Correct Guess!");
      } else {
        console.log("reset my score");
        this.setState({ intScore: 0});
        friends.forEach(friend => {
          friend.isClicked = 0;
        });
        this.updateGameStatus("Wrong Guess!");
      }
    }

    let newfriends = this.arrayShuffle(friends)
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends: newfriends });
    // console.log("hitting the remove function, friends: ", this.state.friends);

  }
  //filter this.state.friends for friends with an id not equal to the id being removed
  // removeFriend = id => {
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   this.setState({ friends });
    
  //   console.log("hitting the remove function, friends: ", this.state.friends);

  // }
  render() {
    return (
    <Wrapper
    gameStatus={this.state.gameStatus}
    intScore={this.state.intScore}
    intTopScore={this.state.intTopScore}
            >
        {this.state.friends.map(friend=>(
          <FriendCard 
          removeFriend={this.removeFriend}
          processGuess={this.processGuess}
          id={friend.id}
          key={friend.id}
          image={friend.image}
          /> 
          )
        )
        
      }
       
       </Wrapper>
    )
  }
}

export default App;
