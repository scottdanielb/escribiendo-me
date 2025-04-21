import { nanoid } from "nanoid";
import { GiMeditation, GiDistressSignal, GiBrainstorm } from "react-icons/gi";
import { TbMoodCheck, TbHealthRecognition } from "react-icons/tb";
import { MdSyncProblem } from "react-icons/md";
import one from "./assets/one.svg";
import group from "./assets/group.svg";

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
    icon: <GiMeditation className="h-20 w-20 text-[#dbb4a3]" />,
    text: "dsadjiosfjdsi fnsd fnosd nuoisahfsio nfsaoi fnoisa nfasfno f nuuhuh",
  },
  {
    id: nanoid(),
    title: "Inteligencia Emocional",
    icon: <TbMoodCheck className="h-20 w-20 text-[#dbb4a3]" />,
    text: "dsadjiosfjdsi fnsd fnosd nuoisahfsio nfsaoi fnoisa nfasfno f nuuhuh",
  },
  {
    id: nanoid(),
    title: "Resolucion de Conflictos",
    icon: <MdSyncProblem className="h-20 w-20 text-[#dbb4a3]" />,
    text: "dsadjiosfjdsi fnsd fnosd nuoisahfsio nfsaoi fnoisa nfasfno f nuuhuh",
  },
  {
    id: nanoid(),
    title: "Reduccion de Estres",
    icon: <GiDistressSignal className="h-20 w-20 text-[#dbb4a3]" />,
    text: "dsadjiosfjdsi fnsd fnosd nuoisahfsio nfsaoi fnoisa nfasfno f nuuhuh",
  },
  {
    id: nanoid(),
    title: "Claridad Mental",
    icon: <GiBrainstorm className="h-20 w-20 text-[#dbb4a3]" />,
    text: "dsadjiosfjdsi fnsd fnosd nuoisahfsio nfsaoi fnoisa nfasfno f nuuhuh",
  },
  {
    id: nanoid(),
    title: "Sanacion Espiritual",
    icon: <TbHealthRecognition className="h-20 w-20 text-[#dbb4a3]" />,
    text: "dsadjiosfjdsi fnsd fnosd nuoisahfsio nfsaoi fnoisa nfasfno f nuuhuh",
  },
];

export const freeResources = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/pdfs/ComoMeditar.pdf",
    title: "Meditacion Semanal",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/pdfs/ComoMeditar.pdf",
    title: "Meditacion Semanal",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/pdfs/ComoMeditar.pdf",
    title: "Meditacion Semanal",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];

export const services = [
  {
    id: nanoid(),
    img: one,
    title: "Meditacion Semanal",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: group,
    title: "Meditacion Semanal",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
