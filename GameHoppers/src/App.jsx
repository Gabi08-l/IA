export default function BasketballChampionshipHomepage() {
  const teams = [
    {
      name: 'Jahu Bulls',
      city: 'Jaú - SP',
      image:
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Titan Hoopers',
      city: 'Bauru - SP',
      image:
        'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Fire Dunkers',
      city: 'São Paulo - SP',
      image:
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Black Panthers',
      city: 'Campinas - SP',
      image:
        'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Sky Legends',
      city: 'Ribeirão Preto - SP',
      image:
        'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Court Kings',
      city: 'Sorocaba - SP',
      image:
        'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const games = [
    {
      date: '22 Maio',
      hour: '19:00',
      match: 'Jahu Bulls x Titan Hoopers',
      place: 'Arena Jahu',
    },
    {
      date: '24 Maio',
      hour: '20:30',
      match: 'Fire Dunkers x Black Panthers',
      place: 'Ginásio Central',
    },
    {
      date: '26 Maio',
      hour: '18:00',
      match: 'Sky Legends x Court Kings',
      place: 'Arena Legends',
    },
    {
      date: '29 Maio',
      hour: '19:30',
      match: 'Jahu Bulls x Fire Dunkers',
      place: 'Arena Jahu',
    },
    {
      date: '31 Maio',
      hour: '20:00',
      match: 'Titan Hoopers x Court Kings',
      place: 'Hoopers Stadium',
    },
    {
      date: '02 Junho',
      hour: '18:30',
      match: 'Black Panthers x Sky Legends',
      place: 'Panthers Arena',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[6px] text-orange-400 text-sm md:text-base mb-4">
            Campeonato Regional de Basquete
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
            ARENA
            <span className="text-orange-500"> HOOPS</span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-300 text-base md:text-xl leading-relaxed mb-8">
            Os melhores times da região disputando partidas intensas,
            enterradas históricas e muita emoção dentro das quadras.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl">
              Ver Jogos
            </button>

            <button className="border border-white/20 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold">
              Conhecer Times
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-orange-500 uppercase tracking-[4px] mb-4 font-semibold">
              Sobre o Campeonato
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              O maior torneio de basquete da região.
            </h2>

            <p className="text-zinc-400 leading-relaxed text-lg mb-6">
              O Arena Hoops reúne 6 equipes em confrontos eletrizantes.
              O campeonato foi criado para valorizar o esporte regional,
              promover novos talentos e proporcionar experiências incríveis
              para torcedores e atletas.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
                <h3 className="text-4xl font-black text-orange-500">6</h3>
                <p className="text-zinc-400 mt-2">Times Participantes</p>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
                <h3 className="text-4xl font-black text-orange-500">18</h3>
                <p className="text-zinc-400 mt-2">Jogos na Temporada</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200&auto=format&fit=crop"
              alt="Basquete"
              className="rounded-3xl shadow-2xl h-[550px] w-full object-cover"
            />

            <div className="absolute -bottom-8 -left-6 bg-orange-500 text-black p-6 rounded-3xl shadow-2xl">
              <p className="text-3xl font-black">2026</p>
              <p className="font-semibold">Temporada Oficial</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAMS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-4">
              Equipes
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Conheça os Times
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <div
                key={index}
                className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black mb-2">{team.name}</h3>
                  <p className="text-zinc-400">{team.city}</p>

                  <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 transition-all py-3 rounded-xl font-bold">
                    Ver Time
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATCHES */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-4">
              Agenda
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Próximos Jogos
            </h2>
          </div>

          <div className="space-y-6">
            {games.map((game, index) => (
              <div
                key={index}
                className="bg-zinc-800 border border-zinc-700 rounded-3xl p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-orange-500 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-orange-500 text-black rounded-2xl px-5 py-4 min-w-[110px] text-center font-black shadow-lg">
                    <p className="text-lg">{game.date}</p>
                    <span className="text-sm">{game.hour}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black mb-2">
                      {game.match}
                    </h3>
                    <p className="text-zinc-400">{game.place}</p>
                  </div>
                </div>

                <button className="bg-white text-black hover:bg-orange-500 hover:text-black transition-all px-8 py-4 rounded-2xl font-bold">
                  Comprar Ingresso
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-500 to-orange-700 rounded-[40px] p-10 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Viva a emoção do basquete.
          </h2>

          <p className="text-black/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Garanta seu lugar nas arquibancadas e acompanhe de perto os
            maiores confrontos da temporada.
          </p>

          <button className="bg-black text-white hover:scale-105 transition-all duration-300 px-10 py-5 rounded-2xl text-lg font-bold shadow-xl">
            Comprar Ingressos
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 px-6 text-center text-zinc-500">
        <p>
          © 2026 Arena Hoops Championship — Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
