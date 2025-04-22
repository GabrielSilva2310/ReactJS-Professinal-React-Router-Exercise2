import CardText from "../../../components/CardText";
import ButtonPrimary from "../../../components/ButtonPrimary";

export default function Registration() {
  return (
    <body>
      <main>
        <section>
          <div className="ex-container">
            <CardText text="Página de inscrição" />
            <div className="dsflex">
              <ButtonPrimary text="Ver promoção" />
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
