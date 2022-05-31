import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container container">
      <h1>Desafio Github API</h1>
      <p>Bootcamp Spring React - DevSuperior</p>
      <div>
        <Link to={'/search'}>
          <Button text="Começar" />
        </Link>
      </div>
    </div>
  );
};
export default Home;
