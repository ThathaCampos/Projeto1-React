import {FaUser, FaLock} from 'react-icons/fa';
import { useState} from 'react';
import "./Login.css";

const Login = () => {


        const [usename, setUserName] = useState(""); {/* Vai salvar um estado para o campo do email(Aqui no caso, vai ficar vazia. Pq ainda não foi preenchida) e vai altera-lo */}
        const [password, setPassword] = useState(""); {/* Vai salvar um estado para o campo da senha(Aqui no caso, vai ficar vazia. Pq ainda não foi preenchida) e vai altera-lo */}

        const handleSubmit = (event) => {
            event.preventDefault(); {/*para não ficar recarregando a página*/} 
            
            alert("Enviando os dados do email " + usename);
        };


  return (
      <div className="container">
            <form onSubmit={handleSubmit}> {/* o handlerSubmit está ligado ao forms, paraque os dados possam ser enviados*/} 
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                <input type="email" placeholder='E-mail' required onChange={(e) => setUserName(e.target.value)}/>
                <FaUser className="icon"/> {/* esse também é um componente */}
                </div>

                <div className="input-field">
                <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/> 
                <FaLock className="icon"/>  {/* esse também é um componente */}
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button>Entrar</button>
                

                <div className="signup-link">
                    <p>Não possui uma conta? <a href="#">Cadastrar-se</a></p>
                </div>

            </form>
      </div>
    
  );
};

export default Login
