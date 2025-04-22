import CardText from "../../../components/CardText";
import ButtonPrimary from "../../../components/ButtonPrimary";

export default function Promotion() {
  return (
    <body>
      <main>
        <section>
          <div className="ex-container">
            <CardText text="Página de promoção" />
            <div className="dsflex">
              <ButtonPrimary text="Quero participar" />
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
