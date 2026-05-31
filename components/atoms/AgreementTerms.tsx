import React from 'react'

const sections = [
  {
    id: 1,
    title: 'Sobre a Plataforma',
    content: [
      'O Pet Found é uma plataforma digital destinada a facilitar a localização, divulgação e adoção de animais encontrados, perdidos ou disponíveis para adoção.',
      'O Pet Found atua exclusivamente como intermediador tecnológico, permitindo que usuários publiquem informações e entrem em contato entre si.',
      'O Pet Found não é proprietário dos animais anunciados, não realiza adoções, não participa das negociações entre usuários e não assume responsabilidade pela veracidade das informações fornecidas pelos usuários.',
    ],
  },
  {
    id: 2,
    title: 'Cadastro e Responsabilidade do Usuário',
    intro: 'Ao utilizar a plataforma, o usuário declara que:',
    list: [
      'Fornecerá informações verdadeiras, completas e atualizadas;',
      'Utilizará a plataforma de boa-fé e em conformidade com a legislação vigente;',
      'É responsável por todo conteúdo publicado em sua conta;',
      'Não utilizará a plataforma para atividades ilícitas, fraudulentas ou que possam causar prejuízos a terceiros.',
    ],
    footer:
      'O usuário é integralmente responsável pelas ações realizadas por meio de sua conta.',
  },
  {
    id: 3,
    title: 'Conteúdo Publicado',
    intro:
      'Todo conteúdo publicado no Pet Found é de responsabilidade exclusiva do usuário que o enviou. Isso inclui, mas não se limita a:',
    list: [
      'Fotografias;',
      'Informações sobre animais;',
      'Informações de contato;',
      'Localizações informadas;',
      'Comentários e mensagens.',
    ],
    footer:
      'O Pet Found não garante a precisão, autenticidade, integridade ou atualização de qualquer informação disponibilizada pelos usuários.',
  },
  {
    id: 4,
    title: 'Limitação de Responsabilidade',
    intro: 'O usuário reconhece e concorda que:',
    list: [
      'O Pet Found não garante que um animal será encontrado ou adotado;',
      'O Pet Found não garante a identidade ou boa-fé dos usuários cadastrados;',
      'O Pet Found não realiza qualquer inspeção física dos animais divulgados;',
      'O Pet Found não verifica o estado de saúde, vacinação, comportamento ou histórico dos animais;',
      'O Pet Found não participa de negociações, encontros, adoções, resgates ou transferências de guarda;',
      'O Pet Found não se responsabiliza por perdas, danos, prejuízos, fraudes, acidentes, conflitos ou quaisquer consequências decorrentes da interação entre usuários.',
    ],
    footer:
      'Toda interação realizada entre usuários ocorre por sua conta e risco.',
  },
  {
    id: 5,
    title: 'Proibição de Uso Indevido',
    intro: 'É expressamente proibido utilizar o Pet Found para:',
    list: [
      'Publicar informações falsas ou enganosas;',
      'Aplicar golpes ou fraudes;',
      'Assediar, ameaçar ou constranger terceiros;',
      'Publicar conteúdo ofensivo, discriminatório ou ilegal;',
      'Comercializar animais em desacordo com a legislação vigente;',
      'Violar direitos de terceiros;',
      'Utilizar mecanismos automatizados para coleta de dados sem autorização expressa;',
      'Tentar acessar áreas restritas, sistemas ou informações sem autorização.',
    ],
  },
  {
    id: 6,
    title: 'Remoção de Conteúdo e Suspensão de Contas',
    intro:
      'O Pet Found poderá, a qualquer momento e sem aviso prévio: remover publicações, bloquear conteúdos, suspender contas ou encerrar cadastros definitivamente. Especialmente quando houver indícios de:',
    list: [
      'Fraude;',
      'Informações falsas;',
      'Violação destes termos;',
      'Descumprimento da legislação aplicável;',
      'Risco à segurança da plataforma ou de terceiros.',
    ],
  },
  {
    id: 7,
    title: 'Registro de Acessos',
    content: [
      'Para fins de segurança, prevenção a fraudes, investigação de incidentes e cumprimento de obrigações legais, o Pet Found poderá registrar e armazenar o endereço IP utilizado durante os acessos à plataforma.',
      'Esses registros poderão ser mantidos pelo período permitido ou exigido pela legislação aplicável.',
      'O usuário concorda expressamente com esse registro ao utilizar a plataforma.',
    ],
  },
  {
    id: 8,
    title: 'Compartilhamento de Informações com Autoridades',
    intro:
      'O Pet Found poderá fornecer registros e informações disponíveis em seus sistemas quando houver:',
    list: [
      'Determinação judicial;',
      'Requisição de autoridade competente;',
      'Obrigação legal;',
      'Necessidade de investigação de atividades ilícitas;',
      'Proteção dos direitos da plataforma ou de terceiros.',
    ],
  },
  {
    id: 9,
    title: 'Privacidade e Proteção de Dados',
    content: [
      'Os dados eventualmente coletados serão utilizados exclusivamente para operação da plataforma, prevenção de fraudes, segurança dos usuários e cumprimento de obrigações legais.',
      'O tratamento de dados observará, sempre que aplicável, a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).',
    ],
  },
  {
    id: 10,
    title: 'Disponibilidade do Serviço',
    content: [
      'O Pet Found é disponibilizado "como está" e "conforme disponível".',
      'Não há garantia de que a plataforma permanecerá disponível de forma contínua, ininterrupta ou livre de erros.',
      'A plataforma poderá ser modificada, suspensa ou encerrada a qualquer momento, sem necessidade de aviso prévio.',
    ],
  },
  {
    id: 11,
    title: 'Propriedade Intelectual',
    intro:
      'Todos os direitos relacionados ao Pet Found, incluindo nome da plataforma, marca, logotipos, layout, design, código-fonte e funcionalidades, pertencem exclusivamente aos seus administradores ou licenciadores.',
    footer:
      'É proibida qualquer reprodução, distribuição ou utilização sem autorização prévia e expressa.',
  },
  {
    id: 12,
    title: 'Indenização',
    intro:
      'O usuário concorda em indenizar e manter o Pet Found, seus administradores e colaboradores livres de quaisquer reclamações, ações judiciais, perdas, danos, custos ou despesas decorrentes:',
    list: [
      'Do uso indevido da plataforma;',
      'Da publicação de informações falsas;',
      'Da violação destes termos;',
      'Da violação de direitos de terceiros;',
      'De atos praticados pelo próprio usuário.',
    ],
  },
  {
    id: 13,
    title: 'Alterações dos Termos',
    content: [
      'O Pet Found poderá alterar estes Termos e Condições a qualquer momento.',
      'A continuidade da utilização da plataforma após a publicação das alterações será considerada como aceitação integral da nova versão.',
    ],
  },
  {
    id: 14,
    title: 'Legislação Aplicável e Foro',
    content: [
      'Estes Termos e Condições são regidos pelas leis da República Federativa do Brasil.',
      'Fica eleito o foro da Comarca de Nova Friburgo, Estado do Rio de Janeiro, para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia expressa a qualquer outro foro, por mais privilegiado que seja.',
    ],
  },
]

export default function AgreementTerms() {
  return (
    <main className="h-[400px] overflow-auto px-2">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 text-orange-600 text-sm font-bold flex-shrink-0">
                  {section.id}
                </span>
                {section.title}
              </h2>

              {section.intro && (
                <p className="text-gray-600 text-sm mb-3">{section.intro}</p>
              )}

              {'content' in section && section.content && (
                <div className="space-y-2">
                  {section.content.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {'list' in section && section.list && (
                <ul className="space-y-1.5 mt-1">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="text-gray-600 text-sm mt-3 font-medium">
                  {section.footer}
                </p>
              )}
            </section>
          ))}

          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 text-orange-600 text-sm font-bold flex-shrink-0">
                15
              </span>
              Contato
            </h2>
            <p className="text-gray-600 text-sm mb-3">
              Em caso de dúvidas, solicitações ou comunicações relacionadas a
              estes Termos e Condições, os usuários poderão entrar em contato
              através dos seguintes e-mails:
            </p>
            <ul className="space-y-2">
              {['luanrrf@yahoo.com.br', 'rafael1311cabral@gmail.com'].map(
                (email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="text-orange-500 hover:text-orange-600 text-sm font-medium underline underline-offset-2 transition-colors"
                    >
                      {email}
                    </a>
                  </li>
                )
              )}
            </ul>
          </section>
        </div>

        <p className="mt-10 text-center text-xs text-gray-400">
          Ao utilizar o Pet Found, o usuário declara ter lido, compreendido e
          aceitado integralmente estes Termos e Condições de Uso.
        </p>
      </div>
    </main>
  )
}
