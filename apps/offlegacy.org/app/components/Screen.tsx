interface Props {
  children: React.ReactNode
}

export default function Screen({ children }: Props) {
  return <main className="flex flex-col max-w-screen-md p-6 m-auto space-y-24">{children}</main>
}
