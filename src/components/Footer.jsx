export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center space-y-4">

          {/* Nome */}
          <h2 className="text-2xl font-semibold tracking-tight">
            AffiliateHub
          </h2>

          {/* Descrição */}
          <p className="text-sm opacity-90 max-w-xl mx-auto">
            Recomendamos equipamentos para você montar sua academia em casa
            com praticidade, economia e qualidade.
          </p>

          {/* Aviso afiliado */}
          <p className="text-xs opacity-75 max-w-lg mx-auto">
            Este site participa de programas de afiliados e pode receber
            comissão por compras realizadas através dos links, sem custo
            adicional para você.
          </p>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-white/20 text-center py-4 text-xs opacity-80">
          © {new Date().getFullYear()} AffiliateHub. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
