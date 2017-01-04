
import React from "react";
import ReactDOM from "react-dom";

import Header from "./header/header.js";
import Body from "./body/body.js";
import Footer from "./footer/footer.js";

export default class Layout extends React.Component {
  render(){
  	 return(
  	 	<div>
  	 	<Header />
        
        <Body />
        <Footer />
        </div>
  	 	);

  }

}


