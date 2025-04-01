import "./LPFaq.css";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const faqData = [
  {
    question: "Para quem é indicado o curso Protocolo CEO?",
    answer:
      "O curso é voltado para psicólogos clínicos e terapeutas que desejam se especializar no tratamento da compulsão alimentar, emagrecimento e obesidade com base em evidências científicas.",
  },
  {
    question: "Preciso ser psicólogo para me inscrever?",
    answer:
      "Sim, o curso é destinado a profissionais da área da psicologia e terapias afins, pois aborda técnicas e conceitos específicos para atuação clínica.",
  },
  {
    question: "O curso é 100% online?",
    answer:
      "Sim! Todas as aulas são online e podem ser acessadas no seu próprio ritmo, de qualquer lugar e a qualquer momento.",
  },
  {
    question: "Por quanto tempo terei acesso ao curso?",
    answer:
      "Ao se inscrever, você terá acesso vitalício ao conteúdo, podendo revisar os módulos sempre que precisar.",
  },
  {
    question: "O curso oferece certificado de conclusão?",
    answer:
      "Sim! Ao finalizar todos os módulos, você receberá um certificado de conclusão reconhecendo sua especialização.",
  },
  {
    question: "Há suporte para dúvidas durante o curso?",
    answer:
      "Sim! Você contará com suporte especializado da equipe da Ludmila Garcia para esclarecer dúvidas e aprofundar seu aprendizado.",
  },
  {
    question: "Como funciona a garantia do curso?",
    answer:
      "Caso você não fique satisfeito, oferecemos uma garantia de [X] dias para reembolso integral, sem burocracia.",
  },
  {
    question: "Como posso pagar pelo curso?",
    answer:
      "Você pode pagar à vista por R$ 997,00 ou parcelar em até 12x de R$ 103,11 no cartão de crédito.",
  },
  {
    question: "Como faço minha inscrição?",
    answer:
      "Basta clicar em qualquer botão de inscrição na página e seguir as instruções para garantir sua vaga.",
  },
  {
    question: "Quando posso começar o curso?",
    answer:
      "Assim que o pagamento for confirmado, você receberá acesso imediato a todo o conteúdo.",
  },
];

function LPFaq() {
  return (
    <div className="lp-faq">
      <h2 className="lp-faq-title">Perguntas Frequentes:</h2>
      <Accordion className="lp-faq-accordion" defaultActiveKey="0">
        {faqData.map((item, index) => (
          <Accordion.Item
            className="lp-faq-item"
            eventKey={index.toString()}
            key={index}
          >
            <Accordion.Header className="lp-faq-text">
              {item.question}
            </Accordion.Header>
            <Accordion.Body className="lp-faq-text">
              {item.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default LPFaq;
