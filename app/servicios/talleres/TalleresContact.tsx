import InquiryContact from '@/app/components/ui/InquiryContact';

const STEPS = [
  {
    title: 'Me contás',
    description: 'Qué situaciones quieren trabajar y con quién.',
  },
  {
    title: 'Diseñamos',
    description: 'Armamos la propuesta con temas, formato y modalidad.',
  },
  {
    title: 'Coordinamos',
    description: 'Definimos fecha y horario para el encuentro por Meet.',
  },
];

const OPTIONS = [
  {
    id: 'grupo',
    label: 'Para un grupo de docentes',
    detail: 'Un taller con tu equipo',
    short: 'Taller para grupo',
    message:
      'Hola Vicky, quiero consultar por un taller para un grupo de docentes.',
  },
  {
    id: 'institucion',
    label: 'Para una institución',
    detail: 'Una propuesta a medida para la escuela',
    short: 'Propuesta institucional',
    message:
      'Hola Vicky, quiero consultar por una propuesta de taller para mi institución educativa.',
  },
];

export default function TalleresContact() {
  return (
    <InquiryContact
      title={
        <>
          ¿Armamos un taller para tu <br />
          <span className="font-bold text-teal-600">equipo?</span>
        </>
      }
      description="Contame qué situaciones quieren trabajar y con quién. A partir de eso pensamos una propuesta."
      options={OPTIONS}
      steps={STEPS}
      optionsLegend="¿Para quién es el taller?"
      accent="teal"
    />
  );
}
