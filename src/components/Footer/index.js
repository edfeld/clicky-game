import React from "react";
import "./style.css";

class Footer extends React.Component {
  render() {

      return (
        <footer className="page-footer font-small pt-3 mb-0">
            <div className="footer-copyright text-center text-muted ">Ed Einfeld © 2019
            </div>
        </footer> 
      );
    }
}


// function Footer() {
//   return (
//     <footer className="page-footer font-small bg-primary pt-4 mb-0">
//         <div className="footer-copyright text-center py-3 text-dark ">Ed Einfeld © 2019
//             <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
//         </div>
//     </footer> 
//   );
// }
export default Footer;

