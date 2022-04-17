import "./AddHouse.css"
import { useState } from "react";
import axios from "axios"

export const AddHouse = () => {
    const [house, setHouse] = useState({
        name: "",
        ownerName: "",
        address: "",
        areaCode: "",
        rent: "",
        preferredTenant: "",
        bachelor: "",
        married: "",
        image: ""
    })

    const handleChange = (e) => {
      console.log(e.target.value)
        const {className, value} = e.target;
        setHouse({
            ...house,
            [className]:value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/houses", house).then(() => {
            console.log("Done")
        })

    }
    return (
      <div className="addHouseContainer">
        <form onSubmit={handleSubmit}>
          <label>name</label>
          <input type="text" value = {house.name} onChange={handleChange} className="name"  required />
          <br />
          <label>ownerName</label>
          <input value={house.ownerName} onChange={handleChange} type="text" className="ownerName" required />
          <br />
          <label>address</label>
          <input value={house.address} onChange={handleChange} type="text" className="address" required />
          <br />
          <label>areaCode</label>
          <input value={house.areaCode} onChange={handleChange} type="text" className="areaCode" required />
          <br />
          <label>rent</label>
          <input value={house.rent} onChange={handleChange} type="text" className="rent" required />
          <br />
          <label>preferredTenant</label>
          <br />
          <label>bachelor</label>
          <input value = "bachelor" onChange={handleChange} type="checkbox" className="bachelor" />
          <br />
          <label>married</label>
          <input value = "married" onChange={handleChange} type="checkbox" className="married" />
          <br />
          <label>image</label>
          <input value={house.image} onChange={handleChange} type="text" className="image" required />
          <br />
          <input className="submitBtn" type="submit" />
        </form>
      </div>
    );
  };
  