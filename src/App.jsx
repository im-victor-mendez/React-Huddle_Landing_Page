import './App.scss'
import './style/Desktop.scss'
import './constants/fonts.scss'
import { motion } from "framer-motion";
import logo from "./assets/images/logo.svg";
import mockups from "./assets/images/illustration-mockups.svg";

function App() {
  return (
    <div className="App">
      <motion.img
      id='company'
      src={logo}
      alt=""

      whileHover={{
        rotate: 360
      }}
      />

      <article>
        <motion.img
        id='mockups'
        src={mockups}
        alt=""

        animate={{
          y: [0, 20, -20, 0]
        }}

        transition={{
          duration: 5, repeat: Infinity
        }}
      />

        <div id='text'>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities.
            You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion.
          </p>
          <motion.button
          whileHover={{
            scale: 1.5
          }}
          >Register</motion.button>
        </div>
      </article>

      <div id='social-medias'>
        <motion.a
        className='social-media'

        whileHover={{
          scale: 1.5
        }}
        >
          <ion-icon name="logo-facebook"></ion-icon>
        </motion.a>

        <motion.a
        className='social-media'
        
        whileHover={{
          scale: 1.5
        }}
        >
          <ion-icon name="logo-twitter"></ion-icon>
        </motion.a>
        
        <motion.a
        className='social-media'
        
        whileHover={{
          scale: 1.5
        }}
        >
          <ion-icon name="logo-instagram"></ion-icon>
        </motion.a>
      </div>
    </div>
  )
}

export default App
