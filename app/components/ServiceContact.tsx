import InquiryContact from '@/app/components/ui/InquiryContact';
import { SERVICE_1A1_MESSAGE } from '@/config/contact';

const STEPS = [
  {
    title: 'Me escribís',
    description: 'Contame qué está pasando en tu aula.',
  },
  {
    title: 'Coordinamos',
    description: 'Vemos cómo empezar y reservamos día y horario.',
  },
  {
    title: 'Empezamos',
    description: 'Trabajamos sobre tu situación y armamos el plan.',
  },
];

const OPTIONS = [
  {
    id: 'servicio-1a1',
    label: 'Servicio 1:1',
    detail: 'Un encuentro de 90 minutos',
    short: 'Sesión 1:1 · 90 min',
    message: SERVICE_1A1_MESSAGE,
  },
];

export default function ServiceContact() {
  return (
    <InquiryContact
      title={
        <>
          Contame qué está <br />
          <span className="font-bold text-sky-600">pasando.</span>
        </>
      }
      description="Escribime y te cuento cómo funciona el servicio 1:1. Te respondo personalmente y coordinamos."
      options={OPTIONS}
      steps={STEPS}
    />
  );
}
