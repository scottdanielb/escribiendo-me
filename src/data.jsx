import { nanoid } from "nanoid";
import icon1 from "./assets/Autodescubrimiento.svg";
import icon2 from "./assets/InteligenciaEmocional.svg";
import icon3 from "./assets/ResolucionDeConflictos.svg";
import icon4 from "./assets/ReduccionDeEstres.svg";
import icon5 from "./assets/ClaridadMental.svg";
import icon6 from "./assets/SanacionEspiritual.svg";
import service1 from "./assets/Sesiones1_1.svg";
import service2 from "./assets/SesionesGrupales.svg";
import free1 from "./assets/KitPrimerosAuxiliosEmocionales.svg";
import free2 from "./assets/RetoSanaciónCreenciasLimitantes.svg";
import free3 from "./assets/ReconexionContigo.svg";

export const links = [
  { id: nanoid(), href: "#home", text: "Inicio" },
  { id: nanoid(), href: "#benefits", text: "Beneficios" },
  { id: nanoid(), href: "#about", text: "Quien soy" },
  { id: nanoid(), href: "#services", text: "Servicios" },
  { id: nanoid(), href: "#resources", text: "Material" },
  { id: nanoid(), href: "#contact", text: "Contacto" },
];

export const benefits = [
  {
    id: nanoid(),
    title: "Autodescubrimiento",
    icon: <img src={icon1} className="h-20 w-20 " loading="lazy" />,
    text: "Conocerás y conectarás contigo mismo y tu autenticidad",
  },
  {
    id: nanoid(),
    title: "Inteligencia Emocional",
    icon: <img src={icon2} className="h-20 w-20 " loading="lazy" />,
    text: "Mejorarás tu capacidad para reconocer y gestionar tus emociones",
  },
  {
    id: nanoid(),
    title: "Resolucion de Conflictos",
    icon: <img src={icon3} className="h-20 w-20 " loading="lazy" />,
    text: "La escritura te permitirá procesar conflictos internos y externos",
  },
  {
    id: nanoid(),
    title: "Reduccion de Estres",
    icon: <img src={icon4} className="h-20 w-20 " loading="lazy" />,
    text: "Disminuirás tus niveles de estrés, ganando paz mental y emocional",
  },
  {
    id: nanoid(),
    title: "Claridad Mental y Orden",
    icon: <img src={icon5} className="h-20 w-20 " loading="lazy" />,
    text: "Te ayudará a organizar tus pensamientos y tomar decisiones alineadas",
  },
  {
    id: nanoid(),
    title: "Sanacion Espiritual",
    icon: <img src={icon6} className="h-20 w-20 " loading="lazy" />,
    text: "Reconectarás con tu esencia espiritual y sanarás desde adentro",
  },
];

export const freeResources = [
  {
    id: nanoid(),
    img: free1,
    href: "/pdfs/KitdePrimerosAuxiliosEmocionales.pdf",
    title: "Kit de Primeros Auxilios Emocionales",
    text: "Una herramienta práctica para cuando necesites encontrar calma en medio de la tormenta emocional. Incluye ejercicios sencillos y efectivos para reconectar con tu paz interior",
  },
  {
    id: nanoid(),
    img: free2,
    href: "/pdfs/Reto7DíasParaSanarCreencias.pdf",
    title: "Reto de 7 Días para Transformar Creencias",
    text: "Un desafío transformador para cuestionar, sanar y liberar creencias limitantes. Cada día descubrirás nuevas herramientas para expandir tu conciencia",
  },
  {
    id: nanoid(),
    img: free3,
    href: "/pdfs/ReconectarContigo.pdf",
    title: "Reto de 5 Días de Reconexión",
    text: "Una invitación a reconectar contigo misma, volver al presente y redescubrir tu verdad interior. Cada día te guiará hacia una reconexión más profunda con tu ser",
  },
];

export const services = [
  {
    id: nanoid(),
    img: service1,
    title: "Sesión 1:1 - Acompañamiento Personalizado",
    text: "Un espacio exclusivo para explorar tus pensamientos, emociones y creencias a través de la escritura consciente. Con acompañamiento personalizado y único",
  },
  {
    id: nanoid(),
    img: service2,
    title: "Sesión Grupal - Conexión y Crecimiento Colectivo",
    text: "Un espacio compartido donde, a través de la escritura consciente, explorarás tus creencias y emociones, apoyada por la energía colectiva y retroalimentación",
  },
];
