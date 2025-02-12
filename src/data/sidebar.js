import { FaTh,FaStreetView } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { MdOutlineInventory } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";

const menu = [
  {
    title: "Accueil",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Ajouter un client",
    icon: <FaRegAddressBook />,
    path: "/add-product",
  },
  {
    title: " Les factures avec TVA",
    icon: <MdOutlineInventory />,
    path: "/add-client",
  },
  {
    title: " Les factures sans TVA",
    icon: <MdOutlineInventory />,
    path: "/add-facture-sans-TVA",
  },
];

export default menu;