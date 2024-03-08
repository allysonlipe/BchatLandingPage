/** @jsx jsx */
import { rgba } from 'polished';
import Slider from 'react-slick';
import { jsx, Container } from 'theme-ui';
import Testimonial from 'components/cards/testimonial';
import logo1 from 'assets/images/clients/logo1.png';
import logo2 from 'assets/images/clients/logo2.png';
import logo3 from 'assets/images/clients/logo3.png';
import logo4 from 'assets/images/clients/logo4.png';
import logo5 from 'assets/images/clients/logo5.png';

import 'assets/css/react-slick.css';

const data = [
  {
    id: 1,
    logo: logo1,
  },
  {
    id: 2,
    logo: logo2,
  },
  {
    id: 3,
    logo: logo3,
  },
  {
    id: 4,
    logo: logo4,
  },
  {
    id: 5,
    logo: logo5,
  },
];

const settings = {
  arrows: false,
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, // Torna o carrossel automático
  autoplaySpeed: 2000, // Define o intervalo entre os slides em milissegundos
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <Slider sx={styles.slider} {...settings}>
          {data.map((testimonial) => (
            <Testimonial key={testimonial.id} data={testimonial} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: '#060D09',
    pt: [12, null, null, null, 10, 14],
    pb: [8, null, null, null, null, null],
  },
  slider: {
    '.slick-list': {
      mx: [null, null, null, null, -2, 0],
    },
    '.slick-slide': {
      mr: [null, null, null, null, 4, 0],
    },
    '.slick-dots': {
      display: 'flex !important',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: [3, null, null, 13],
      li: {
        mx: 1,
        display: 'flex',
      },
      button: {
        // backgroundColor: rgba('#2D3D50', 0.15),
        backgroundColor: 'transparent',
        borderRadius: 50,
        border: 0,
        cursor: 'pointer',
        padding: 0,
        overflow: 'hidden',
        textIndent: '-9999em',
        width: 10,
        height: 6,
        outline: 0,
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        // backgroundColor: rgba('#2D3D50', 0.4),
        backgroundColor: 'transparent',
        width: 20,
      },
    },
  },
};
