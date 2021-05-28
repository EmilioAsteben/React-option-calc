import logo from './logo.svg';
import Calculator from './Calculator';
import ClassCalculator from './ClassCalculator';
import { useEffect, useState } from 'react';
import './App.css';
import './calculator.scss';

function App() {

  const [choosedOptions, setChoosedOptions] = useState({});

  // const [optionChecked, setOptionChecked] = 
  // useState({
  //     'Хост и домен': true,
  //     search_index: false,
  //     ssl: false,
  //     map: false,
  //     open_graph: false,

  // });

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


//   const checkedOption = {

//     optionChecked: optionChecked,
//     setOptionChecked: setOptionChecked,
// }
  return (
    <div className="App">
      <div className="wrapper">
      <Calculator
      options = {options}
      initialPrice = {4000}

      
      ></Calculator>

      <ClassCalculator
      options = {options}
      initialPrice = {4000}

      
      />
        
      </div>
      
    </div>
  );
}

export default App;
