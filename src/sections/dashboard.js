/** @jsx jsx */
import { rgba } from 'polished';
import { jsx, Container, Image, Heading, Text } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
// import SectionHeading from 'components/section-heading';
import TabButton from 'components/tabs/tab-button';
import gp1 from 'assets/images/gp1.png';
import gp2 from 'assets/images/gp2.png';
import gp3 from 'assets/images/gp3.png';
import gp4 from 'assets/images/gp4.png';
import 'rc-tabs/assets/index.css';
import omnichannel from 'assets/images/icons/omnichannel.png';
import nps1 from 'assets/images/icons/nps1.png';
import bot1 from 'assets/images/icons/bot1.png';
import chat1 from 'assets/images/icons/chat1.png';


const data = [
  {
    id: 1,
    title: 'Omnichannel',
    icon: <img src={omnichannel} alt="Omnichannel" />,
    image: gp1,
  },
  {
    id: 2,
    title: ['Monitoramento', 'de qualidade'],
    icon: <img src={nps1} alt="nps1" />,
    image: gp2,
  },
  {
    id: 3,
    title: ['Respostas', 'Instantâneas'],
    icon: <img src={bot1} alt="bot1" />,
    image: gp3,
  },
  {
    id: 4,
    title: ['Atendimento 24/7', 'sem interrupções'],
    icon: <img src={chat1} alt="chat1" />,
    image: gp4,
  },
];

const Dashboard = () => {
  return (
    <section id="dashboard" sx={styles.section}>
      <Container>
        <div sx={styles.content}>
          <Heading as="h1">
            Leva seu <span style={{ color: '#00CF87' }}>atendimento online </span>
            ao próximo <br />nível com a força da IA
          </Heading>
          <Text>Com o BChat IA, reduza o tempo de atendimento automatizando processos<br /> e personalizando experiências para fidelizar clientes</Text>
        </div>

        <Tabs sx={styles.dashboardTabs} animated={{ tabPane: true }}>
          {data.map((tab) => (
            <TabPane key={tab.id} tab={<TabButton tab={tab} />}>

              <Image src={tab.image} alt={tab.title} />
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: rgba('#7141F8', 0.03),
    pt: [8, null, null, null, null],
    pb: [6, null, null, null, 12],
    textAlign: 'center',
    mx: 'auto',
  },
  content: {
    pb: [6, null, null, null, 12, 12],
    maxWidth: [null, null, null, null, null],
    justifyContent: 'Center',
    textAlign: 'center',
    marginTop: [3, null, null, 6, 45],
    h1: {
      color: '#2A2A2A',
      fontWeight: [500, 500, 500, 900, 700],
      fontSize: [4, null, 5, 6],
      letterSpacing: [null, null, null, 'heading'],

    },
    p: {
      color: rgba('#02073E', 0.7),
      maxWidth: 445,
    },
  },

  dashboardTabs: {
    border: 0,
    '.rc-tabs-nav-wrap': {
      marginTop: 9,
      justifyContent: 'center',
      marginBottom: 8,
      overflow: 'none',
    },
    '.rc-tabs-ink-bar': {
      display: 'none',
    },
    '.rc-tabs-tabpane, .rc-tabs-tab-btn': {
      outline: 0,
    },
    '.rc-tabs-nav-list': {
      flexWrap: ['wrap', null, null, 'wrap'],
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      ':nth-of-type(1),:nth-of-type(2)': {
        mb: [4, null, null, 0],
      },
      ':nth-of-type(2)': {
        ml: [4, null, null, 0],
      },
      ':nth-of-type(4)': {
        ml: [2, null, null, 0],
      },
      '+ .rc-tabs-tab': {
        ml: [null, null, null, 4, 8],
      },
    },
    '.rc-tabs-tab-active': {
      fontWeight: [400, null, null, 500],
      boxShadow: '0px 4px 6px rgba(125, 128, 170, 0.08)',
      borderRadius: 5,
    },
  },
};
