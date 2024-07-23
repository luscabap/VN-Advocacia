interface IErrorMessageProps {
  children: string
}

export const ErrorMessage = ({ children }: IErrorMessageProps) => {
  return (
    <p className="font-bold text-red-500">{children}</p>
  )
}