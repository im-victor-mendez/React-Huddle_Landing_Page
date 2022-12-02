import './App.scss'
import './style/Desktop.scss'
import './constants/fonts.scss'
import logo from "./assets/images/logo.svg";
import mockups from "./assets/images/illustration-mockups.svg";

function App() {
  return (
    <div className="App">
      <img id='company' src={logo} alt="" />

      <article>
        <img id='mockups' src={mockups} alt="" />

        <div id='text'>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities.
            You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion.
          </p>
          <button>Register</button>
        </div>
      </article>

      <div id='social-medias'>
        <a className='social-media'>
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a className='social-media'>
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
        <a className='social-media'>
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </div>
    </div>
  )
}

export default App
