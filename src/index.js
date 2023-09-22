import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  width: "20em"
};

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img style={customStyle} src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="beyonce@beyonce.com"
    />
    <Card
      name="Lisandro"
      img="https://dogtime.com/wp-content/uploads/sites/12/2023/08/GettyImages-1321139698.jpg?w=1024"
      tel="+1234567"
      email="lisandro@lisandro.com"
    />
  </div>,
  document.getElementById("root")
);
