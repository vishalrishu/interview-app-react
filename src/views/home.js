import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <section className="section">
      <h1> Interview List </h1>
      <Link to="/interviews/new">Create Interview</Link><br></br>
      
      <Link to="/participants/new">Create Participant</Link>
      
      {/* <Link to="/participant/new">Create Participant</Link> */}
       <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
       </table>
   </section>
  );
}