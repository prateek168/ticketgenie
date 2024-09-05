// Importing images
import indianMuseumImg from '../../app/assets/popularMuseums/tim.jpg';
import nationalMuseumImg from '../../app/assets/popularMuseums/nm.png'; // Updated to png
import chhatrapatiShivajiImg from '../../app/assets/popularMuseums/csm.png'; // Updated to png
import rajaDinkarKelkarImg from '../../app/assets/popularMuseums/rd.jpg'; // Updated to png
import salarJungImg from '../../app/assets/popularMuseums/sjm.jpg';
import mysoreZooImg from '../../app/assets/popularMuseums/mysuruzm.png'; // Updated to png
import victoriaMemorialImg from '../../app/assets/popularMuseums/vmk.jpeg';

const museumsList = [
  {
    id: 1,
    name: "The Indian Museum",
    category: "Historical",
    established: "Established in 1814",
    address: "Kolkata, West Bengal",
    image: indianMuseumImg,
  },
  {
    id: 2,
    name: "National Museum",
    category: "Archaeological",
    established: "Established in 1949",
    address: "New Delhi, Delhi",
    image: nationalMuseumImg,
  },
  {
    id: 3,
    name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    category: "Art",
    established: "Established in 1922",
    address: "Mumbai, Maharashtra",
    image: chhatrapatiShivajiImg,
  },
  {
    id: 4,
    name: "Raja Dinkar Kelkar Museum",
    category: "Cultural",
    established: "Established in 1962",
    address: "Pune, Maharashtra",
    image: rajaDinkarKelkarImg,
  },
  {
    id: 5,
    name: "Salar Jung Museum",
    category: "Historical",
    established: "Established in 1951",
    address: "Hyderabad, Telangana",
    image: salarJungImg,
  },
  {
    id: 6,
    name: "Mysore Zoo and Museum",
    category: "Natural History",
    established: "Established in 1892",
    address: "Mysore, Karnataka",
    image: mysoreZooImg,
  },
  {
    id: 7,
    name: "Victoria Memorial",
    category: "Art",
    established: "Established in 1921",
    address: "Kolkata, West Bengal",
    image: victoriaMemorialImg,
  }
];

export default museumsList;
