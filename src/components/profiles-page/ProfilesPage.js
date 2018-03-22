import React, { Component } from "react";
import ProfileCard from "../ProfileCard";


class ProfilesPage extends Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=3")
      .then(data => {
        return data.json();
      })
      .then(data => data.results)
      .then(data => this.setState({ profiles: data }));
  }

  render() {
    return this.state.profiles.map((profile, i) => {
      console.log(profile);
      return (
        <div key={i}>
          <ProfileCard profile={profile} />{" "}
        </div>
      );
    });
  }
}

export default ProfilesPage;

//  <li key={i}>{profile.name.first}</li>
// )};

// this.state.profiles.map((profile, i) => {return
// <li key={i}>{profile.name.last}</li>
// )};

// {this.state.profiles.map((profile, i) =>
// <li key={i}>{profile.contact}</li>
// )};

// </div>
