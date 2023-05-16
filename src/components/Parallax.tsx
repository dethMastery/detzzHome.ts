interface Props {
  bg: string
  children?: string | JSX.Element | JSX.Element[]
}

const Parallax = (props: Props) => {
  return (
    <div className='w-full h-[30vh] !bg-fixed !bg-center !bg-cover !bg-no-repeat' style={{background: `url(${props.bg})`}}>
      {props.children}
    </div>
  )
}

export default Parallax