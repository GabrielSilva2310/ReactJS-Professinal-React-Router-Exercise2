import { Link } from "react-router-dom";
import CardText from "../../components/CardText";
import ButtonPrimary from "../../components/ButtonPrimary";

export default function Subscription() {
  return (
    <body>
      <main>
        <section>
          <div className="ex-container">
          <h1 className="section-title">Faça sua inscrição!</h1>
            <div className="mt30 mb30">
            <CardText text="Página de inscrição" />
            </div>
            <div className="dsflex">
            <Link to={'/promotion'}> <ButtonPrimary text="Ver Promoção" /> </Link>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
