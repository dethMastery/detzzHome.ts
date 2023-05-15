import TAILWIND_CLASS from "../../constants/tailwinds.class"

const NotFound = () => {
  const returnButton = () => {
    history.back()
  }

  return (
    <div className={`${TAILWIND_CLASS.HEADER_BOX} !flex-col`}>
      <div className="container bg-whitesmoke text-pastel-black p-8 w-auto rounded mt-[-10rem]">
        <h1 className={`${TAILWIND_CLASS.HEADING.XXXL} !py-2`}>
          ERROR 404
        </h1>
        <h3 className={`${TAILWIND_CLASS.HEADING.XL} !py-2 mb-4 underline`}>
          FILE NOT FOUND
        </h3>
        <button onClick={returnButton} className={`bg-living-coral text-whitesmoke ${TAILWIND_CLASS.BUTTON}`}>
          Go Back
        </button>
      </div>
    </div>
  )
}

export default NotFound