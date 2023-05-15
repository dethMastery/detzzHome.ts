import TAILWIND_CLASS from '../../constants/tailwinds.class'
import profileData from '../../modules/userData.json'

const Home = () => {
  const CARD_PROFILE =
    'w-[15rem] h-[15rem] rounded-[100%] border-[5px] border-living-coral m-4 mx-auto !mt-[-7.5rem] !bg-center !bg-cover !bg-no-repeat duration-300 hover:scale-[1.1]'

  return (
    <>
      <div
        className={`${TAILWIND_CLASS.HEADER_BOX}`}
        style={{ background: `url(${profileData.Index.bg})` }}
        id='Index'
      >
        <div
          className={`${TAILWIND_CLASS.MIDDLE_FLEX} bg-overlay w-full h-full backdrop-blur-[5px]`}
        >
          <div className="w-[20rem] h-auto bg-whitesmoke text-pastel-black rounded">
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
            </div>
            <a
              href={`mailto:${profileData.Index.card.contact_email}`}
              className="w-full block py-4 duration-300 bg-living-coral text-whitesmoke rounded-b hover:opacity-60"
            >
              Contact Me!
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
