import { useTranslation } from 'react-i18next'
import TAILWIND_CLASS from '../../constants/tailwinds.class'

import Parallax from '../../components/Parallax'
import profileData from '../../modules/userData.json'

const JoinedEvents = () => {
  const { t } = useTranslation()

  return (
    <div className="pb-16">
      <Parallax bg={profileData.Index.bg} height="40vh" blur={true}>
        <div className="w-full h-full flex flex-row justify-center items-center text-center text-whitesmoke">
          <h1 className={`${TAILWIND_CLASS.HEADING.XXXL}`}>
            {t(profileData.Events.heading)}
          </h1>
        </div>
      </Parallax>

      <div className="w-[80%] mx-auto p-4 m-8 mb-12 bg-whitesmoke text-pastel-black rounded text-center callIn duration-300">
        <p className={`${TAILWIND_CLASS.HEADING.XL} mt-4`}>
          {t(profileData.Events.desp)}
        </p>

        {/* Joined Events */}
        <div className="w-full mb-8">
          <h2
            className={`${TAILWIND_CLASS.HEADING.XXL} underline decoration-wavy decoration-facebook`}
          >
            {t(profileData.Events.topic.events)}
          </h2>
          <div className="w-full flex flex-row flex-wrap justify-center text-center">
            {profileData.Events.joined.map((joinEV) => {
              return (
                <div
                  className="w-[22rem] bg-overlay text-whitesmoke rounded"
                  key={joinEV.id}
                >
                  <div className={`${TAILWIND_CLASS.BG_CENTER} h-[12rem] w-full rounded-t`} style={{background: `url(${joinEV.image})`}}>

                  </div>
                  <div className="w-full">
                    <div className={`${TAILWIND_CLASS.HEADING.XL} bg-overlay !py-4 !px-4`}>{joinEV.name}</div>
                    <div className="p-4">{joinEV.desp}</div>
                    <div className="rounded-b bg-overlay p-4">
                      {joinEV.date}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certificates */}
        <div className="w-full mb-4">
          <h2
            className={`${TAILWIND_CLASS.HEADING.XXL} underline decoration-wavy decoration-facebook`}
          >
            {t(profileData.Events.topic.cert)}
          </h2>
          <div className="w-full flex flex-row flex-wrap justify-center text-center">
            {profileData.Events.cert.map((cert) => {
              return (
                <div
                  className="w-[22rem] bg-overlay text-whitesmoke rounded"
                  key={cert.id}
                >
                  <div className={`${TAILWIND_CLASS.BG_CENTER} h-[12rem] w-full rounded-t`} style={{background: `url(${cert.image})`}}>

                  </div>
                  <div className="w-full">
                    <div className={`${TAILWIND_CLASS.HEADING.XL} bg-overlay !py-4 !px-4`}>{cert.name}</div>
                    <div className="p-4">{cert.desp}</div>
                    <div className="rounded-b bg-overlay p-4">
                      {cert.date}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinedEvents
