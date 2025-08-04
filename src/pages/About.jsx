import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Footer from '../components/Footer.jsx';

import ceo from '../../public/img/ceo.png';
const About = () => {
  return (
    <>
      
    <div className="px-[180px]">
      <Breadcrumbs />
     </div>
     
      <section
        className="h-[300px] bg-[url('../public/img/hero.jpg')] bg-center bg-cover flex flex-col justify-center items-center text-white text-center"
      >
        <h1 className="text-4xl font-bold">About for Bacola</h1>
        <p className="uppercase tracking-widest text-xs opacity-90 font-semibold">
          We can do more for you
        </p>
      </section>

      <div className="max-w-[1000px] mx-auto px-5 py-10 text-[#222]">
        <div className="mb-10">
          <p>
           In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
           rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
           Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold">Quisque erat urna, congue et libero in</h2>
          <h2 className="text-xl font-semibold">eleifend euismod velit.</h2>
          <br />
          <p>
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim.
            Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id
            interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>

        <div className="flex gap-8 items-center mb-10 flex-col md:flex-row text-left">
          <img src={ceo} alt="CEO" className="w-[300px] rounded-lg" />
          <div>
            <small className="text-gray-500 block mb-2">Rachel Leonard - Bacola CEO</small>
            <h3 className="text-lg font-semibold">Duis convallis luctus pretium.</h3>
            <h3 className="text-lg font-semibold">Pellentesque habitant morbi</h3>
            <br />
            <p className="mb-4">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
            </p>
            <p>
           In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida,
           dui eget aliquet tempus, turpis orci vehicula ipsum, eget porttitor sapien tortor
           at neque. Cras id pulvinar lacus, ac volutpat neque. Ut at magna id justo
           bibendum lobortis. Integer tortor nulla, ultricies et nisi sit amet, interdum
           dictum felis. In semper laoreet dui vitae pharetra. Etiam sit amet molestie nulla,
           eu efficitur orci. Praesent rutrum ante justo, eget malesuada ante ornare ac. Ut
           Curabitur fermentum dolor eu lacus consectetur varius.
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
            consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
            dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit
            ante, vel vulputate tortor blandit nec.
          </p>
          <p>
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
            rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
            Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
