import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import aboutImg from "../../images/About_CS.jpg";
import NavBar from "../../components/Navbar/Navbar";
import { PhoneAndroid, WhatsApp, Instagram, Email } from "@mui/icons-material";
export default function About() {
  return (
    <section>
      <NavBar />
      <div className="container">
        <div className="section-title">
          <h2 style={{ textAlign: "center", paddingBottom: "2rem" }}>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2
              className="about-title fs-26 ls-1"
              style={{ textAlign: "center", paddingTop: "2rem" }}
            >
              About Pusthak
            </h2>
            <p className="fs-17">
              Our book searching web app lets you easily find books by title,
              author, or genre. With a user-friendly interface, it streamlines
              your search process. Whether you're looking for fiction,
              non-fiction, or rare titles, you'll discover the perfect book
              effortlessly.
            </p>
            <p className="fs-17">
              In addition to searching, you can learn about each book through
              detailed summaries. Stay informed with author bios and publication
              histories, enhancing your reading experience. Our app ensures
              you're well-equipped with all the information needed to choose
              your next great read.
            </p>
          </div>
        </div>
      </div>

      <div className="Contacts">
        <h2>Contact us</h2>
        <Link to={"https://wa.me/919482265843"}>
          <div>
            <PhoneAndroid fontSize="large"/> or <WhatsApp fontSize="large"/> +91 9482265843
          </div>
        </Link>
        <Link to={"mailto:akarshagowda15@gmail.com"}>
          <div>
            <Email fontSize="large"/> info@pusthak.lib.in
          </div>
        </Link>
        <Link to={"https://ig.me/m/{im_cool_minded}"}>
          <div>
            <Instagram fontSize="large"/> @Pusthak
          </div>
        </Link>
      </div>
      <br />
    </section>
  );
}
