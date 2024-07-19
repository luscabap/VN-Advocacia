interface ITitleProps {
  text: string,
  id: string,
}

export const Title = ({ text, id }: ITitleProps) => {
  return (
    <h2 className="
      text-xl font-bold border-b-2 border-solid border-black text-left my-2 pb-1 inline-block cursor-pointer rounded-t-sm px-1 transition-all
      hover:bg-zinc-400
      lg:text-2xl
    "
    id={id}
    >
      {text}
    </h2>
  )
}