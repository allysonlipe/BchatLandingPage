/** @jsx jsx */
import { jsx, Box, Container, Flex, Button, Heading, Text } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'components/image';

const Security = () => {
  const data = useStaticQuery(graphql`
    query {
      privacy: file(relativePath: { eq: "Group20.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 633
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <section id="features" sx={styles.section}>
      <Container sx={styles.content}>
        <Box sx={styles.grid}>
          <Box sx={styles.illustration}>
            <Image
              src={
                (data.privacy !== null) | undefined
                  ? data.privacy.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="privacy"
            />
          </Box>

          <Flex sx={styles.hero}>
            <Heading as="h1">
              Veja como o BChat IA <span style={{ color: '#00CF87' }}>impulsionou</span><br /> o sucesso da Pensar Clube
            </Heading>
            <Text as="p">
              “Com o BChat não deixamos mais nenhum associado esperando atendimento. Com a integração com o nosso sistema de gestão, o associado pode emitir seu boleto mensal, de forma prática, sendo atendido pelo BChat de forma tão prática que imagina estar sendo atendido por um humano’’Luana Cavalcanti - Gerente Pensar Clube
            </Text>
            <Button sx={styles.btnPrimary}>
              Impulsione Seu Atendimento
            </Button>
          </Flex>


        </Box>
        <Box sx={styles.div}>
          <Flex sx={styles.hero}>
            <Heading as="h2">
              Pronto para Transformar
              seu atendimento?
            </Heading>
            <Text as="p">
              Dê vida ao seu atendimento ao cliente com o BChat criado<br /> sob medida! Estamos ansiosos para mergulhar nas suas<br /> ideias e transformá-las em uma realidade.
            </Text>
          </Flex>
          <Button sx={styles.btnSecundary}>
            Consulta Gratuita
          </Button>
        </Box>
      </Container>
    </section>
  );
};

export default Security;

const styles = {
  section: {
    mr: [null, null, null, 6, '300px'],
    ml: [null, null, null, 6, '300px'],
    pt: [6, null, null, null, 10, 14],
    pb: [6, null, null, 8, 10, 11],
  },
  grid: {
    display: ['flex', null, null, 'grid'],
    alignItems: 'center',
    gap: [null, null, null, 6, 14],
    flexDirection: ['column-reverse', null, null, 'unset'],
    gridTemplateColumns: [null, null, null, 'repeat(2, 1fr)', '1fr 550px'],
  },

  div: {
    maxHeight: '300px',
    display: 'flex',
    flexDirection: ['row','row','row','colunm'],
    alignItems: 'center',
    textAlign: 'left',
    gap: '150px',
    display: ['none', 'none', 'none', 'flex'],
    mt: [6, null, null, null, 10, 14],
    padding: [.9, null, null, null, 10, 8],
    backgroundColor: '#060D09',
    borderRadius: '39px', // Adicionando bordas levemente arredondadas
    h2: {
      color: 'white',
      fontSize: [6, null, null, 8, 11],
      fontWeight: [6, null, null, 8, 900],
      lineHeight: 1.2,
      pl: [8, null, null, 8],
      alignSelf: 'start', // Alinhando o parágrafo no início da linha
    },
    p: {
      color: '#DBDBDB',
      fontSize: 1,
      alignSelf: 'start', // Alinhando o parágrafo no início da linha
    },


  },
  btnSecundary: {
    maxWidth: '100%',
    maxHeight: '314px',
    backgroundColor: '#02B777',
    borderRadius: '39px',
    pl: '80px',
    pr: '80px',
    fontSize: 5,
  },
  hero: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    h1: {
      color: '#2A2A2A',
      fontSize: [6, null, null, 8, 9],
      fontWeight: [6, null, null, 8, 900],
      lineHeight: 1.2,
    },

    p: {
      color: '#868686',
      fontSize: [1, null, null, 3],
      marginTop: [1, null, null, 2],
      pl: [8, null, null, 8],
    },

  },

  btnPrimary: {
    backgroundColor: '#1C5944',
    mt: [3, null, null, 8],
  },

  illustration: {
    mt: [8, null, null, 0],
    // max: 'none',
    maxWidth: '310px',
    objectFit: 'contain',
  },
};
