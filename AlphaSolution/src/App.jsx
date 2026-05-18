import { useState } from 'react';
import {
  AlertTriangle,
  Factory,
  Wrench,
  ClipboardList,
  CheckCircle,
  Clock,
} from 'lucide-react';

export default function TicketMaintSystem() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      machine: 'Injetora 04',
      sector: 'Produção',
      severity: 'Alta',
      status: 'Parada',
      technician: 'Carlos',
      parts: '-',
    },
    {
      id: 2,
      machine: 'Prensa 02',
      sector: 'Montagem',
      severity: 'Média',
      status: 'Em Reparo',
      technician: 'Marcos',
      parts: 'Correia',
    },
  ]);

  const [form, setForm] = useState({
    machine: '',
    sector: '',
    severity: 'Baixa',
  });

  const [partsInput, setPartsInput] = useState({});

  const createTicket = () => {
    if (!form.machine || !form.sector) {
      alert('Preencha todos os campos');
      return;
    }

    const newTicket = {
      id: Date.now(),
      machine: form.machine,
      sector: form.sector,
      severity: form.severity,
      status: 'Parada',
      technician: '-',
      parts: '-',
    };

    setTickets([newTicket, ...tickets]);

    setForm({
      machine: '',
      sector: '',
      severity: 'Baixa',
    });
  };

  const startRepair = (id) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              status: 'Em Reparo',
              technician: 'Técnico Responsável',
            }
          : ticket
      )
    );
  };

  const finishRepair = (id) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              status: 'Finalizado',
              parts: partsInput[id] || 'Nenhuma peça trocada',
            }
          : ticket
      )
    );
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Alta':
        return 'bg-red-500';
      case 'Média':
        return 'bg-yellow-500';
      default:
        return 'bg-green-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Parada':
        return 'bg-red-500';
      case 'Em Reparo':
        return 'bg-orange-500';
      default:
        return 'bg-emerald-500';
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100">
      {/* HEADER */}
      <header className="bg-zinc-900 text-white px-6 py-5 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-3 rounded-2xl">
              <Factory size={30} />
            </div>

            <div>
              <h1 className="text-3xl font-black">Alpha Solution</h1>
              <p className="text-zinc-400">
                Sistema Industrial da Alpha Components
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-red-500 px-5 py-3 rounded-2xl font-bold shadow-lg animate-pulse">
            <AlertTriangle />
            Monitoramento em Tempo Real
          </div>
        </div>
      </header>

      {/* DASHBOARD */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-7 shadow-lg border-l-[10px] border-red-500">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-zinc-500">Máquinas Paradas</h2>
              <AlertTriangle className="text-red-500" />
            </div>

            <h3 className="text-5xl font-black text-zinc-900">
              {tickets.filter((t) => t.status === 'Parada').length}
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-lg border-l-[10px] border-orange-500">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-zinc-500">Em Reparo</h2>
              <Clock className="text-orange-500" />
            </div>

            <h3 className="text-5xl font-black text-zinc-900">
              {tickets.filter((t) => t.status === 'Em Reparo').length}
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-lg border-l-[10px] border-emerald-500">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-zinc-500">Finalizados</h2>
              <CheckCircle className="text-emerald-500" />
            </div>

            <h3 className="text-5xl font-black text-zinc-900">
              {tickets.filter((t) => t.status === 'Finalizado').length}
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FORM */}
          <div className="bg-white rounded-3xl shadow-xl p-8 h-fit">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-orange-500 p-3 rounded-2xl text-white">
                <ClipboardList />
              </div>

              <div>
                <h2 className="text-2xl font-black text-zinc-900">
                  Solicitar Suporte
                </h2>
                <p className="text-zinc-500">
                  Abrir novo chamado técnico
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="font-bold text-zinc-700 block mb-2">
                  Máquina
                </label>

                <select
                  value={form.machine}
                  onChange={(e) =>
                    setForm({ ...form, machine: e.target.value })
                  }
                  className="w-full bg-zinc-100 border-2 border-zinc-200 rounded-2xl px-4 py-4 text-lg outline-none focus:border-orange-500"
                >
                  <option value="">Selecione</option>
                  <option>Injetora 01</option>
                  <option>Injetora 04</option>
                  <option>Torno 02</option>
                  <option>Prensa 02</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-zinc-700 block mb-2">
                  Setor
                </label>

                <select
                  value={form.sector}
                  onChange={(e) =>
                    setForm({ ...form, sector: e.target.value })
                  }
                  className="w-full bg-zinc-100 border-2 border-zinc-200 rounded-2xl px-4 py-4 text-lg outline-none focus:border-orange-500"
                >
                  <option value="">Selecione</option>
                  <option>Produção</option>
                  <option>Montagem</option>
                  <option>Soldagem</option>
                  <option>Qualidade</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-zinc-700 block mb-2">
                  Gravidade
                </label>

                <select
                  value={form.severity}
                  onChange={(e) =>
                    setForm({ ...form, severity: e.target.value })
                  }
                  className="w-full bg-zinc-100 border-2 border-zinc-200 rounded-2xl px-4 py-4 text-lg outline-none focus:border-orange-500"
                >
                  <option>Baixa</option>
                  <option>Média</option>
                  <option>Alta</option>
                </select>
              </div>

              <button
                onClick={createTicket}
                className="w-full bg-red-500 hover:bg-red-600 transition-all text-white py-5 rounded-2xl text-xl font-black shadow-lg"
              >
                Solicitar Suporte
              </button>
            </div>
          </div>

          {/* CHAMADOS */}
          <div className="lg:col-span-2 space-y-6">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white rounded-3xl shadow-xl p-7 border border-zinc-200"
              >
                <div className="flex flex-col xl:flex-row justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="flex flex-wrap gap-3">
                      <span
                        className={`${getSeverityColor(
                          ticket.severity
                        )} text-white px-4 py-2 rounded-xl font-bold`}
                      >
                        Gravidade: {ticket.severity}
                      </span>

                      <span
                        className={`${getStatusColor(
                          ticket.status
                        )} text-white px-4 py-2 rounded-xl font-bold`}
                      >
                        {ticket.status}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-3xl font-black text-zinc-900 mb-2">
                        {ticket.machine}
                      </h2>

                      <p className="text-zinc-500 text-lg">
                        Setor: {ticket.sector}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-zinc-100 rounded-2xl p-4">
                        <p className="text-zinc-500 font-semibold mb-1">
                          Técnico
                        </p>
                        <h3 className="font-black text-lg">
                          {ticket.technician}
                        </h3>
                      </div>

                      <div className="bg-zinc-100 rounded-2xl p-4">
                        <p className="text-zinc-500 font-semibold mb-1">
                          Peças Trocadas
                        </p>
                        <h3 className="font-black text-lg">
                          {ticket.parts}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 min-w-[240px]">
                    {ticket.status === 'Parada' && (
                      <button
                        onClick={() => startRepair(ticket.id)}
                        className="bg-orange-500 hover:bg-orange-600 transition-all text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2"
                      >
                        <Wrench size={20} />
                        Iniciar Reparo
                      </button>
                    )}

                    {ticket.status !== 'Finalizado' && (
                      <>
                        <input
                          type="text"
                          placeholder="Peças trocadas"
                          onChange={(e) =>
                            setPartsInput({
                              ...partsInput,
                              [ticket.id]: e.target.value,
                            })
                          }
                          className="bg-zinc-100 border-2 border-zinc-200 rounded-2xl px-4 py-4 outline-none focus:border-emerald-500"
                        />

                        <button
                          onClick={() => finishRepair(ticket.id)}
                          className="bg-emerald-500 hover:bg-emerald-600 transition-all text-white py-4 rounded-2xl font-black"
                        >
                          Finalizar Chamado
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
