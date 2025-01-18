interface Props {
  children: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
  return (
    <main className="flex flex-col max-w-screen-xl p-4 m-auto space-y-10 min-h-screen justify-center">{children}</main>
  )
}

export default PageLayout
