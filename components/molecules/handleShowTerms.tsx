import Swal from 'sweetalert2'

export async function handleShowTerms() {
  const rawHtml = `
    <h2>Termos e Condições de Uso</h2>

    <p>
      Ao criar uma conta na plataforma <strong>PetFound</strong>, você declara que leu e concorda integralmente com os termos abaixo. 
      O uso da plataforma pressupõe responsabilidade, boa conduta e respeito à legislação vigente.
    </p>

    <h3>1. Uso adequado da plataforma</h3>
    <p>
      O usuário se compromete a utilizar a plataforma exclusivamente para sua finalidade:
      encontrar animais perdidos, facilitar adoções e promover o bem-estar animal.
      É proibido utilizar o sistema para fins ilícitos, fraudulentos, ofensivos ou que prejudiquem outros usuários.
    </p>

    <h3>2. Proibição de atividades ilegais</h3>
    <p>
      É expressamente proibido:
    </p>
    <ul>
      <li>fornecer informações falsas ou enganosas;</li>
      <li>criar perfis com identidade falsa;</li>
      <li>publicar conteúdo que viole leis, direitos de terceiros ou normas de proteção animal;</li>
      <li>utilizar a plataforma para práticas criminosas ou abusivas.</li>
    </ul>

    <p>
      Caso haja suspeita de uso indevido, a plataforma poderá agir para preservar a segurança dos usuários.
    </p>

    <h3>3. Responsabilidade sobre interações e contatos</h3>
    <p>
      O PetFound não se responsabiliza por contatos, conversas, encontros ou acordos realizados entre usuários 
      fora do ambiente da plataforma. Cada usuário é responsável pelas próprias interações.
    </p>

    <h3>4. Guarda de dados e segurança</h3>
    <p>
      Para prevenir golpes, crimes e atividades suspeitas, a plataforma irá armazenar dados essenciais relacionados ao cadastro 
      e às atividades dos usuários. Esses dados são mantidos para segurança, prevenção de fraudes e cumprimento legal.
    </p>

    <h3>5. Comunicação com autoridades</h3>
    <p>
      Se necessário, o PetFound poderá fornecer informações às autoridades competentes para investigação de crimes, mau uso, 
      denúncias ou situações de risco envolvendo pessoas ou animais.
    </p>

    <h3>6. Concordância</h3>
    <p>
      Ao prosseguir com o cadastro, você confirma que leu, compreendeu e concorda com estes Termos e Condições.
    </p>
  `

  const sanitizedHtml = sanitizeHtml(rawHtml)

  Swal.fire({
    title: 'Termos e Condições',
    html: sanitizedHtml,
    width: 600,
    confirmButtonText: 'Fechar',
    confirmButtonColor: '#f97316',
  })
}

function sanitizeHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html')

  doc.querySelectorAll('script, iframe').forEach((el) => el.remove())

  doc.body.querySelectorAll('*').forEach((el) => {
    Array.from(el.attributes).forEach((attr) => {
      if (attr.name.startsWith('on')) {
        el.removeAttribute(attr.name)
      }
    })
  })

  return doc.body.innerHTML
}
