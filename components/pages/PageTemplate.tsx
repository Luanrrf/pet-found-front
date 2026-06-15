import Header from '../organisms/Header'

const PageTemplate = ({
  children,
  hasDefaultHeader,
}: {
  children: React.ReactNode
  hasDefaultHeader?: boolean
}) => {
  return (
    <main>
      {hasDefaultHeader && <Header />}
      <section className="flex flex-col items-center px-4">{children}</section>
    </main>
  )
}

export default PageTemplate
