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
      <section>{children}</section>
    </main>
  )
}

export default PageTemplate
