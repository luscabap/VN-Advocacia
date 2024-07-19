import { CiCircleCheck } from "react-icons/ci";

export const ItemCheck = ({ texto }: { texto: string }) => {
  return (
    <li className="inline-flex items-center justify-start gap-1 border-b-[1px] border-solid border-ultraLightColor pb-4 ">
      <CiCircleCheck size={25} color="#0C0E0B"/>
      <p className="text-base text-darkColor lg:text-xl">{texto}</p>
    </li>
  )
}