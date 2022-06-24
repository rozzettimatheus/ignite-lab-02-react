import { Rocketseat } from './Rocketseat'

export function Footer() {
  return (
    <footer className="py-5 mt-auto mx-6 border-t border-gray-500 text-gray-300 flex items-center gap-6">
      <Rocketseat />
      <span>Rocketseat - Todos os direitos reservados</span>
      <span className="ml-auto">Política de Privacidade</span>
    </footer>
  )
}
