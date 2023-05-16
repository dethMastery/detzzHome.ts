import { useTranslation } from 'react-i18next'
import TAILWIND_CLASS from '../../constants/tailwinds.class'
import Parallax from '../../components/Parallax'
import profileData from '../../modules/userData.json'

const Home = () => {
  const { t } = useTranslation()

  const CARD_PROFILE =
    'w-[15rem] h-[15rem] rounded-[100%] border-[5px] border-living-coral m-4 mx-auto !mt-[-7.5rem] !bg-center !bg-cover !bg-no-repeat duration-300 hover:scale-[1.1]'

  return (
    <div className="pb-16">
      {/* Top Card */}
      <div
        className={`${TAILWIND_CLASS.HEADER_BOX} !bg-fixed !bg-center !bg-cover !bg-no-repeat`}
        style={{ background: `url(${profileData.Index.bg})` }}
        id="Index"
      >
        <div
          className={`${TAILWIND_CLASS.MIDDLE_FLEX} bg-overlay w-full h-full backdrop-blur-[5px]`}
        >
          <div className="w-[20rem] h-auto bg-whitesmoke text-pastel-black rounded fadeIn">
            <div
              className={CARD_PROFILE}
              style={{
                background: `url(${profileData.Index.card.profileIMG})`,
              }}
            ></div>

            <div className="p-4 w-auto mx-auto text-center">
              <h3 className={`${TAILWIND_CLASS.HEADING.XXXL} font-bold !py-4`}>
                {profileData.Index.card.name}
              </h3>
              <p className="w-[80%] mx-auto mb-4 text-[#777a7a]">
                {profileData.Index.card.quote}
              </p>
              <img src="https://spotify-recently-played-readme.vercel.app/api?user=5zl2fr8q61bys24qbjwzgsriv&count=1" alt="Recently played" />
            </div>
            <a
              href={profileData.Index.card.contact}
              className="w-full block py-4 duration-300 bg-living-coral text-whitesmoke rounded-b hover:opacity-60"
            >
              {t('card_button')}
            </a>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="w-full">
        <div id="about" className="!py-8 mb-4 mx-auto w-[90%] md:w-[80%]">
          <h1
            className={`${TAILWIND_CLASS.HEADING.XXXL} !py-4 underline decoration-dashed`}
          >
            {t('about_heading')}
          </h1>

          <div className="w-full">
            {/* Education Profile */}
            <div className='mb-8'>
              <h3 className={`${TAILWIND_CLASS.HEADING.XXL} ml-4`}>
                {t('about_edu_profile')}
              </h3>
              <div className="flex flex-row flex-wrap gap-4 justify-center text-center">
                {profileData.About.eduProfile.reverse().map((edu) => {
                  return (
                    <div
                      className="w-[80%] flex flex-col bg-whitesmoke text-pastel-black rounded md:w-[40%]"
                      key={edu.id}
                    >
                      <div className="p-4 h-full">
                        {edu.class !== '' ? <p>{t(edu.class)}</p> : <p>-</p>}
                        <h2 className={`${TAILWIND_CLASS.HEADING.XXL} !py-2`}>
                          {t(edu.name)}
                        </h2>
                        <p>{t(edu.grade)}</p>
                      </div>
                      <div className="p-4 bg-[#c8c8c8] rounded-b">
                        {t(edu.year)}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Skills */}
            <h3
              className={`${TAILWIND_CLASS.HEADING.XXL} ml-4 !py-0 text-twitter !text-whitesmoke`}
            >
              {t('about_skills.heading')}
            </h3>

            {/* Programing Skill */}
            <div className="mb-4">
              <h4 className={`${TAILWIND_CLASS.HEADING.XL} ml-8`}>
                {t('about_skills.programming')}
              </h4>
              <div className="flex flex-row flex-wrap gap-2 w-auto leading-relaxed justify-center text-center">
                {profileData.About.skills.Programming.map((skill) => {
                  const badgeClass = `${skill.color} p-3 rounded`

                  return (
                    <div
                      key={skill.id}
                      className={badgeClass}
                      style={{ background: skill.bg }}
                    >
                      {skill.name}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Composing Skill */}
            <div className="mb-4">
              <h4 className={`${TAILWIND_CLASS.HEADING.XL} ml-8`}>
                {t('about_skills.composing')}
              </h4>
              <div className="flex flex-row flex-wrap gap-2 w-auto leading-relaxed justify-center text-center">
                {profileData.About.skills.Composing.map((compose) => {
                  const badgeClass = `${compose.bg} ${compose.color} p-3 rounded`

                  return (
                    <div key={compose.id} className={badgeClass}>
                      {compose.name}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <Parallax bg={profileData.Index.bg} />

        {/* Contact */}
        <div
          id="contact"
          className="py-8 mb-8 mx-auto w-[90%] md:w-[80%] bg-facebook bg-twitter bg-instagram !bg-[transparent]"
        >
          <h1
            className={`${TAILWIND_CLASS.HEADING.XXXL} !py-4 underline decoration-dashed`}
          >
            {t('contact_heading')}
          </h1>
          <p className={`${TAILWIND_CLASS.HEADING.XL} !py-2 pl-8`}>
            {t('contact_subHeading')}
          </p>
          <ul className="mt-4 text-center">
            {profileData.Contact.map((contact) => {
              const listingClass = `block ${contact.bg} ${contact.color} ${TAILWIND_CLASS.BUTTON} ${TAILWIND_CLASS.HOVER_SCALE}`
              return (
                <li key={contact.id} className="inline-block mx-4">
                  <a href={contact.link} className={listingClass}>
                    {t(contact.name)}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
