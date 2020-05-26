/* eslint-disable */
import React, { Component } from "react";
// import fetch from "node-fetch";
import Header from "./Team-B Components/Team-B Header.jsx";
import MentorsViewer from "./Team-B Components/Team-B MentorsViewer.jsx";
import Reviews from "./Team-B Components/Team-B Reviews.jsx";
import MentorInfo from "./Team-B Components/Team-B MentorInfo.jsx";
// import ChatBox from "./Team-B Components/Team-B ChatBox.jsx";
import "./Styles/Team-B App.css";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userName: "userName",
      // Password: "12345",
      mentors: [],
      SelectedMentor: "",
      Search: "",
    };
    this.SearchFunc = this.SearchFunc.bind(this);
    this.getAllMentor = this.getAllMentor.bind(this);
    this.MentorInfo = this.MentorInfo.bind(this);
    this.ReviewsInfo = this.ReviewsInfo.bind(this);
  }
  SearchFunc(e) {
    if (this.state.Search === this.state.Mentors) {
      console.log(this.state.Mentors);
    }
  }
  MentorsViewerFunc(e) {
    this.setState((state) => {
      console.log({ SelectedMentor: this.value });
    });
  }
  MentorInfo() {
    console.log("MentorInfo");
  }
  ReviewsInfo() {
    console.log("ReviewsInfo");
  }
  MessageMiiFunc() {
    console.log("MessageMiiFunc");
  }
  VideoChatFunc() {
    console.log("VideoChatFunc");
  }
  ChatFunc() {
    console.log("ChatFunc");
  }
  Availability() {
    console.log("Availability");
  }

  getAllMentor() {
    axios
      .get("http://localhost:3033/api/Mentor")
      .then((res) => {
        const data = res.data;
        this.setState({ mentors: data }, () => {
          console.log("js front end works");
        });
      })
      .catch((err) => {
        console.error();
      });
  }

  componentDidMount(){
    this.getAllMentor()
  }

  render() {
    return (
      <div className="Team-B-App">
        <div className="Team-B-Upper">
          <Header
            getAllMentor={this.SearchFunc}
            userName={this.state.userName}
            ></Header>
        </div>
        <div className="Team-B-Center">
          <div className="Team-B-Left">
            <MentorsViewer
              MentorsViewerFunc={this.MentorsViewerFunc}
              Mentors={this.state.mentors.map((mentor, index) => {
                return (
                  <div>
                    <div className="Team-B-Mentor" key={index}>
                      <img
                        className="Team-B-ReviewImages"
                        src={mentor.picture}
                        />
                      <div>{mentor.firstName} {mentor.lastName}</div>
                    </div>
                    <br></br>
                  </div>
                );
              })}
              ></MentorsViewer>
          </div>
          <div className="Team-B-Right">
            <MentorInfo
              MentorInfo={this.MentorInfo}
              Info={this.state.mentors.map(function (info) {
                return (
                  <div className="MentorInfoPage">
                    <img
                      className="Team-B-MentorInfoImages"
                      src={info.picture}
                      alt="Logo"
                      />
                    <div key={info.id}>
                      <div className="Team-B-Name"> {info.firstName}</div>
                      <br></br>
                      <div className="Team-B-AboutMe">
                        <div>{info.bio}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
              ></MentorInfo>
            <Reviews
              ReviewsInfo={this.ReviewsInfo}
              Reviews={this.state.mentors.map(function (review) {
                return (
                  <div>
                    <div className="Team-B-Reviews" key={review.id}>
                      <div>Review by {review.firstName}</div>
                      <div>{review.review}</div>
                    </div>
                    <br></br>
                  </div>
                );
              })}
              ></Reviews>
           
          </div>
        </div>
        {/* <ChatBox></ChatBox> */}
      </div>
    );
  }
}
