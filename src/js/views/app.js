import './../../styles/app.css';

function App() {
  return (
    <main className="container">
      <h1>👌 News</h1>
      <div className="gallery">
        <article className="card">
          <div className="card__img">
            <img
              alt="A Super Blood Moon Is Nicer Than It Sounds"
              src="https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_1200x685_crop_center-center_82_line/458227/lunar-eclipse-blood-moon.jpg"
            />
          </div>

          <h4 className="card__title">
            <a
              href="https://www.planetary.org/the-downlink/a-super-blood-moon-is-nicer-than-it-sounds"
              target="_blank"
              rel="noreferrer"
            >
              A Super Blood Moon Is Nicer Than It Sounds
            </a>
          </h4>
          <p>
            Find out what a super blood Moon is, and celebrate a milestone in Mars exploration.
          </p>
        </article>
        <article className="card">
          <div className="card__img">
            <img
              alt="Solar Cruiser, NASA's Large Solar Sail Test"
              src="https://apod.nasa.gov/apod/image/1101/NanoSailD900.jpg"
              rel="noreferrer"
            />
          </div>

          <h4 className="card__title">
            <a
              href="https://www.planetary.org/space-missions/solar-cruiser"
              target="_blank"
              rel="noreferrer"
            >
              Solar Cruiser, NASA's Large Solar Sail Test
            </a>
          </h4>
          <p>
            The biggest solar sail yet will create an artificial orbit between the Earth and Sun.
          </p>
        </article>
        <article className="card">
          <div className="card__img">
            <img
              alt="NEA Scout, NASA's Solar Sail Mission to an Asteroid"
              src="https://apod.nasa.gov/apod/image/2101/AsteroidStreak_hst_960.jpg"
            />
          </div>

          <h4 className="card__title">
            <a
              href="https://www.planetary.org/space-missions/nea-scout"
              target="_blank"
              rel="noreferrer"
            >
              NEA Scout, NASA's Solar Sail Mission to an Asteroid
            </a>
          </h4>
          <p>NEA Scout will use a solar sail to leave the Moon's orbit and visit a near-Earth asteroid.</p>
        </article>
        <article className="card">
          <div className="card__img">
            <img
              alt="The companions of the planets"
              src="https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_1200x1242_crop_center-center_82_line/io-transit-of-jupiter.jpg"
            />
          </div>

          <h4 className="card__title">
            <a
              href="https://www.planetary.org/the-downlink/the-companions-of-the-planets"
              target="_blank"
              rel="noreferrer"
            >
              The companions of the planets
            </a>
          </h4>
          <p>
            Turn your minds to the moons of our solar system, the missions to explore them, and the awe they inspire in us.
          </p>
        </article>
        <article className="card">
          <div className="card__img">
            <img
              alt="Seeking Small Worlds"
              src="https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_1200x675_crop_center-center_82_line/456145/last-look-at-bennu-high-contrast.jpg"
            />
          </div>

          <h4 className="card__title">
            <a
              href="https://www.planetary.org/the-downlink/seeking-small-worlds"
              target="_blank"
              rel="noreferrer"
            >
              Seeking Small Worlds
            </a>
          </h4>
          <p>
            A spacecraft leaves one asteroid as planetary defense experts turn to others.
          </p>
        </article>
      </div>
    </main>
  );
}

export default App;
