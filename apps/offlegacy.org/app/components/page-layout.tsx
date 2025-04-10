interface Props {
  children: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
  return <main className="flex flex-col max-w-screen-md p-4 m-auto space-y-20 py-10">{children}</main>
}

export default PageLayout
