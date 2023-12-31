import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./BookTable.css";
import Typewriter from "typewriter-effect";
const BookTable = () => {
  return (
    <div  className="container mt-5" >
          <Typewriter
              
      options={{
        strings: [
          "Book Informations"
         
          
        ],
        autoStart: true,
        loop: true,
                  deleteSpeed: 30,
        
      }}
          />
          <br></br>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Number of Pages</th>
            <th scope="col">Genre</th>
            <th scope="col">Date of Creation</th>
            <th scope="col">Author</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>181</td>
                      <td>Fiction
                          <br></br> Adventure
                          <br></br> Space Travel
                          <br></br> Mind biding
            </td>
            <td>2023/09/27</td> 
            <td>Achref Elarbi</td> 
          </tr>
        </tbody>
          </table>
          <br></br>
          <div className="Chap">
              <h2> Chapters</h2>
              Chapter 1 : 777 Days Gone <br></br>
              Chapter 2 : The village <br></br>
              Chapter 3 : Fight Or Die <br></br>
              Chapter 4 : I'm No Angel <br></br>
              Chapter 5 : Beyond The Dream : Manifesting The Impossible<br></br>
              Chapter 6 : Exploring The Uknown <br></br>
              Chapter 7 : Triumph Over Darkness<br></br>

          </div>
    </div>
  );
};

export default BookTable;
