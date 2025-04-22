import './styles.css';

type Props = {

    text : string;
}


export default function CardText({text} : Props){

    return(
        <div className="card-text">
            {text}
        </div>


    );



}