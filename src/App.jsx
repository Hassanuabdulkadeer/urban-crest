import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import emailjs from "emailjs-com";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import Logo from "./assets/images/logo.png";
import Herobg from "./assets/images/hero-bg.jpg";
import AboutImg from "./assets/images/about-c.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="flex justify-between items-center px-2 sm:px-8 py-4 bg-gray-100 border-b border-gray-300 relative">
      <div className="flex items-center">
        <img src={Logo} alt="Urban Crest Logo" className="h-8 sm:h-10 mr-3" />
        <h1 className="text-md sm:text-xl font-light text-gray-700">
          URBAN CREST
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:block">
        <ul className="flex space-x-3 sm:space-x-6">
          {navItems.map(({ path, label }, idx) => (
            <li key={idx}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-gray-900 border-b-2 border-gray-700 pb-1"
                    : "font-light text-gray-700 text-sm"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiOutlineX className="h-6 w-6 text-gray-700" />
          ) : (
            <HiOutlineMenu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-gray-100 border-t border-gray-300 sm:hidden z-10">
          <ul className="flex flex-col space-y-2 py-4 px-4">
            {navItems.map(({ path, label }, idx) => (
              <li key={idx}>
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={({ isActive }) =>
                    isActive
                      ? "block font-medium text-gray-900 border-l-4 border-gray-700 pl-2"
                      : "block font-light text-gray-700 text-sm pl-2"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section
        className="h-[70vh] bg-cover bg-center text-white flex items-center justify-center text-center relative"
        style={{ backgroundImage: `url(${Herobg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-2xl px-4">
          <h2 className="text-4xl md:text-5xl mb-4">
            Welcome to Urban Crest Realty
          </h2>
          <p className="text-lg">
            Where smart living, design, and style are the priority
          </p>
        </div>
      </section>
      {/* <!-- About Us Section --> */}
      <section className="flex flex-col my-10 gap-5 justify-center items-center p-10">
        <h2 className="text-center text-3xl">About Us</h2>
        <div className="grid sm:grid-cols-2 justify-center items-center">
          <div className="p-20 hidden sm:block">
            <img src={AboutImg} alt="About Urban Crest" />
          </div>
          <div classname="flex justify-center  flex-col gap-10 p-10">
            <p className="mb-4 text-justify">
              At Urban Crest Realty Limited, we are reimagining what it means to
              live, work, and thrive in urban Nigeria. As a visionary real
              estate development and investment company, our mission is to
              create innovative, sustainable, and high-quality spaces that
              reflect the evolving aspirations of modern Nigerians.
            </p>
            <p className="mb-4 text-justify">
              Founded on the belief that real estate should not just provide
              shelter but enhance the quality of life, we are committed to
              building smart communities that are both eco-conscious and
              technologically integrated. From residential estates to commercial
              hubs, every Urban Crest project is a fusion of cutting-edge
              design, environmental mindfulness, and functional elegance.
            </p>
            <div className="flex justify-center sm:justify-start">
              <NavLink
                to="/about"
                className="text-white text-center self-center"
              >
                <div className=" bg-gray-600 w-fit p-3 min-w-[200px] justify-center items-center flex rounded-4xl hover:bg-gray-700">
                  Learn More
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Projects Section --> */}
      <section className="flex flex-col my-10 gap-5 justify-center items-center">
        <h2 className="text-center text-3xl">Projects</h2>
        <div className="flex justify-center items-center">
          <div className="relative w-2/3 sm:w-1/3 rounded overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <img src={Herobg} alt="House Type" className="object-cover" />
            <div className="flex absolute justify-center items-center inset-0 z-20">
              <h3 className="text-center text-white font-semibold">
                Coming Soon...
              </h3>
            </div>
          </div>
        </div>
        <div className=" bg-gray-600 w-fit p-3 min-w-[200px] justify-center items-center flex rounded-4xl hover:bg-gray-700">
          <NavLink to="/projects" className="text-white text-center">
            View Projects
          </NavLink>
        </div>
      </section>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="px-8 py-16">
      <h2 className="text-center text-4xl font-light mb-12">ABOUT US</h2>
      <div className="max-w-5xl mx-auto">
        <p className="mb-6 text-gray-600">
          At Urban Crest Realty Limited, we are reimagining what it means to
          live, work, and thrive in urban Nigeria. As a visionary real estate
          development and investment company, our mission is to create
          innovative, sustainable, and high-quality spaces that reflect the
          evolving aspirations of modern Nigerians.
        </p>
        <p className="mb-6 text-gray-600">
          Founded on the belief that real estate should not just provide shelter
          but enhance the quality of life, we are committed to building smart
          communities that are both eco-conscious and technologically
          integrated. From residential estates to commercial hubs, every Urban
          Crest project is a fusion of cutting-edge design, environmental
          mindfulness, and functional elegance.
        </p>
        <p className="mb-6 text-gray-600">
          We understand the urgency of Nigeria’s housing deficit, and we are
          playing an active role in addressing it—one development at a time. But
          beyond closing the gap, our ambition is to set a new benchmark for
          real estate in Nigeria: one that champions sustainability,
          inclusivity, and excellence.
        </p>
        <p className="mb-6 text-gray-600">
          With a team of passionate professionals, forward-thinking architects,
          and a deep understanding of local needs, Urban Crest Realty Limited is
          not just building properties—we are shaping the future of urban
          living..
        </p>
        <p className="mt-12 mb-6 text-gray-600">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Vision Statement
          </h3>
          To be the leading smart and modern home developer, delivering
          intelligent, sustainable, and tech- driven living spaces that redefine
          modern lifestyles. Through cutting-edge innovation, seamless
          automation, and eco-friendly solutions, we aim to set new benchmarks
          for smart living in Nigeria.
        </p>
        <p className="mt-12 mb-6 text-gray-600">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Mission Statement
          </h3>
          To redefine urban living by delivering innovative, energy-efficient,
          and high-quality homes. We are committed to excellence, timely project
          delivery, and creating long-term value for our clients and
          stakeholders through sustainable practices and strategic partnerships.
        </p>
        <div className="mt-12">
          <h2 className="text-center text-3xl font-light mb-8">VALUES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Quality", "Innovation", "Integrity"].map((value, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  {value}
                </h3>
                <p className="text-gray-600 text-sm text-justify">
                  {value === "Quality" &&
                    "We are committed to excellence in everything we do—from materials and craftsmanship to customer service and aftercare. Our developments are built to last, combining beauty, durability, and superior functionality."}
                  {value === "Innovation" &&
                    `Innovation is at the heart of Urban Crest’s vision. By integrating smart home systems, renewable
energy solutions, and modern architectural designs, the company will offer unique housing
solutions that meet contemporary needs.`}
                  {value === "Integrity" &&
                    `Trust is the cornerstone of our business. We operate with
              transparency, accountability, and ethical responsibility, ensuring
              that our clients, partners, and communities can always rely on us.`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => (
  <section className="px-8 py-16 bg-white">
    <h2 className="text-center text-4xl font-light mb-12">PROJECTS</h2>
    <div className="max-w-4xl mx-auto text-gray-600 space-y-6">
      <p>
        At Urban Crest Realty Limited, each project is a testament to our
        commitment to smart, sustainable, and people-centric development. From
        modern residential estates to mixed-use commercial complexes, our
        portfolio is thoughtfully curated to elevate the standard of urban
        living in Nigeria. We prioritize smart infrastructure, green building
        technologies, and functional aesthetics—ensuring our developments are
        not just visually striking but also environmentally responsible and
        deeply livable.
      </p>
      <p>
        Our projects are designed with future-forward Nigerians in
        mind—professionals, families, and investors who seek quality,
        convenience, and value. Whether it’s an intelligently planned smart
        estate in the heart of the city or a serene eco-community on the urban
        outskirts, every Urban Crest project is delivered with precision,
        integrity, and innovation. As we continue to grow, we remain focused on
        bridging the housing gap while creating communities that inspire pride,
        purpose, and long-term prosperity.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {[...Array(8)].map((_, i) => (
        <img
          key={i}
          src={Herobg}
          alt={`Project ${i + 1}`}
          className="w-full h-40 object-cover rounded"
        />
      ))}
    </div>
  </section>
);

// const Contact = () => (
//   <section className="px-8 py-16">
//     <h2 className="text-center text-4xl font-light mb-12">CONTACT US</h2>
//     <form className="max-w-lg mx-auto space-y-6" id="contactForm">
//       {["Name", "Email", "Phone no", "Message"].map((label, idx) => (
//         <input
//           key={idx}
//           type={label === "Message" ? "textarea" : "text"}
//           placeholder={label}
//           required
//           className="w-full p-3 rounded border border-gray-300"
//         />
//       ))}
//       <button className="bg-gray-700 text-white px-6 py-2 rounded-full block mx-auto">
//         Submit
//       </button>
//     </form>
//   </section>
// );
const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cj2wgx6", // replace
        "template_jbv97wl", // replace
        form.current,
        "KfjOFEYdluZ6wiAXw" // replace
      )
      .then(
        (result) => {
          setMessage("Message sent successfully!");
          console.log("form", form.current);
          emailjs
            .sendForm(
              "service_cj2wgx6", // replace
              "template_3b63hhi",
              form.current,
              "KfjOFEYdluZ6wiAXw" // replace
            )
            .then(
              (result) => {
                setMessage("Message sent successfully!");
                form.current.reset();
              },
              (error) => {
                console.log("error", error);
                // setMessage("Failed to send message. Try again later.");
              }
            );
        },
        (error) => {
          setMessage("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="px-8 py-16">
      <div className="max-w-2xl mx-auto mt-20">
        <h2 className="text-center text-3xl font-light mb-6">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full border px-4 py-2 rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
          >
            Send Message
          </button>
          {message && <p className="text-sm text-center mt-2">{message}</p>}
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-700 text-white py-12 px-8">
    <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-6">
      <div>
        <h3 className="mb-2">Contact Info</h3>
        <a href="mailto:urbancrest.ngltd@gmail.com">
          Email: urbancrest.ngltd@gmail.com
        </a>
        <p>Phone number: +123 456 7890</p>
        <p>Address: 123 Real Estate Avenue, City</p>
      </div>
      <div className="flex flex-col items-end">
        <img src={Logo} alt="Urban Crest Logo" className="h-12 mb-2" />
        <h3>URBAN CREST</h3>
      </div>
    </div>
    <div className="text-center mt-8">
      <h3 className="mb-2">Follow Us</h3>
      <div className="flex justify-center space-x-6 text-xl">
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p className="text-sm mt-6 border-t border-white/20 pt-4">
        &copy; 2025 Urban Crest Realty. All rights reserved.
      </p>
    </div>
  </footer>
);

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
