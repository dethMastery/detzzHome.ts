interface Props {
  bg: string
  height?: string
  blur?: boolean
  children?: string | JSX.Element | JSX.Element[]
}

const Parallax = (props: Props) => {
  return (
    <div
      className="w-full !bg-fixed !bg-center !bg-cover !bg-no-repeat"
      style={{
        background: `url(${props.bg})`,
        height: (props.height !== undefined) ? props.height : `30vh`,
      }}
    >
      <div
        className="w-full h-full bg-overlay"
        style={{ zIndex: 'auto', backdropFilter: (props.blur == undefined) ? `blur(5px)` : (props.blur) ? `blur(5px)` : 'blur(0px)'}}
      >
        {props.children}
      </div>
    </div>
  )
}

export default Parallax
