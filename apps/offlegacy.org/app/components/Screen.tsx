interface Props {
  children: React.ReactNode
}

export default function Screen({ children }: Props) {
  return <main className="flex flex-col max-w-screen-md mx-auto outline outline-zinc-800">{children}</main>
}
