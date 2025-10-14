import Logo from '@/components/atoms/Logo'
import PageTemplate from '@/components/pages/PageTemplate'

export default function LoginPage() {
  return (
    <PageTemplate>
      <div>
        <div className="flex justify-center" style={{ margin: '60px 0 20px' }}>
          <Logo
            src="/logo-home.png"
            alt="pet found logo"
            width={280}
            height={112}
          />
        </div>
      </div>
    </PageTemplate>
  )
}
