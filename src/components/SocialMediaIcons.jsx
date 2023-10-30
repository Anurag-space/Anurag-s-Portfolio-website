import { twitterIcon, linkedinIcon, githubColor } from '../assets'
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/anurag-kumar-11a685219/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="object-fit h-[34px] w-8"
          alt="linkedin-link"
          src={linkedinIcon}
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="object-scale-down h-10 w-10"
          alt="twitter-link"
          src={twitterIcon}
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Anurag-space"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="object-scale-down h-10 w-10"
          alt="github-link"
          src={githubColor}
        />
      </a>
    </div>
  )
}

export default SocialMediaIcons
