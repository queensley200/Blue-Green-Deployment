import { createContext, useState } from "react";
import App from "../App";

export const data = createContext();
const Data = () => {
  const [PopularServices, setPopularServices] = useState([
    {
      service: "Graphic Design",
      cardImg: `url(${require("../images/ps1.png")})`,
    },
    {
      service: "UI/UX Design",
      cardImg: `url(${require("../images/ps2.png")})`,
      route: "/Categories/UIUXDesign",
    },
    {
      service: "Web Development",
      cardImg: `url(${require("../images/ps3.png")})`,
    },
    {
      service: "Digital Marketing",
      cardImg: `url(${require("../images/ps4.png")})`,
    },
    {
      service: "Mobile Development",
      cardImg: `url(${require("../images/ps5.png")})`,
    },
    {
      service: "Video Production",
      cardImg: `url(${require("../images/ps6.png")})`,
    },
    {
      service: "Illustration",
      cardImg: `url(${require("../images/ps7.png")})`,
    },
    {
      service: "Photography",
      cardImg: `url(${require("../images/ps8.png")})`,
    },
  ]);
  const [clientsFeedback, setClientsFeedback] = useState([
    {
      ProfileImg: require("../images/client_testimonials/ct15.png"),
      name: "Olajide Adedoyin",
      company: "Jason Coleman Consult",
      role: "CEO",
      Comment: `WorkWave has been an absolute game-changer for my business. As
                a small business owner, finding the right freelancers used to be
                a daunting task. simple and efficient. The talent pool is vast,
                and the quality of work I've received has exceeded my
                expectations every time.`,
    },
    {
      ProfileImg: require("../images/client_testimonials/ct16.png"),
      name: "Olajide Adedoyin",
      company: "Jason Coleman Consult",
      role: "CEO",
      Comment: `WorkWave has been an absolute game-changer for my business. As
                a small business owner, finding the right freelancers used to be
                a daunting task. simple and efficient. The talent pool is vast,
                and the quality of work I've received has exceeded my
                expectations every time.`,
    },
    {
      ProfileImg: require("../images/client_testimonials/ct17.png"),
      name: "Olajide Adedoyin",
      company: "Jason Coleman Consult",
      role: "CEO",
      Comment: `WorkWave has been an absolute game-changer for my business. As
                a small business owner, finding the right freelancers used to be
                a daunting task. simple and efficient. The talent pool is vast,
                and the quality of work I've received has exceeded my
                expectations every time.`,
    },
    {
      ProfileImg: require("../images/client_testimonials/ct18.png"),
      name: "Olajide Adedoyin",
      company: "Jason Coleman Consult",
      role: "CEO",
      Comment: `WorkWave has been an absolute game-changer for my business. As
                a small business owner, finding the right freelancers used to be
                a daunting task. simple and efficient. The talent pool is vast,
                and the quality of work I've received has exceeded my
                expectations every time.`,
    },
  ]);
  const [inspiringWorks, setInspiringWorks] = useState([
    {
      service: "Product Photography",
      Provider: "Pamilerin Olalekan",
      providersImg: require("../images/mp1.png"),
      cardImg: `url(${require("../images/iW1.png")})`,
    },
    {
      service: "Logo Design",
      Provider: "Pamilerin Olalekan",
      providersImg: require("../images/mp1.png"),
      cardImg: `url(${require("../images/iW2.png")})`,
    },
    {
      service: " Web and Mobile Design",
      Provider: "Pamilerin Olalekan",
      providersImg: require("../images/mp1.png"),
      cardImg: `url(${require("../images/iW3.png")})`,
    },
    {
      service: "3D Illustration",
      Provider: "Pamilerin Olalekan",
      providersImg: require("../images/mp1.png"),
      cardImg: `url(${require("../images/iW4.png")})`,
    },
    {
      service: "Graphic Ddsign",
      Provider: "Pamilerin Olalekan",
      providersImg: require("../images/mp1.png"),
      cardImg: `url(${require("../images/iw5.png")})`,
    },
    {
      service: "Book cover design",
      Provider: "Pamilerin Olalekan",
      providersImg: require("../images/mp1.png"),
      cardImg: `url(${require("../images/iw6.png")})`,
    },
  ]);

  const [Testimonials, setTestimonials] = useState([
    {
      attestantImg: require("../images/te2.png"),
      attestant: "kolawole Jons",
      company: "manic hub",
      role: "consultant",
      testimony: `Working with workwave was a game-changer for my business. 
      Their team of experts not only delivered exceptional results but also showed a deep
       understanding of my brand. I highly recommend them to anyone in need of top-notch 
       freelance services`,
    },
    {
      attestantImg: require("../images/te3.png"),
      attestant: "Bright Wale",
      company: "Stratham Consultancy",
      role: "CEO",
      testimony: `I was blown away by the level of professionalism and creativity 
      workwave brought to the table. They turned my vision into reality and exceeded 
      my expectations. I look forward to collaborating with them on future projects`,
    },
    {
      attestantImg: require("../images/te4.png"),
      attestant: "Charlotte Bekky",
      company: "pirnt crisb",
      role: "co-founder",
      testimony: `The team at workwave is a powerhouse of talent. 
      They not only met our tight deadlines but also delivered work that surpassed 
      our wildest expectations. Their dedication and expertise are truly commendable.`,
    },
    {
      attestantImg: require("../images/te5.png"),
      attestant: "Olivia Adedoye",
      company: "mbern bents",
      role: "HR",
      testimony: `workwave transformed my brand's identity. 
      They took the time to understand my vision and delivered a cohesive and 
      visually stunning brand package. Their creativity and attention to detail are 
      unmatched.`,
    },
    {
      attestantImg: require("../images/te6.png"),
      attestant: "Rasheed Ade",
      company: "brighs",
      role: "CEO",
      testimony: `Choosing workwave was one of the best decisions I made for
       my startup. They not only provided expert advice but also delivered high-quality 
       work within our budget. Their dedication to client satisfaction is evident in every
        project.`,
    },
    {
      attestantImg: require("../images/te7.png"),
      attestant: "Tunde Ahmed",
      company: "xdin brin",
      role: "Founder",
      testimony: `workwave took our social media presence to a whole new level.
       Their strategic approach and attention to detail resulted in a significant increase 
       in engagement and conversions. I can't recommend them enough.`,
    },
  ]);
  const [talents, setTalents] = useState([
    {
      fullName: "Ajasin Oladimeji",
      id: 1,
      profileImg: require("../images/gig_workers/Ajasin Oladimeji.jpg"),
      profession: "UI/UX designer",
      location: "Lagos,Nigeria",
      rating: "4.8/5",
      portfolio: [
        {
          title: "Naxic: Travel webApp",
          img: `url(${require("../images/portfolioImages/pi1.png")})`,
        },
        {
          title: "Certinex: Ecommerce landing page",
          img: `url(${require("../images/portfolioImages/pi2.png")})`,
        },
        {
          title: "Nexus: E-Learning dashboard",
          img: `url(${require("../images/portfolioImages/pi3.png")})`,
        },
        {
          title: "Euromek:Real Estate landing page",
          img: `url(${require("../images/portfolioImages/pi4.png")})`,
        },
      ],
      shortInfo: `A passionate UI/UX designer with a deep love for crafting exceptional digital
       experiences that bridge the gap between aesthetics and functionality. `,
      about: `Hello, I'm a passionate UI/UX designer with a deep love for crafting
       exceptional digital experiences that bridge the gap between aesthetics and 
       functionality. Over the years, I've honed my professions to create designs that not
        only look visually appealing but also deliver seamless, intuitive user journeys.
         With over 12years of experience in the field, I've had the privilege of working 
         with diverse clients and projects across various industries. My journey began at 
         Nexut Autos, where I had the opportunity to collaborate on high-impact projects
          for renowned brands. This experience instilled in me the importance of user-centered
           design principles and effective problem-solving.`,
      testimonials: [1, 2, 3, 4],
    },
    {
      fullName: "Juliet Smart",
      id: 2,
      profileImg: require("../images/gig_workers/Juliet Smart.jpg"),
      profession: "UI/UX designer",
      location: "Texas,Usa",
      rating: "4.8/5",
      shortInfo: `A passionate UI/UX designer with a deep love for crafting exceptional digital
       experiences that bridge the gap between aesthetics and functionality. `,
      about: `Hello, I'm a passionate UI/UX designer with a deep love for crafting
       exceptional digital experiences that bridge the gap between aesthetics and 
       functionality. Over the years, I've honed my professions to create designs that not
        only look visually appealing but also deliver seamless, intuitive user journeys.
         With over 12years of experience in the field, I've had the privilege of working 
         with diverse clients and projects across various industries. My journey began at 
         Nexut Autos, where I had the opportunity to collaborate on high-impact projects
          for renowned brands. This experience instilled in me the importance of user-centered
           design principles and effective problem-solving.`,
      testimonials: [1, 2, 3, 4],
      portfolio: [
        {
          title: "Naxic: Travel webApp",
          img: `url(${require("../images/portfolioImages/pi1.png")})`,
        },
        {
          title: "Certinex: Ecommerce landing page",
          img: `url(${require("../images/portfolioImages/pi2.png")})`,
        },
        {
          title: "Nexus: E-Learning dashboard",
          img: `url(${require("../images/portfolioImages/pi3.png")})`,
        },
        {
          title: "Euromek:Real Estate landing page",
          img: `url(${require("../images/portfolioImages/pi4.png")})`,
        },
      ],
    },
    {
      fullName: "Alabi Lawrence",
      id: 3,
      profileImg: require("../images/gig_workers/Alabi Lawrence.png"),
      profession: "UI/UX designer",
      location: "Michigan,Usa",
      rating: "4.8/5",
      shortInfo: `A passionate UI/UX designer with a deep love for crafting exceptional digital
       experiences that bridge the gap between aesthetics and functionality. `,
      about: `Hello, I'm a passionate UI/UX designer with a deep love for crafting 
      exceptional digital experiences that bridge the gap between aesthetics and 
      functionality. Over the years, I've honed my skills to create designs that not
      only look visually appealing but also deliver seamless, intuitive user journeys.
      With over 12years of experience in the field, I've had the privilege of working 
      with diverse clients and projects across various industries. My journey began at
       Nexut Autos, where I had the opportunity to collaborate on high-impact projects 
       for renowned brands. This experience instilled in me the importance of user-centered 
       design principles and effective problem-solving.


`,
      testimonials: [1, 2, 3, 4],
      portfolio: [
        {
          title: "Naxic: Travel webApp",
          img: `url(${require("../images/portfolioImages/pi1.png")})`,
        },
        {
          title: "Certinex: Ecommerce landing page",
          img: `url(${require("../images/portfolioImages/pi2.png")})`,
        },
        {
          title: "Nexus: E-Learning dashboard",
          img: `url(${require("../images/portfolioImages/pi3.png")})`,
        },
        {
          title: "Euromek:Real Estate landing page",
          img: `url(${require("../images/portfolioImages/pi4.png")})`,
        },
      ],
    },
    {
      fullName: "Ajasin Oladimeji",
      id: 4,
      profileImg: require("../images/gig_workers/mathew_thompson.png"),
      profession: "UI/UX designer",
      location: "Abuja,Nigeria",
      rating: "4.8/5",
      shortInfo: `A passionate UI/UX designer with a deep love for crafting exceptional digital
       experiences that bridge the gap between aesthetics and functionality. `,
      about: `Hello, I'm a passionate UI/UX designer with a deep love for crafting
       exceptional digital experiences that bridge the gap between aesthetics and 
       functionality. Over the years, I've honed my professions to create designs that not
        only look visually appealing but also deliver seamless, intuitive user journeys.
         With over 12years of experience in the field, I've had the privilege of working 
         with diverse clients and projects across various industries. My journey began at 
         Nexut Autos, where I had the opportunity to collaborate on high-impact projects
          for renowned brands. This experience instilled in me the importance of user-centered
           design principles and effective problem-solving.`,
      testimonials: [1, 2, 3, 4],
      portfolio: [
        {
          title: "Naxic: Travel webApp",
          img: `url(${require("../images/portfolioImages/pi1.png")})`,
        },
        {
          title: "Certinex: Ecommerce landing page",
          img: `url(${require("../images/portfolioImages/pi2.png")})`,
        },
        {
          title: "Nexus: E-Learning dashboard",
          img: `url(${require("../images/portfolioImages/pi3.png")})`,
        },
        {
          title: "Euromek:Real Estate landing page",
          img: `url(${require("../images/portfolioImages/pi4.png")})`,
        },
      ],
    },
    {
      fullName: "Ajasin Oladimeji",
      id: 5,
      profileImg: require("../images/gig_workers/Ayo_Olufemi.png"),
      profession: "UI/UX designer",
      location: "ontario,Canada",
      rating: "4.8/5",
      shortInfo: `A passionate UI/UX designer with a deep love for crafting exceptional digital
       experiences that bridge the gap between aesthetics and functionality. `,
      about: `Hello, I'm a passionate UI/UX designer with a deep love for crafting
       exceptional digital experiences that bridge the gap between aesthetics and 
       functionality. Over the years, I've honed my professions to create designs that not
        only look visually appealing but also deliver seamless, intuitive user journeys.
         With over 12years of experience in the field, I've had the privilege of working 
         with diverse clients and projects across various industries. My journey began at 
         Nexut Autos, where I had the opportunity to collaborate on high-impact projects
          for renowned brands. This experience instilled in me the importance of user-centered
           design principles and effective problem-solving.`,
      testimonials: [1, 2, 3, 4],
      portfolio: [
        {
          title: "Naxic: Travel webApp",
          img: `url(${require("../images/portfolioImages/pi1.png")})`,
        },
        {
          title: "Certinex: Ecommerce landing page",
          img: `url(${require("../images/portfolioImages/pi2.png")})`,
        },
        {
          title: "Nexus: E-Learning dashboard",
          img: `url(${require("../images/portfolioImages/pi3.png")})`,
        },
        {
          title: "Euromek:Real Estate landing page",
          img: `url(${require("../images/portfolioImages/pi4.png")})`,
        },
      ],
    },
    {
      fullName: "Ajasin Oladimeji",
      id: 6,
      profileImg: require("../images/gig_workers/GW6.png"),
      profession: "UI/UX designer",
      location: "Lagos,Nigeria",
      rating: "4.8/5",
      portfolio: [
        {
          title: "Naxic: Travel webApp",
          img: `url(${require("../images/portfolioImages/pi1.png")})`,
        },
        {
          title: "Certinex: Ecommerce landing page",
          img: `url(${require("../images/portfolioImages/pi2.png")})`,
        },
        {
          title: "Nexus: E-Learning dashboard",
          img: `url(${require("../images/portfolioImages/pi3.png")})`,
        },
        {
          title: "Euromek:Real Estate landing page",
          img: `url(${require("../images/portfolioImages/pi4.png")})`,
        },
      ],
      shortInfo: `A passionate UI/UX designer with a deep love for crafting exceptional digital
       experiences that bridge the gap between aesthetics and functionality. `,
      about: `Hello, I'm a passionate UI/UX designer with a deep love for crafting
       exceptional digital experiences that bridge the gap between aesthetics and 
       functionality. Over the years, I've honed my professions to create designs that not
        only look visually appealing but also deliver seamless, intuitive user journeys.
         With over 12years of experience in the field, I've had the privilege of working 
         with diverse clients and projects across various industries. My journey began at 
         Nexut Autos, where I had the opportunity to collaborate on high-impact projects
          for renowned brands. This experience instilled in me the importance of user-centered
           design principles and effective problem-solving.`,
      testimonials: [1, 2, 3, 4],
    },
  ]);
  const [gigs, setGigs] = useState([
    {
      gigWorker: "Ajasin Oladimeji",
      gigworkerProfileImg: require("../images/mockProfileImg.png"),
      gigWorkerId: 1,
      gigImg: require("../images/gigs/gig1.png"),
      pricePerHour: 200,
      description: `I design  Website template, Landing page, Web UI in XD, PSD & Figma`,
      profession: "UI/UX designer",
    },
    {
      gigWorker: "Ajasin Oladimeji",
      gigworkerProfileImg: require("../images/mockProfileImg.png"),
      gigImg: require("../images/gigs/gig2.png"),
      gigWorkerId: 2,
      pricePerHour: 200,
      description: `I design  Website template, Landing page, Web UI in XD, PSD & Figma`,
      profession: "UI/UX designer",
    },
    {
      gigWorker: "Ajasin Oladimeji",
      gigworkerProfileImg: require("../images/mockProfileImg.png"),
      gigImg: require("../images/gigs/gig3.png"),
      gigWorkerId: 3,
      pricePerHour: 200,
      description: `I design  Website template, Landing page, Web UI in XD, PSD & Figma`,
      profession: "UI/UX designer",
    },
    {
      gigWorker: "Ajasin Oladimeji",
      gigworkerProfileImg: require("../images/mockProfileImg.png"),
      gigImg: require("../images/gigs/gig4.png"),
      gigWorkerId: 4,
      pricePerHour: 200,
      description: `I design  Website template, Landing page, Web UI in XD, PSD & Figma`,
      profession: "UI/UX designer",
    },
    {
      gigWorker: "Ajasin Oladimeji",
      gigworkerProfileImg: require("../images/mockProfileImg.png"),
      gigImg: require("../images/gigs/gig6.png"),
      gigWorkerId: 5,
      pricePerHour: 200,
      description: `I design  Website template, Landing page, Web UI in XD, PSD & Figma`,
      profession: "UI/UX designer",
    },
    {
      gigWorker: "Ajasin Oladimeji",
      gigworkerProfileImg: require("../images/mockProfileImg.png"),
      gigImg: require("../images/gigs/gig5.png"),
      gigWorkerId: 2,
      pricePerHour: 200,
      description: `I design  Website template, Landing page, Web UI in XD, PSD & Figma`,
      profession: "UI/UX designer",
    },
  ]);
  const [clientTestimonials, setClientTestimonials] = useState([
    {
      id: 1,
      name: "Dr. Ahmed Mufasa Taofeeq",
      img: require("../images/client_testimonials/ct1.png"),
      company: " Euronek Housing Agency",
      role: "CEO",
      Testimonial: `Working with Ajasin Oladimeji has been an absolute pleasure from start to finish. Their expertise and passion for user experience design shone through in every aspect of our project.
From the very beginning, they took the time to understand our product and our users' needs thoroughly. Their meticulous research and user personas were instrumental in shaping our design strategy.
`,
    },
    {
      id: 2,
      name: "Dr. Ahmed Mufasa Taofeeq",
      img: require("../images/client_testimonials/ct2.png"),
      company: " Euronek Housing Agency",
      role: "Ceo",
      Testimonial: `Working with Ajasin Oladimeji has been an absolute pleasure from start to finish. Their expertise and passion for user experience design shone through in every aspect of our project.
From the very beginning, they took the time to understand our product and our users' needs thoroughly. Their meticulous research and user personas were instrumental in shaping our design strategy.
`,
    },
    {
      id: 3,
      name: "Dr. Ahmed Mufasa Taofeeq",
      img: require("../images/client_testimonials/ct3.jpg"),
      company: " Euronek Housing Agency",
      role: "Ceo",
      Testimonial: `Working with Ajasin Oladimeji has been an absolute pleasure from start to finish. Their expertise and passion for user experience design shone through in every aspect of our project.
From the very beginning, they took the time to understand our product and our users' needs thoroughly. Their meticulous research and user personas were instrumental in shaping our design strategy.
`,
    },
    {
      id: 4,
      name: "Dr. Ahmed Mufasa Taofeeq",
      img: require("../images/client_testimonials/ct13.jpg"),
      company: "Euronek Housing Agency",
      role: "Ceo",
      Testimonial: ` Working with Ajasin Oladimeji has been an absolute pleasure from start to 
      finish. Their expertise and passion for user experience design shone through in every 
      aspect of our project.From the very beginning, they took the time to understand our 
      product and our users' needs thoroughly. Their meticulous research and user personas
       were instrumental in shaping our design strategy.
`,
    },
  ]);
  const [frequentlyAskedQuestions, setFrequentlyAskedQuestions] = useState([
    {
      question: `Can i use work wave for free`,
      answer: `Yes you can use workwave totally for free and gain a lot of
                bonuses`,
    },
    {
      question: `What payment method can i use?`,
      answer: `You can make use of the following payment methods ,  paypal,debit card,and google pay`,
    },
    {
      question: `Why should i upgrade?`,
      answer: `You would gain ascces to a lot of thrilling features ,like
       unlimited Encrypts ,Solution Engineer Support and many more `,
    },
    {
      question: `Can I change from monthly to yearly?`,
      answer: `Yes you can ,all you have to do is contact our support and the required 
      changes would be made`,
    },
    {
      question: `How can i ask questions about pricing?`,
      answer: `contact our support team at the provided email address `,
    },
    {
      question: `How does Team billing work?`,
      answer: `For companies or organization using workwave ,payment could be made at once with
       just one billing address `,
    },
  ]);

  return (
    <>
      <data.Provider
        value={{
          setPopularServices: setPopularServices,
          PopularServices: PopularServices,
          clientsFeedback: clientsFeedback,
          setClientsFeedback: setClientsFeedback,
          inspiringWorks: inspiringWorks,
          setInspiringWorks: setInspiringWorks,
          setTestimonials: setTestimonials,
          Testimonials: Testimonials,
          talents: talents,
          setTalents: setTalents,
          setGigs: setGigs,
          gigs: gigs,
          setClientTestimonials: setClientTestimonials,
          clientTestimonials: clientTestimonials,
          setFrequentlyAskedQuestions: setFrequentlyAskedQuestions,
          frequentlyAskedQuestions: frequentlyAskedQuestions,
        }}
      >
        <App />
      </data.Provider>
    </>
  );
};

export default Data;
