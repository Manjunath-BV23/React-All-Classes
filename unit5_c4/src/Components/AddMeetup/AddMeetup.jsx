// User should be able to add/create new meetups 

import axios from "axios";
import { useState } from "react";

export const AddMeetup = () => {

  const [meetups, setMeetups] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    theme: "",
    description: "",
    image: "",
  })

  const handleChange = (e) => {
      const{className, value} = e.target;

      setMeetups({
        ...meetups,
        [className]:value,
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/meetups", meetups).then(() => {
      console.log("Done")
    })
  }

  
  return (
    <div className="addMeetupContainer">
      <form onSubmit={handleSubmit}>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input type="text" className="title" value={meetups.title} onChange={handleChange} required />
        <label>Location</label>
        <select className="location" value={meetups.location} onChange={handleChange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          value={meetups.date}
          className="date"
          onChange={handleChange}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          value={meetups.time}
          onChange={handleChange}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select value={meetups.theme} className="theme" onChange={handleChange}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          value={meetups.description}
          className="description"
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          value={meetups.image}
          className="image"
          onChange={handleChange}
          required
        />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
