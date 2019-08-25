import React from "react";
import "./style.css";

class Wrapper extends React.Component {
  // state = {
  //   gameStatus: "Click an image to begin"
  // }

  // updateGameStatus = newStatus => {
  //   this.setState.gameStatus(newStatus);
  // }

  render() {
    console.log("this.props.type:", this.props.type);
  return <main>
    <nav className="navbar navbar-expand-lg">
      <ul className="navbar-nav mr-0">
        <li className="nav-item"><a className="navbar-brand" href="/">Clicky Game</a></li>
        <li className="nav-other alert-instruct"><span className={`alert alert-${this.props.type || "white"}`}>{this.props.gameStatus}</span>
        </li>
        <li className="nav-other">Score {this.props.intScore} | Top Score {this.props.intTopScore}</li>
      </ul>
    </nav>
    <div className="jumbo-container mx-0">
      <div className="jumbotron bg-dark text-light">
        {/* <h4 className="jumbo-header text-center">The Clicky Game</h4> */}
        <h4 className="jumbo-header text-center">Click on an image to earn points, but don't click on any more than once!</h4>
        {/* <h4 className="text-center">Click on an image to earn points, but don't click on any more than once!</h4> */}
        
      </div>
    </div>
    <div className="wrapper">{this.props.children}</div>
  </main>;
  }
}

// function Wrapper(props) {
//   return <div>
//     <nav className="navbar navbar-expand-lg">
//     <ul className="navbar-nav mr-0">
//       <li className="nav-item"><a className="navbar-brand" href="/">Clicky Game</a></li>
//       <li className="nav-other">Click an image to begin</li>
//       <li className="nav-other">Score {props.intScore} | Top Score {props.intTopScore}</li>
//     </ul>
//     </nav>
//     <div className="jumbo-container mx-0">
//       <div className="jumbotron bg-dark text-light">
//         <h1 className="jumbo-header text-center">The Clicky Game</h1>
//         <h4 className="text-center">Click on an image to earn points, but don't click on any more than once!</h4>
        
//       </div>
    
//     </div>
//     <div className="wrapper">{props.children}</div>;
//   </div>
// }

export default Wrapper;
