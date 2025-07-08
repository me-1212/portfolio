import AboutCount from "./AboutCount.tsx";
import "../css/About.css";
import { AboutCountData } from "../data/AboutCountData.tsx";

function About() {
  return (
    <>
      <div className="about-info">
        <img src="photo.jpeg" />
        <div className="about-para">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel
            illum asperiores dignissimos cumque quibusdam et fugiat voluptatem
            nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi
            corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Incidunt totam dolorum, ducimus
            obcaecati, voluptas facilis molestias nobis ut quam natus similique
            inventore excepturi optio ipsa deleniti fugit illo. Unde, amet!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo
            necessitatibus perspiciatis! Aperiam perferendis labore temporibus,
            eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit
            libero tenetur neque consequatur ea.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel
            illum asperiores dignissimos cumque quibusdam et fugiat voluptatem
            nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi
            corporis laudantium adipisci soluta?
          </p>
        </div>
      </div>
      <div className="about-count">
        {AboutCountData.map((cnt) => (
          <AboutCount key={cnt.id} value={cnt.value} label={cnt.label} />
        ))}
      </div>
      <div className="div-sof">
        <p>Expertise on softwares</p>
        <ul className="list-sof">
          <li>
            <p>AutoCad</p>
          </li>
          <li>
            <p>ETABS</p>
          </li>
          <li>
            <p>ANSYS</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
