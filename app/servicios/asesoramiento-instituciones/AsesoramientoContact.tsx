import InquiryContact from '@/app/components/ui/InquiryContact';

const STEPS = [
  {
    title: 'Me contás',
    description: 'Qué desafíos está atravesando el equipo.',
  },
  {
    title: 'Diseñamos',
    description: 'Armamos una propuesta con focos, formato y modalidad.',
  },
  {
    title: 'Coordinamos',
    description: 'Definimos cómo empezar y los próximos pasos.',
  },
];

const OPTIONS = [
  {
    id: 'institucion',
    label: 'Asesoramiento institucional',
    detail: 'Una propuesta a medida para el equipo',
    short: 'Asesoramiento institucional',
    message:
      'Hola Vicky, quiero consultar por una propuesta de asesoramiento pedagógico para mi institución.',
  },
];

export default function AsesoramientoContact() {
  return (
    <InquiryContact
      title={
        <>
          ¿Pensamos una propuesta para tu <br />
          <span className="font-bold text-indigo-600">escuela?</span>
        </>
      }
      description="Contame qué está necesitando el equipo y diseñamos una propuesta a medida para la institución."
      options={OPTIONS}
      steps={STEPS}
      accent="indigo"
    />
  );
}
