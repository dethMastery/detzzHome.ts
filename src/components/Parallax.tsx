interface Props {
  bg: string
  height?: string
  children?: string | JSX.Element | JSX.Element[]
}

const Parallax = (props: Props) => {
  return (
    <div
      className="w-full !bg-fixed !bg-center !bg-cover !bg-no-repeat"
      style={{
        background: `url(${props.bg})`,
        height: props.height != undefined ? props.height : `30vh`,
      }}
    >
      <div className="w-full h-full backdrop-blur-[5px] bg-overlay">
        {props.children}
      </div>
    </div>
  )
}

export default Parallax
