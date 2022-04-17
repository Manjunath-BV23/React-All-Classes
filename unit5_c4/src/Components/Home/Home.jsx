import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get("http://localhost:8080/meetups").then(res =>{
      setData(res.data)
    })
  }

  return (
    <div className="homeContainer">
      {[]
        .filter((el) => { }) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={`add route here`} className="events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => { }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`/addMeetup`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)"
        }}>
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {data
            .map((el) => {
              return (
                <div style = {{
                  border: "1px solid ",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                
                }}>
                  <Link to={`add route here`} className="events">
                    <div className="title"> {el.title}</div>
                    <div className="location">{el.location}</div>
                    <div className="date">{el.date}</div>
                    <div className="time">{el.time}</div>
                    <div className="theme">{el.theme}</div>
                    <div className="description">{el.description}</div>
                    <img src = {`${el.image}`} style={{
                      width: "150px"
                    }} />

                    {/* Each event should have these elements/children (divs):
                      ex : title, theme, description, date, time, location, image(optional)
                      the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                  </Link>
                </div>
              );
            })}

        </div>
      </div>
    </div>
  );
};
