/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import FaqItem from 'components/cards/faq-item';

const data = [
  {
    id: 1,
    ques: 'O que é um bot de Atendimento?',
    ans: `Um bot de atendimento é um programa de computador que pode interagir com os usuários através do aplicativo de mensagens. Ele pode ser usado para ajudar os clientes a encontrar informações ou realizar outras tarefas.`,
  },
  {
    id: 2,
    ques: 'Como um bot de atendimento pode ajudar a minha empresa?',
    ans: `Os bots de WhatsApp podem ser programados para fazer uma variedade de tarefas, como automatizar o seus fluxos, facilitar o atendimento dos seus agentes humanos, direcionar o seu cliente para o atendente certo.`,
  },
  {
    id: 3,
    ques: 'Como posso integrar minha equipe de atendimento ao cliente?',
    ans: `A integração da equipe de atendimento ao cliente com uma plataforma multicanal pode ser feita de várias maneiras, incluindo a utilização de softwares específicos, treinamentos e capacitações para utilizar a plataforma, e a implementação de processos e procedimentos para garantir uma comunicação eficaz entre os canais de atendimento.`,
  },
  {
    id: 4,
    ques: 'Como posso monitorar e medir o desempenho da minha equipe de atendimento?',
    ans: `É possível medir o desempenho da equipe de atendimento multicanal através de métricas como tempo de resposta, taxa de resolução de problemas, satisfação do cliente e outras métricas relevantes.`,
  },
];

const masonryOptions = { originTop: true };

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [8, null, null, 15] }}
          description="Consiga as suas respostas"
          title="Veja abaixo o nosso FAQ"
        />
        <Masonry options={masonryOptions} sx={styles.grid}>
          {data.map((item) => {
            return <FaqItem key={item.id} faq={item} className="faq-item" />;
          })}
        </Masonry>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 10, 14],
    pb: [null, null, null, null, null, 10, 14],
  },
  grid: {
    mx: [null, null, null, -6, -8, 'unset'],
  },
};
