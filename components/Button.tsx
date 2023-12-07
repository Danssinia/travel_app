import Image from "next/image"
type ButtonProps = {
    type: "button"|"submit",
    title: string,
    icon?: string,
    variant: string
}
const Button = ({type,title,variant,icon}:ButtonProps) => {
  return (
    <div>
      <button type={type} className={`rounded-full border flexCenter ${variant}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
    </div>
  )
}

export default Button
