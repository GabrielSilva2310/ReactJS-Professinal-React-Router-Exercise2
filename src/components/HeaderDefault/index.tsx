import { Link } from 'react-router-dom';
import './styles.css';

export default function HeaderDefault(){

    return(
        <header>
            <nav className='ex-container'>
            <Link to={'/'}> <h1>Meu Site</h1> </Link>
            </nav>
        </header>
            


    )




}