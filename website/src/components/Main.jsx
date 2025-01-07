function Main() {
    return (
        <>
            <main>
                <div className="pictureContainer">
                    <img
                        className="indexPic"
                        src="pictures/StopMotionGif4.gif"
                        alt="WelcomeGif"
                    />
                </div>

                <section>
                    {/*  prettier-ignore   */}
                    <p className="bodytext">
                        <span className="highlightGrey">I'm Ben,</span> 
                        a .NET developer in the making with a passion for creating systems. 

                        From orchestrating the perfect symphony of code to fine-tuning digital infrastructures, 
                        I bring my background in designing soundscapes and arrangements within 
                        music production to the world of tech. 
                
                        My goal? 
                        Becoming a maestro of .NET, turning cacophony into harmony, one line of code at a time.
                    </p>
                </section>

                <div className="conductContainer">
                    <img className="floating-conduct" src="pictures/conduct.png" alt="Conductor Image"/>
                </div>

                <section>
                    {/*  prettier-ignore   */}
                    <p className="bodytext">
                        As long as I can remember, I've always been surrounded by creative elements. 
                        So there's no coincidence I tend to gravitate towards anything that involves creativity. 

                        <img className="floating-note" src="pictures/music.png" alt="Music Note" />  
                
                        Whether it was being around by brilliant musicians growing up to participating in various music production-teams, I've always thrived in the midst of creation. 

                        After five vibrant years as a sound designer in Stockholm, I was curious if my creativity could evolve and translate into something else. 
                        It sure did. 
                        <img className="floating-cloud" src="pictures/cloud.png" alt="Cloud Image"/>  
                
                        I experience the same kind of flow in programming as I do in creating music; the perception of time is out the window and I'm in this bubble of curiosity and play. 
                        Chasing a vision. 

                        My first leap into the world of ones and zeros is completing a two year education as a .NET developer at Nackademin, Stockholm. 
                        I am about six months in and this is what I've been doing so far: 
                    </p>
                </section>


                <section class="projectsContainer">
                    <article class="project">
                      <h2>"Laguna Matata Hotel"</h2>
                      <p>
                        The project involved creating a user-friendly application and
                        database to manage bookings for a fictional hotel or guesthouse
                        <span class="highlightGreySmall">
                          (there were, unfortunately, no extra points awarded for coming up
                          with a clever name for the hotel.)
                        </span>
                      </p>

                      <p>
                        The application handles room management (single and double rooms),
                        customer registration and updates, bookings (including search and
                        prevention of double bookings), cancellation and modification of
                        bookings, and payment handling. The technical requirements include
                        using Windows Forms for the interface, Entity Framework for database
                        interactions, and ensuring the solution is OOP and
                        functions without errors.
                      </p>

                      <a
                        class="hyperlink"
                        href="https://github.com/benjenner/Laguna-Matata.git"
                        >GitHub link</a
                      >
                      <p></p>
                    </article>

                    <article class="project">
                      <h2>"Shotgun"</h2>
                      <p>
                        For this school project, I created a game where you play against an
                        automated opponent. The goal is to shoot your opponent while they
                        try to block. Both players start without any shots and must "Load"
                        to get ammunition. If you collect three shots, you can use "Shotgun"
                        to win instantly.
                      </p>
                      <p>
                        In the game, various scenarios can occur: if both players load, they
                        both get a shot; if one player loads while the other blocks, the
                        loader gets a shot; if both block, nothing happens; if one player
                        shoots while the other blocks, the shooter loses a shot; if both
                        shoot, they both lose a shot; and if one player shoots while the
                        other loads, the shooter wins.
                      </p>
                      <p>
                        Key requirements include displaying each player's shots, not
                        allowing shooting without ammunition, clearly indicating when a
                        player has won and providing an option to play again, and allowing
                        "Shotgun" only if a player has at least three shots. The code must
                        be OOP and the game should run smoothly.
                      </p>
                      <p></p>

                      <a class="hyperlink" href="https://github.com/benjenner/Shotgun.git"
                        >GitHub link</a
                      >
                      <p></p>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Main;
