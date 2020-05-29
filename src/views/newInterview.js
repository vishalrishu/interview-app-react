import React from "react";
import {Link} from "react-router-dom";

export default function NewInterview() {
  return (
    <section className="section">
      <h1> Schedule Interview</h1>
      <form id="interview_create">
        <div className="form-group">
            <label htmlFor="Desc">Description</label>
            <input className="form-control" type="text" name="desc" id="description"></input>
        </div>
        <div className="form-group">
            <label htmlFor="starttime">Start time</label>
            <input type="datetime-local" name="starttime" className="form-control" id="start_time"></input>
        </div>
        <div className="form-group">
            <label htmlFor="endtime">End time</label>
            <input type="datetime-local" name="endtime" className="form-control" id="end_time"></input>
        </div>
        <div className="form-group">
            <label htmlFor="participants">Participants</label>
            <input type="checkbox" id="participant" name="partcipant_id" value="Participant"></input>
        </div>

        <button type="submit" name="submit" className="btn btn-primary">Submit</button>
               
      </form>
      
      <div className="text-center">
        <Link to="/">Interview List</Link><br></br>
        <Link to="/participants">Participant List</Link>        
    </div>
   </section>
  );
}