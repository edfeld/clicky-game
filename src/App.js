import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  constructor (props) {
    super(props)
  // setting init state
    this.state = {
      // setting this.state.friends to the friends json array
      friends,
      intScore: 0,
      intTopScore: 0,
      gameStatus: "Click an image to begin"

    }
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
    // Find the arr index of the clicked friend
    let arrIdx = friends.findIndex(arr => arr.id === id);
    console.log("arrIdx: ", arrIdx);
    // error check
    if (arrIdx > -1) {
      // Test to see if we have not been clicked
      if (friends[arrIdx].isClicked === 0) {
        // Set to 1 for "it's clicked"
        friends[arrIdx].isClicked = 1;
        console.log("this.state.intScore before:", this.state.intScore)

        let tempScore = this.state.intScore + 1;
        // Update the state of intScore
        this.setState({ intScore: tempScore}); 
        console.log("friends[arrIdx]", friends[arrIdx]);
        console.log("====>intScore: ", tempScore);
        // increment intTopScore if it's less than intScore
        let tempTopScore = this.state.intTopScore;
         (tempScore > tempTopScore)? this.setState({intTopScore: tempTopScore+1 }): console.log("");
         this.updateGameStatus("Correct Guess!");
      } else { // if already clicked Friend - You lose
        console.log("reset my score");
        this.setState({ intScore: 0});
        // reset all isClicked value
        friends.forEach(friend => {
          friend.isClicked = 0;
        });
        this.updateGameStatus("Wrong Guess!");
        console.log("GameStatus: ", this.state.gameStatus)
      }
    }
    // Shuffle all the friends again
    let newfriends = this.arrayShuffle(friends)
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // update the state with friends
    this.setState({ friends: newfriends });
    // console.log("hitting the remove function, friends: ", this.state.friends);

  }  // End of processGuess

  render() {
    return (
    <Wrapper
    gameStatus={this.state.gameStatus}
    intScore={this.state.intScore}
    intTopScore={this.state.intTopScore}
    type={(this.state.gameStatus === "Wrong Guess!")? "danger": null}
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
       
       <Footer />
       </Wrapper>
    )
  }
}

export default App;
