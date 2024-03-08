/** @jsx jsx */
import { jsx, Box, Container, } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';

const Addons = () => {
  const data = useStaticQuery(graphql`
    query {
      addons: file(relativePath: { eq: "Group21.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <section sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.illustration}>
            <Image
              src={
                (data.addons !== null) | undefined
                  ? data.addons.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="Feature Image 1"
            />
          </Box>
          <SectionHeading
            sx={styles.heading}
            title="Centralize os seus atendimentos e ganhe velocidade"
            description="Omnichannel redefine a comunicação com o cliente, integrando múltiplos canais em uma experiência de atendimento coesa e sem emendas"
          />

        </Box>
      </Container>
    </section>
  );
};

export default Addons;

const styles = {
  section: {
    backgroundColor: '#060D09',
    pt: [6, null, null, 8, 10, 11],
    pb: [8, null, null, 12, null, 14],
  },
  grid: {
    display: 'grid',
    alignItems: 'center',
    gap: 6,
    gridTemplateColumns: ['1fr', null, null, 'repeat(2, 1fr)', '500px 1fr'],
  },
  heading: {
    textAlign: ['center', null, null, 'start'],
    h3: {
      color: '#F9F9F9',
      fontSize: [3, null, null, 6, 11],
      lineHeight: 1.53,
    },
    p: {
      color: '#EFEFEF',
      fontWeight: 'ligther',
    }
  },
  illustration: {},
};
