import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function About() {

  return (
    <div className="w-full flex justify-center gap-5">
      <div className="w-150">
        <h1 className="text-4xl font-semibold">Hi I'am Bart Batiancila</h1>
        <p className="mt-3">I've been dedicated to learning software development for almost a year now, studying every night while working a full-time job outside of tech. Whenever I have spare time during the day, I make the most of it to continue learning. My journey so far has been a mix of fun, frustration, and fulfillment — and I believe that’s what makes this field so rewarding. I'm now ready to take the next step, grow professionally, and contribute meaningfully in the world of tech.</p>
        <div className='flex items-center gap-2 mt-4'>
          <a href="https://github.com/bartue-dev" target="_blank" className='tooltip' data-tip="github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/bart-batiancila-316a52322/" target="_blank" className='tooltip' data-tip="linkedin">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" className='tooltip' data-tip="email">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </div>
      <div className="w-90  relative hidden lg:block">
        <img src="/SD2.jpg" alt="image" className="w-full rotate-4 rounded-md" />
        <img src="/SD1.jpg" alt="image" className="w-full rotate-4 rounded-md absolute top-25 -right-15" />
      </div>
    </div>
  )
}