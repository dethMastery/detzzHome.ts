import TAILWIND_CLASS from "../constants/tailwinds.class"

const Footer = () => {
  return (
    <div className="w-full py-8 text-center bg-gradient-to-t from-[black] from-0% to-[transparent] to-120% fixed bottom-0 md:flex md:flex-row">
      <p className="mb-2 w-full text-center md:text-left md:m-0 md:pl-8">
        designed & made w/ 🤍 by <a href="https://suphakit.net/" className={TAILWIND_CLASS.LINK}>Suphakit P.</a>
      </p>
      <p className="mt-2 w-full text-center md:text-right md:m-0 md:pr-8">
        &copy; 2023 <a href="https://suphakit.net/" className={TAILWIND_CLASS.LINK}>Suphakit P.</a> All Right Reserved.
      </p>
    </div>
  )
}

export default Footer