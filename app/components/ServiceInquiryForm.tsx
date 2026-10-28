'use client';

import { useState } from 'react';

type ServiceInquiryFormProps = {
  service: string;
  initialMessage?: string;
};

export default function ServiceInquiryForm({
  service,
  initialMessage = '',
}: ServiceInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: initialMessage,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, service }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Algo salió mal');

      setStatus('success');
      setFormData({ name: '', email: '', message: initialMessage });
    } catch (error: unknown) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'No pudimos enviar el mensaje'
      );
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex min-h-[340px] flex-col items-start justify-center rounded-2xl border border-slate-200 bg-paper-soft p-6 shadow-xl shadow-slate-900/5 sm:p-8"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-olive/15 text-olive">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <h3 className="mt-5 font-[family-name:var(--font-bitter)] text-2xl font-semibold text-ink">
          Mensaje enviado
        </h3>
        <p className="mt-2 max-w-sm text-base leading-relaxed text-ink-soft">
          Gracias por escribirme. Te respondo a la brevedad para coordinar el encuentro.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 rounded-sm text-sm font-semibold text-pencil underline decoration-pencil/40 underline-offset-4 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pencil focus-visible:ring-offset-2"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-paper-soft p-6 shadow-xl shadow-slate-900/5 sm:p-8"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent 0 31px, rgba(15, 23, 42, 0.04) 31px 32px)',
        }}
        aria-hidden="true"
      />

      <div className="relative">
      <div className="flex items-center gap-2.5 border-b border-slate-200 pb-5">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pencil" aria-hidden="true" />
        <p className="text-sm text-ink-soft">
          Consulta por <span className="font-bold text-ink">{service}</span>
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="service-name"
            className="block text-sm font-semibold text-ink"
          >
            Nombre
          </label>
          <input
            id="service-name"
            required
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="mt-2 w-full rounded-sm border-b border-slate-300 bg-transparent py-2.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-pencil focus:ring-2 focus:ring-pencil/10"
          />
        </div>

        <div>
          <label
            htmlFor="service-email"
            className="block text-sm font-semibold text-ink"
          >
            Email
          </label>
          <input
            id="service-email"
            required
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="mt-2 w-full rounded-sm border-b border-slate-300 bg-transparent py-2.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-pencil focus:ring-2 focus:ring-pencil/10"
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="service-message"
          className="block text-sm font-semibold text-ink"
        >
          Tu situación
        </label>
        <textarea
          id="service-message"
          required
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Contame qué pasa, cuándo aparece y qué probaste."
          aria-describedby="service-message-help"
          className="mt-2 w-full resize-none rounded-sm border-b border-slate-300 bg-transparent py-2.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-pencil focus:ring-2 focus:ring-pencil/10"
        />
        <p id="service-message-help" className="mt-2 text-xs leading-relaxed text-ink-soft">
          Con un breve resumen es suficiente.
        </p>
      </div>

      {status === 'error' && (
        <p role="alert" aria-live="assertive" className="mt-4 text-sm font-semibold text-pencil">
          {errorMessage}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[15rem] text-xs leading-relaxed text-ink-soft">
          Tus datos se usan solo para responder tu consulta.
        </p>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-sky-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-soft active:translate-y-0 active:shadow-md active:shadow-sky-600/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? 'Enviando…' : 'Enviar consulta'}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
      </div>
    </form>
  );
}
