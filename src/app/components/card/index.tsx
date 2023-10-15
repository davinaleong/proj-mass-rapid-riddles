import Link from "next/link"
import CardComponentInterface from "./interfaces"

function CardComponent({
  label,
  href,
  key,
  index,
}: CardComponentInterface): JSX.Element {
  return (
    <Link key={key} href={href} className="btn btn-riddle">
      <h3 className="text-xl font-medium">
        {index ? `${index + 1}. ` : ``}
        {label}
      </h3>
    </Link>
  )
}

export default CardComponent
