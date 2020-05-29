import React from "react";
import {Link} from "react-router-dom";

export default function Participants() {
  return (
    <section className="section">
        <h1> Participants </h1>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Role</th>
          </tr>
        </thead>
    
        </table>
        
        <div className="text-center">
            <Link to="/">Interview List</Link>
        </div>
    </section>
  );
}