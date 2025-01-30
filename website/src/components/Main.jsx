import React from "react";
import ScrollAnimation from "./ScrollAnimation";

function Main() {
  return (
    <>
      <main>
        <ScrollAnimation>
          <div className="pictureContainer">
            <img
              className="indexPic"
              src="pictures/StopMotionGif4.gif"
              alt="WelcomeGif"
            />
          </div>
        </ScrollAnimation>

        <section>
          <p className="bodytext">
            <ScrollAnimation>
              <span className="highlightGrey">
                I'm Benjamin,{"\n"}
                {"\n"}
              </span>
            </ScrollAnimation>
            <ScrollAnimation>
              a .NET developer in the making with a passion for creating
              systems.{"\n"} {"\n"}
            </ScrollAnimation>
            <ScrollAnimation>
              From orchestrating a symphony of code to fine-tuning digital
              infrastructures, I bring my background in designing soundscapes
              and arrangements within music production to the world of tech.{" "}
            </ScrollAnimation>
            {"\n"}
            <ScrollAnimation>My goal? {"\n"}</ScrollAnimation>
            {"\n"}
            <ScrollAnimation>
              Becoming a <span className="highlightItalic">maestro</span> of
              .NET, turning cacophony into harmony, one line of code at a time.
            </ScrollAnimation>
          </p>
        </section>

        <ScrollAnimation>
          <div className="conductContainer">
            <img
              className="floating-conduct"
              src="../pictures/conduct.png"
              alt="Conductor Image"
            />
          </div>
        </ScrollAnimation>

        <section>
          <p className="bodytext">
            <ScrollAnimation>
              Whether it was being around brilliant musicians growing up, to
              participating in various music production-teams, I've always
              thrived in the midst of creation.{"\n"} {"\n"}
            </ScrollAnimation>
            <ScrollAnimation>
              <img
                className="floating-note"
                src="pictures/music.png"
                alt="Music Note"
              />{" "}
              {"\n"}
              {"\n"}
            </ScrollAnimation>

            <ScrollAnimation>
              After five vibrant years as a sound designer in Stockholm, I was
              curious if my creativity could evolve and translate into something
              else. {"\n"}
            </ScrollAnimation>
            <ScrollAnimation>
              It sure did. {"\n"}
              {"\n"}
            </ScrollAnimation>
            <ScrollAnimation>
              <img
                className="floating-cloud"
                src="pictures/cloud.png"
                alt="Cloud Image"
              />{" "}
              {"\n"}
            </ScrollAnimation>
            <ScrollAnimation>
              {"\n"}I experience the same kind of flow in programming as I do in
              creating music; the perception of time is out the window and I'm
              in this bubble of curiosity and play. {"\n"}
              Chasing a vision. {"\n"}
            </ScrollAnimation>
            <ScrollAnimation>
              {"\n"}
              My first leap into the world of ones and zeros is completing a two
              year education as a .NET developer at{" "}
              <a
                className="hyperlinkBodyText"
                href="https://nackademin.se/utbildningar/programutvecklare-net/"
                target="_blank"
              >
                Nackademin
              </a>
              , Stockholm. I am about six months in and this is what I've been
              doing so far:
            </ScrollAnimation>
          </p>
        </section>

        <section className="projectsContainer">
          <ScrollAnimation>
            <article className="project">
              <h2>"Laguna Matata Hotel"</h2>
              <ScrollAnimation>
                <div className="projectImageContainer">
                  <img
                    className="floating-flamingo"
                    src="pictures/flamingo.png"
                    alt="Flamingo Image"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <p>
                  The project involved creating a user-friendly application and
                  database to manage bookings for a fictional hotel or
                  guesthouse.
                </p>

                <p>
                  <span className="highlightGreySmall">
                    (There were, unfortunately, no extra points awarded for
                    coming up with a clever name for the hotel.)
                  </span>
                </p>
              </ScrollAnimation>

              <ScrollAnimation>
                <a
                  className="hyperlink"
                  href="https://github.com/benjenner/Laguna-Matata.git"
                  target="_blank"
                >
                  GitHub link
                </a>
              </ScrollAnimation>
              <p></p>
            </article>
          </ScrollAnimation>
          <article className="project">
            <ScrollAnimation>
              <h2>"Shotgun"</h2>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="projectImageContainer">
                <img
                  className="floating-shotgun"
                  src="pictures/shotgun.png"
                  alt="Shotgun Image"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                A game designed for a school project, where the goal was to
                optimize the automated opponent's intelligence based on game
                logic.
              </p>
              <p>
                In the game, players' actions determine the outcomes: loading,
                blocking, or shooting lead to different results, creating a
                simple yet strategic logic.
              </p>
            </ScrollAnimation>

            <ScrollAnimation>
              <a
                className="hyperlink"
                href="https://github.com/benjenner/Shotgun.git"
                target="_blank"
              >
                GitHub link
              </a>
              <p></p>
            </ScrollAnimation>
          </article>
        </section>
        <ScrollAnimation>
          <section className="skillsContainer">
            <h2>My tech stack</h2>
            <div className="icon">
              <img
                className="icon"
                src="pictures/csharptranstp.png"
                alt="C# logo"
              />
            </div>
            <div className="icon">
              <img
                className="icon"
                src="pictures/sql-logo.png"
                alt="SQL logo"
              />
            </div>
            <div className="icon">
              <img
                className="icon"
                src="pictures/css3-logo-240.png"
                alt="CSS logo"
              />
            </div>

            <div className="icon">
              <img
                className="icon"
                src="pictures/html5-logo-240.png"
                alt="HTML5 logo"
              />
            </div>
            <div className="icon">
              <img
                className="icon"
                src="pictures/javascript-logo-240.png"
                alt="JS logo"
              />
            </div>
            <div className="icon">
              <img
                className="icon"
                src="pictures/typescript-logo-240.png"
                alt="TS logo"
              />
            </div>
            <div className="icon">
              <img
                className="icon"
                src="pictures/nodejs-logo-240.png"
                alt="NodeJS logo"
              />
            </div>

            <div className="icon">
              <img
                className="icon"
                src="pictures/react-logo-240.png"
                alt="React logo"
              />
            </div>
            <div className="icon">
              <img
                className="icon"
                src="pictures/angular-logo-240.png"
                alt="Angular logo"
              />
            </div>
            <div className="icon">
              <img
                className="icon"
                src="pictures/mongodb-logo-240.png"
                alt="MongoDb logo"
              />
            </div>
            <div className="icon">
              <img
                className="icon"
                src="pictures/git-logo-240.png"
                alt="Git logo"
              />
            </div>
            <div className="icon">
              <img
                className="icon"
                src="pictures/docker-logo-240.png"
                alt="Docker logo"
              />
            </div>
          </section>
        </ScrollAnimation>

        <section>
          <ScrollAnimation>
            <p className="bodytextEnd">
              I'm currently seeking an internship between november 2025 and may
              2026. I would love to bring something to your table.
            </p>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="projectImageContainer">
              <img
                className="floating-cookie"
                src="pictures/cookie.png"
                alt="Shotgun Image"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <a
              className="hyperlinkContact"
              href="mailto:benjaminjennersjo@outlook.com"
            >
              Email me
            </a>
          </ScrollAnimation>
          <ScrollAnimation>
            <a className="hyperlinkContact" href="tel:+46706196987">
              Call me
            </a>
          </ScrollAnimation>
        </section>
      </main>
    </>
  );
}

export default Main;
