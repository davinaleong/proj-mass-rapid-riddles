import Link from "next/link"
import { HeaderComponentInterface } from "./interfaces"

function HeaderComponent({
  title,
  subtitle,
  showBackBtn,
}: HeaderComponentInterface): JSX.Element {
  const backBtn: JSX.Element | null = showBackBtn ? (
    <Link href="/" className="btn">
      Back
    </Link>
  ) : null

  return (
    <header className="app__header wrapper mx-auto py-4 flex gap-4 items-center justify-between">
      <div className="flow">
        <h1 className="app__header__title text-5xl font-black italic">
          {title}
        </h1>
        <p className="app__header__subtitle text-2xl font-black italic">
          {subtitle}
        </p>
      </div>
      <div>{backBtn}</div>
    </header>
  )
}

export default HeaderComponent
