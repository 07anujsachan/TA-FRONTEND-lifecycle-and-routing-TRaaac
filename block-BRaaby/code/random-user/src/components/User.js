import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faCalendar,
  faMap,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      detail: "",
      title: "",
      value: "",
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  }

  handleClick = () => {
    fetch("https://randomuser.me/api/?results=8")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: [data.results[0]] });
      });
  };

  handleDetails = (detail) => {
    switch (detail) {
      case "username":
        this.setState({
          title: "My username is ",
          value: this.state.data[0] ? this.state.data[0].login.username : "",
        });

        break;
      case "email":
        this.setState({
          title: "My  Email is ",
          value: this.state.data[0] ? this.state.data[0].email : "",
        });

        break;
      case "age":
        this.setState({
          title: "My Age is ",
          value: this.state.data[0] ? this.state.data[0].dob.age : "",
        });

        break;
      case "street":
        this.setState({
          title: "My Street is ",
          value: this.state.data[0]
            ? this.state.data[0].location.street.name
            : "",
        });

        break;

      case "cell":
        this.setState({
          title: "My phone number  is ",
          value: this.state.data[0] ? this.state.data[0].cell : "",
        });

        break;

      case "password":
        this.setState({
          title: "My Password  is ",
          value: this.state.data[0] ? this.state.data[0].login.password : "",
        });

        break;

      default:
        break;
    }
    this.setState({ detail: detail });
  };

  render() {
    console.log(this.state.data[0]);
    return (
      <>
        <div className="body-back">
          <div className="black"></div>
          <div className="white"></div>
          <div className="user-sec">
            <div className="innerbox-1"></div>
            <figure>
              <img
                className="user-img"
                src={this.state.data[0] ? this.state.data[0].picture.large : ""}
                alt="#"
              />
            </figure>
            <div className="innerbox-2">
              <p className="para">
                {" "}
                {this.state.detail ? this.state.title : "My name is"}
              </p>
              <h3 className="content-head">
                {!this.state.detail
                  ? this.state.data[0]
                    ? this.state.data[0].name.first +
                      " " +
                      this.state.data[0].name.last
                    : ""
                  : this.state.value}
              </h3>

              <div className="icons">
                <FontAwesomeIcon
                  onMouseOver={() => this.handleDetails("username")}
                  className="icon"
                  icon={faUser}
                />
                <FontAwesomeIcon
                  onMouseOver={() => this.handleDetails("email")}
                  className="icon"
                  icon={faEnvelope}
                />
                <FontAwesomeIcon
                  onMouseOver={() => this.handleDetails("age")}
                  className="icon"
                  icon={faCalendar}
                />
                <FontAwesomeIcon
                  onMouseOver={() => this.handleDetails("street")}
                  className="icon"
                  icon={faMap}
                />
                <FontAwesomeIcon
                  onMouseOver={() => this.handleDetails("cell")}
                  className="icon"
                  icon={faPhone}
                />
                <FontAwesomeIcon
                  onMouseOver={() => this.handleDetails("password")}
                  className="icon"
                  icon={faLock}
                />
              </div>
              <button onClick={this.handleClick} className="btn">
                {this.state.data ? " Random User" : "loading..."}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default User;
