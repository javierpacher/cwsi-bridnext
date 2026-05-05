const phases = [
  {
    n: 3,
    label: 'SAP Connector',
    date: 'Jun 2026',
    gradient: 'from-blue-700 to-blue-500',
    bgLight: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'bg-blue-600',
    details: [
      'Conector SAP (ERP / S4/HANA)',
      'Integración con SAP NetWeaver security',
      'Handoff JWT adaptado al stack SAP',
      'Testing con ambientes SAP sandbox',
    ],
  },
  {
    n: 4,
    label: 'PeopleSoft Connector',
    date: 'Ago 2026',
    gradient: 'from-purple-700 to-purple-500',
    bgLight: 'bg-purple-50',
    border: 'border-purple-200',
    badge: 'bg-purple-600',
    details: [
      'Conector PeopleSoft (HCM / FSCM)',
      'SSO + MFA sin modificar roles existentes',
      'Integración con PeopleSoft Signon PeopleCode',
      'Testing con ambientes PeopleSoft sandbox',
    ],
  },
  {
    n: 5,
    label: '+ Legacy Solutions',
    date: 'Oct 2026',
    gradient: 'from-indigo-600 to-blue-400',
    bgLight: 'bg-indigo-50',
    border: 'border-indigo-200',
    badge: 'bg-indigo-500',
    details: [
      'Apertura a apps web con auth custom',
      'Portales legacy con auth propietaria',
      'Bridnext como Identity Broker genérico',
      'SDK / API pública para integraciones propias',
    ],
  },
];

export default function Roadmap() {
  return (
    <div>
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block bg-bn-teal text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
          Roadmap
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-bn-navy leading-tight">
          Lo que viene
        </h2>
        <p className="mt-5 text-lg text-bn-navy/55 max-w-2xl mx-auto">
          JDE ya está en producción. Estas son las próximas integraciones en camino.
        </p>
      </div>

      {/* Phase cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {phases.map(p => (
          <div
            key={p.n}
            className={`relative rounded-2xl border-2 ${p.border} ${p.bgLight} overflow-hidden`}
          >
            {/* Top gradient bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${p.gradient}`} />

            {/* Coming soon ribbon */}
            <div className="absolute top-4 right-4">
              <span className="inline-block bg-white border border-gray-200 text-gray-500 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm">
                Coming Soon
              </span>
            </div>

            <div className="p-7">
              {/* Phase badge + date */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className={`text-xs font-bold text-white px-2.5 py-1 rounded-md ${p.badge}`}>
                  Phase {p.n}
                </span>
                <span className="text-xs text-bn-navy/45 font-medium">{p.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-bn-navy mb-5">{p.label}</h3>

              {/* Details */}
              <ul className="space-y-2.5">
                {p.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-bn-navy/65">
                    <span
                      className={`mt-0.5 w-4 h-4 rounded-full bg-gradient-to-br ${p.gradient} shrink-0 flex items-center justify-center`}
                    >
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Production note */}
      <div className="mt-8 flex items-center justify-center gap-3 text-sm text-bn-navy/50 bg-bn-gray rounded-xl px-6 py-4">
        <span className="text-green-500 text-base">✅</span>
        <span>
          <strong className="text-bn-navy font-semibold">Phases 1 & 2 completadas</strong>
          {' '}— Backend hardening y JDE Connector ya están en producción.
        </span>
      </div>
    </div>
  );
}
