import { useState, useEffect } from "react";
import './Cookie.css'; 

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", true);
    setIsVisible(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="banner">
        <p>
          Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando no site, você concorda com o uso de cookies e nossa política de privacidade.{" "}
          <button className="button" onClick={handleShowModal}>Saiba mais</button>
          <button className="button" onClick={handleAccept}>Aceitar</button>
        </p>
      </div>

      {showModal && (
        <>
          <div className="modal-backdrop" onClick={handleCloseModal} />
          <div className="modal-cookie">
            <h2>Política de Privacidade e Uso de Cookies</h2>
            <p>
              Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Este site usa cookies para melhorar sua experiência de navegação, analisar o tráfego do site e fornecer conteúdo e anúncios personalizados, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD) do Brasil, o Regulamento Geral de Proteção de Dados (GDPR) da União Europeia e outras leis de privacidade aplicáveis.
            </p>
            <h3>O que são cookies?</h3>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles nos ajudam a lembrar suas preferências, entender como você usa nosso site e melhorar sua experiência.
            </p>
            <h3>Por que usamos cookies?</h3>
            <p>
              Usamos cookies para os seguintes fins:
              <ul>
                <li>Para melhorar a experiência do usuário em nosso site.</li>
                <li>Para analisar o tráfego e comportamento no nosso site para melhorias de desempenho.</li>
                <li>Para fornecer conteúdo e anúncios personalizados com base em suas preferências.</li>
              </ul>
            </p>
            <h3>Seus Direitos sob a LGPD, GDPR e Outras Leis</h3>
            <p>
              Sob a Lei Geral de Proteção de Dados Pessoais (LGPD), o Regulamento Geral de Proteção de Dados (GDPR) e outras leis de privacidade aplicáveis, você tem o direito de:
              <ul>
                <li>Acessar seus dados pessoais e solicitar informações sobre como estão sendo usados.</li>
                <li>Corrigir dados imprecisos ou incompletos.</li>
                <li>Solicitar a exclusão dos seus dados pessoais em certas circunstâncias.</li>
                <li>Retirar seu consentimento para o processamento de dados a qualquer momento.</li>
                <li>Solicitar uma cópia dos seus dados pessoais em um formato estruturado e legível por máquina.</li>
                <li>Optar por não receber anúncios personalizados e perfis.</li>
              </ul>
            </p>
            <h3>Proteção de Dados e Transferências Internacionais</h3>
            <p>
              Estamos comprometidos em proteger seus dados. No entanto, seus dados pessoais podem ser transferidos e processados em países fora da sua jurisdição, incluindo países onde as leis de proteção de dados podem ser diferentes das de seu país. Garantimos que qualquer transferência desse tipo esteja em conformidade com as leis de proteção de dados aplicáveis, incluindo a LGPD, GDPR e outras.
            </p>
            <h3>Entre em Contato Comigo</h3>
            <p>
              Para quaisquer dúvidas sobre seus dados pessoais ou se você deseja exercer algum dos seus direitos de acordo com as leis aplicáveis, entre em contato conosco pelo telefone <strong>+55 71 99202-4225</strong>.
            </p>
            <button className="button" onClick={handleCloseModal}>Fechar</button>
          </div>
        </>
      )}
    </>
  );
};

export default Cookie;
