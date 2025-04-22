import ButtonPrimary from "../../../components/ButtonPrimary";
import CardText from "../../../components/CardText";

export default function HomeBody() {
  return (
    <body>
      <main>
        <section>
          <div className="ex-container">
            <CardText text="Página inicial" />
            <div className="dsflex">
              <ButtonPrimary text="Ver promoção" />
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
