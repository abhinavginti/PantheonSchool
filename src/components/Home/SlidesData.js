import pic1 from "../Images/slides-pics/pic1.jpg";
import pic2 from "../Images/slides-pics/pic2.jpg";
import pic3 from "../Images/slides-pics/dsc03474.jpg";

const slides = [
  {
    title: "we create a joyful and challenging learning process",
    img: pic1,
    class: "d-flex flex-column flex-md-row-reverse ",
    backgroundColor: "#597E20",
    learnMoreLink: "/",
    slideData: [
      {
        title: "student/teacher ratio",
        data: "20:1",
      },
      {
        title: "CBSE Pattern",
        data: "PK-12",
      },
      {
        title: "Focus on Concepts",
        data: "100%",
      },
    ],
  },
  {
    title: "we forge meaningful relationships",
    img: pic2,
    class: "d-flex flex-column flex-md-row ",
    backgroundColor: "#5A2049",
    learnMoreLink: "/",
    slideData: [
      {
        title: "max class size",
        data: "30",
      },
      {
        title: "acres area",
        data: "2.24",
      },
      {
        title: "referal students",
        data: "50%",
      },
    ],
  },
  {
    title: "we offer unique facilities",
    img: pic3,
    class: "d-flex flex-column flex-md-row-reverse ",
    backgroundColor: "#D9002A",
    learnMoreLink: "/",
    slideData: [
      {
        title: "weekly spoken english classes",
        data: "5",
      },
      {
        title: "weekly tests",
        data: "5",
      },
      {
        title: "hours daily tuition",
        data: "2",
      },
    ],
  },
];

export default slides;
