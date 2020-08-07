import React from "react";
import {Link} from "react-router-dom";

export default function NewParticipant() {
  return (
    <section className="section">
      <h1> Create Participant</h1>
            <div className="container">
            <form id="participant">
                
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" name="name" id="name"></input>
                <br></br>
                <label htmlFor="email">Email Id</label>
                <input type="text" name="email" className="form-control" id="email"></input>
                <br></br>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" className="form-control" id="address"></input>
                <br></br>
                <label htmlFor="role">Choose a role:</label>
                <select name="role" id="role" form="carform">
                    <option value="Interviewer">Interviewer</option>
                    <option value="Interviewee">Interviewee</option>
                </select><br></br>
                <div className="button" id="btn">
                    <button type="submit" name="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <div className="text-center">
                <Link to="/">Interview List</Link><br></br>
                <Link to="/participants">Participant List</Link>        
            </div>
             
        </div>
   </section>
  );
}