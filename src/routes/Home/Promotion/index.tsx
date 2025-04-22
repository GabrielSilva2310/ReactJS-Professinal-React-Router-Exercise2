import CardText from "../../../components/CardText";
import ButtonPrimary from "../../../components/ButtonPrimary";
import { Link } from "react-router-dom";

export default function Promotion() {
  return (
    <body>
      <main>
        <section>
          <div className="ex-container">
            <div className="mt30 mb30">
            <CardText text="Página de promoção" />
            </div>
            <div className="dsflex">
            <Link to={'/sub'}> <ButtonPrimary text="Quero participar" /> </Link>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
