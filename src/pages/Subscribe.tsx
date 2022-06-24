import { gql, useMutation } from '@apollo/client'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Logo } from '../components/Logo'

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscription($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`

export function Subscribe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  )
  const navigate = useNavigate()

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault()

    if (!name || !email) return

    try {
      await createSubscriber({
        variables: {
          name,
          email,
        },
      })

      navigate('/event')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="flex items-center justify-between mt-20 mx-auto max-w-[1100px] w-full">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 leading-tight text-[2.5rem]">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-70"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img
        src="/src/assets/code-mockup.png"
        alt="code mockup"
        className="mt-10"
      />
    </div>
  )
}
