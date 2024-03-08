/** @jsx jsx */
import { rgba } from 'polished';
import { jsx, Flex, Image, Container, Heading, Text, Button } from 'theme-ui';
// import Image from 'components/image';
// import Play from 'components/icons/play';
import banner from 'assets/images/banner.png';

const Banner = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '558431901700'; // Número de telefone do WhatsApp
    const message = 'Olá, tenho interesse no Bchat'; // Mensagem inicial
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank'); // Abre o link do WhatsApp em uma nova aba
  };

  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <div sx={styles.content}>
          <Heading as="h1">
            Solução completa de <span style={{ color: '#00CF87' }}>atendimento com IA:</span><br />
            do marketing ao pós-venda
          </Heading>
          <Text as="p">Centralize o atendimento, otimize a comunicação e
            personalize seu fluxo.</Text>
        </div>
        <Flex as="figure" sx={styles.illustration}>
          <Image src={banner} alt="banner" />
        </Flex>
        <Flex sx={styles.buttonGroup}>
        <Button variant="primary" sx={styles.btnPrimary} onClick={handleWhatsAppClick}>
            Obtenha um diagnóstico grátis da sua operação
          </Button>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor: '#060D09',
    pt: [8, null, null, null, 0, 0],
    pb: [8, null, null, null, null, null],
    position: 'relative',
    zIndex: 0,
    '::before': {
      // backgroundColor: 'white',
      content: `''`,
      position: 'absolute',
      height: [30, null, null, 70, 85, 0],
      bottom: 0,
      width: '100%',
      zIndex: -1,
    },
  },
  container: {
    minHeight: [null, null, null, '100vh', '100vh', '100vh'],
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: ['flex-end', 'flex-end', 'flex-end', 'center', 'center'],
  },
  content: {
    maxWidth: [null, null, null, 570, 690],
    textAlign: 'center',
    marginTop: [3, null, null, 6, 45],
    h1: {
      color: 'white',
      fontSize: [6, null, null, 8, 10],
      lineHeight: 1.35,
    },
    p: {
      color: rgba('white', 0.8),
      fontSize: [1, null, null, 2],
      marginTop: [3, null, null, 6],
    },
  },
  buttonGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
    button: {
      px: ['12px', null, null, '18px'],
    },
  },
  btnPrimary: {
    backgroundColor: '#1C5944',
  },
  btnOutlined: {
    borderColor: rgba('white', 0.25),
    color: 'white',
    ml: 3,
    svg: {
      ml: 2,
    },
  },
  illustration: {
    transform: ['scale(1.20)', null, null, 'none'],
    alignItems: 'center',
    display: 'flex',
    marginTop: [2, null, null, null, null],
  },
};
