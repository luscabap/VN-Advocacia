export const Title = ({ text }: {text: string}) => {
  return (
    <h2 className="
      text-xl font-bold border-b-2 border-solid border-black text-left my-2 pb-1 inline-block cursor-pointer rounded-t-sm px-1 transition-all
      hover:bg-zinc-400
    ">{text}</h2>
  )
}