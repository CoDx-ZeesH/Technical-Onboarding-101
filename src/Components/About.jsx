/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/pexels-thepaintedsquare-583847.jpg";

const imageAltText = "";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm Mohammad Zeeshan, a tech enthusiast with a knack for leadership and a deep interest in AI/ML. My technical acumen extends to web development, demonstrating my adaptability in the tech sphere. My love for AI/ML mirrors my forward-thinking mindset and my aspiration to stay at the cutting edge of technology. My leadership qualities empower me to steer teams towards their objectives effectively. In essence, I represent a harmonious blend of leadership, technical expertise, and an insatiable thirst for knowledge.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "AI/ML Engineer",
  "MLSA BETA",
  "Team Leader",
  "Full Stack Developer",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
