import Calculator from './Calculator';
import { useEffect, useState } from 'react';
import './App.css';
import './calculator.scss';

function App() {



  let options = {
    'Хост и домен': [500, true,
      <div>
        <p><b>Домен</b> - адрес сайта</p>
        <p><b>Хостинг</b> - сервер, на котором располагается веб-сайт </p>
      </div>
    ],


    'Поисковая индексация': [600, true, 
    
      <p>
        <b>Индексация</b> - добавление содержимого сайта в индекс поисковых систем, что позволяет пользователям получать ссылку на ваш сайт при поисковом запросе по ключевым словам.
        </p>
   ],
   
    'SSL сертификат': [400, true,
      
      <p> <b>SSL сертификат </b> -  цифровая подпись сайта, позволяющая передавать данные по  протоколу https.
      Добавляет  значок  в адресной строке и поднимает сайт в выдаче поисковых систем. 
  </p>
    
    ],


    'Яндекс карта': [300, true,
      <p>Добавление на сайт интерактивной или статичной <b>Yandex карты</b> с геолокацией организации</p>
    ],
    'Open graph': [900,
      <p><b>Open Graph -</b> <br/> разметка позволяющая стилизовать и задавать содержимое при вставке ссылки на ваш сайт в социальных сетях и мессенджерах</p>
    ],
    
    'Пустая опция': []
    
  }

  const [data, setData] = useState();




  return (
    <div className="App">
      <div className="wrapper">
      <Calculator
      options = {options}
      initialPrice = {4000}
      setData = {setData}

      
      ></Calculator>

      <div className="recieved__data">
        
      </div>
        
      </div>
      
    </div>
  );
}

export default App;
