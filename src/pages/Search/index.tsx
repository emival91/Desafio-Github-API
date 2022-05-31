import axios from 'axios';
import { useState } from 'react';
import ResultSearch from '../../components/ResultSearch';
import ResultCardLoader from '../../components/ResultSearch/ResultSearchLoader';
import './styles.css';

type FormData = {
  login: string;
};

type Profile = {
  name: string;
  location: string;
  url: string;
  avatar_url: string;
  followers: string;
};

const Search = () => {
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    login: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.login}`)
      .then((response) => {
        setProfile(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="search-container">
      <div className="form-search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="login"
              value={formData.login}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
 
      {isLoading ? <ResultCardLoader /> : profile && (
          <div className="line row">            
            <div className="imagem col-sm-12 col-md-3">
            <img src={profile.avatar_url} alt={profile.name} />
            </div>                    
            <div className="information col-sm-12 col-md-9">
              <h6>Informações</h6>  
              <div className="link"><strong>{'Perfil'}:</strong> <a href={profile.url}>{profile.url}</a></div>
              <div className="link"><strong>{'Seguidores'}: </strong>{profile.followers}</div>              
              <ResultSearch description={profile.location} title={'Localidade'} />
              <ResultSearch description={profile.name} title={'Nome'} />
            </div>
          </div>
        )}
        <br />
      </div>
    
  );
};

export default Search;
