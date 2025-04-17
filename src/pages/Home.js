// src/pages/Home.js
import React from "react";
import Banner from "../components/Banner";
import campusImg from "../images/campus-2.jpg";
import studentImg from "../images/student.jpg";
import CardContainer from "../components/CardContainer";

const cardsData = [
  {
    title: "What to study",
    content: "We offer a range of high-quality courses, which include full-time, part-time, online and distance learning.",
    link: "/study",
    linkTitle: "Find out more",
  },

  {
    title: "International",
    content: "We are a career-focused institution, ranked in the world's top young 200 universities.",
    link: "#",
    linkTitle: "Join us",
  },
  {
    title: "Chat to our students and academics",
    content: "Want to know more about our courses, student life or East London? Talk to one of our student ambassadors or course leaders to learn more.",
    link: "#",
    linkTitle: "Start a chat now",
  },
];

const Home = () => {
  return (
    <div className="homepage">
      <Banner alt="This is alt text" coverImg={campusImg} title="Open Days" text="Sign up to book your open day." btnLink="#" btnText="Book open day" />
      <CardContainer title="Studying with us" cardsData={cardsData} />
      <div className="container homepage__columns">
        <div className="homepage__columns-image">
          <img alt="Student on campus" src={studentImg} />
        </div>
        <div className="homepage__columns-text">
          <h2>The Halden Careers Guarantee</h2>
          <p>
            At Halden, we not only promise an education; we guarantee a pathway to your future. With the Halden Careers Guarantee, you're not just choosing a
            university; you're choosing a life-changing journey that starts on day one to set you apart in a competitive world.
          </p>
          <a href="#" className="btn">
            Work while studying
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
