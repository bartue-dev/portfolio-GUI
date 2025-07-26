import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

export default function Socials({size}:{ size: SizeProp} ) {
  
  return (
      <div className='flex items-center gap-2 mt-4'>
        <a href="https://github.com/bartue-dev" target="_blank" className='tooltip' data-tip="github">
          <FontAwesomeIcon icon={faGithub} size={size} />
        </a>
        <a href="https://www.linkedin.com/in/bart-batiancila-316a52322/" target="_blank" className='tooltip' data-tip="linkedin">
          <FontAwesomeIcon icon={faLinkedin} size={size} />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" className='tooltip' data-tip="email">
          <FontAwesomeIcon icon={faEnvelope} size={size} />
        </a>
      </div>
  )
}