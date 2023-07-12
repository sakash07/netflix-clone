import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMAxwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcCAwgBBP/EADkQAQABAAcGBAIGCwAAAAAAAAABAgMEBhek0gcRMVWR0QVEUaEWQhITIUNScTM0QUVTVHKBgpKx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALxEGxduJz3J1+gxduJz3J1+gE5EGxduJz3J1+gxduJz3J1+gE5EGxduJz3J1+gxduJz3J1+gE5EGxduJz3J1+gxduJz3J1+gE5EGxduJz3J1+gxduJz3J1+gE5EGxduJz3J1+gxduJz3J1+gE5EGxduJz3J1+gxduJz3J1+gE5EGxduJz3J1+gxduJz3J1+gE5EGxduJz3J1+gxduJz3J1+gE5EGxduJz3J1+gxduJz3J1+gE5EGxduJz3J1+gxduJz3J1+gE5EGxduJz3J1+gxduJz3J1+gE5EGxduJz3J1+gByqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC7aVwvCZ4eGUIj+ql3Y4f+G/s8ModaXdd1Hw+zx8kdGcWSpjhQgFG4eWCeHhlHrS7vI2b2Olw8OjrS7r1iz1UfJDL6qr/AAQCiI2aWWf3fHWl3J2Y2eeFg96XdfH1dD8MH0KPpAKHjZfUz5H/AL3bKOyuonjYveV6/Rj0jobo9IBR1HZPZp8n7z3bY2S2SfJ+8912bo9IN0egKWo7IrHxmy/23z3bKOyGxT5SOs91y7o9HoKbwfsP8rH+092FLZBY48rHWe65wFKTsissT9lk3/5T3aqWySzx5SN35z3Xhuj0ebo9AUZT2T1McLHHWWinsrq44WP3nuvrdHpBuj0gHP1LZhEeS6TPdqpbNaMT+p+8uhvo0Z+WOjGauhPGhHQHPOHFGONi957vJ2d1ccbD70u7ob6iq/h0ejGbLUT93R6A55+AKmONhjrSe/Admj7JsMb/AM6ToKbDZ541cMZ8Os0/dUegKB+BrDHkI60u4vul4VZZj9HHQB9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">This is a test description</h1>
      </div>
      <div className="banner--fadebottom" />
    </header>
  );
}

export default Banner;
