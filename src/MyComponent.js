import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script1.type = "text/javascript";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.innerHTML = 
      `(function(){
        emailjs.init("xOjTc2czq_HwhNANc");
      })();
    `;
    document.body.appendChild(script2);
  }

  render() {
  }
}

export default MyComponent;