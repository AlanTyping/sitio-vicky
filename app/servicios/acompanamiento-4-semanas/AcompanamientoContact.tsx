import InquiryContact from '@/app/components/ui/InquiryContact';
import { ACCOMPANIMENT_MESSAGE } from '@/config/contact';

const STEPS = [
  {
    title: 'Me escribís',
    description: 'Contame la situación que querés trabajar.',
  },
  {
    title: 'Coordinamos',
    description: 'Definimos día y horario para el primer encuentro.',
  },
  {
    title: 'Empezamos',
    description: 'Analizamos el caso y armamos el plan de intervención.',
  },
];

const OPTIONS = [
  {
    id: 'acompanamiento',
    label: 'Acompañamiento de 4 semanas',
    detail: 'Encuentros, plan y seguimiento',
    short: 'Acompañamiento · 4 semanas',
    message: ACCOMPANIMENT_MESSAGE,
  },
];

export default function AcompanamientoContact() {
  return (
    <InquiryContact
      title={
        <>
          ¿Empezamos el <br />
          <span className="font-bold text-emerald-600">acompañamiento?</span>
        </>
      }
      description="Contame qué está pasando en tu aula y vemos cómo empezar. Te respondo personalmente y coordinamos."
      options={OPTIONS}
      steps={STEPS}
      accent="emerald"
    />
  );
}
