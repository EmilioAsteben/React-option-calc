import React, { useState, useEffect } from 'react';
import './calculator.scss';



{/* <li key = {option} className = {info == option ? 'active' : ''} onPointerOver = {() => showInfo(option)}>
                        
<input onPointerOver = {(e) =>{preventInputPropagation(e)}}  onClick = {(e) => addRemoveOption(e, props.options[option][0],option)}   type="checkbox" name = {option} id = {option} defaultChecked = {optionChecked}  />
<h5><label htmlFor={!isMobile ? option : '#'}> {option}</label></h5>


</li> */}

// onClick = {(e) => showInfo(e)}
const isMobile = window.innerWidth <= 414 ? true : false;


const information = {
    'Хост и домен':
    <div className = 'information__content'>
    <p><b>Домен</b> - адрес сайта</p>
    <p><b>Хостинг</b> - сервер, на котором располагается веб-сайт </p>
    </div> ,

    'Поисковая индексация':
    <div className="information__content">
        <p>
        <b>Индексация</b> - добавление содержимого сайта в индекс поисковых систем, что позволяет пользователям получать ссылку на ваш сайт при поисковом запросе по ключевым словам.
        </p>
        </div>, 

    'SSL сертификат':
    <div className="information__content">
        <p> <b>SSL сертификат </b> -  цифровая подпись сайта, позволяющая передавать данные по  протоколу https.
            Добавляет  значок  в адресной строке и поднимает сайт в выдаче поисковых систем. 
        </p>
    </div>,

    'Яндекс карта':
    <div className="information__content">
        <p>Добавление на сайт интерактивной или статичной <b>Yandex карты</b> с геолокацией организации</p>
    </div>,

    'Open graph':
    <div className="information__content">
        <p><b>Open Graph -</b> <br/> разметка позволяющая стилизовать и задавать содержимое при вставке ссылки на ваш сайт в социальных сетях и мессенджерах</p>
    </div>




    

}


function Calculator(props) {
    

    const [calcState, setCalcState] = useState({
        yinformationContent:{},
        ycalcOptions: [],
        yoptionsChecked: {},
        yinitialPrice: 0,
        ytotalPrice: 0


    });







    useEffect(()=>{

        // Set information content

        let informationContent = {}

        for (let prop in props.options){

            if(props.options[prop].length >= 2 && typeof(props.options[prop][props.options[prop].length-1]) === 'object' ){


              informationContent[prop] = <div className="information__content">

                       {props.options[prop][props.options[prop].length-1]}

                   </div>
            }
        }

        setCalcState((prevState)=>({
        ...prevState, 
        yinformationContent: informationContent
    }))



    // Set initial price

    let fullprice = props.initialPrice ? props.initialPrice : null;
    for(let prop in props.options){
    
    if( props.options[prop].length >= 2 && typeof(props.options[prop][1]) != 'object' && props.options[prop][1] ){

        fullprice += props.options[prop][0];

    } 
}

     setCalcState((prevState)=>({...prevState, ytotalPrice: fullprice}));

     


    // Set calc options

    let calcOptions = [];

    for( let option in props.options){

        // typeof(props.options[prop][1]) != 'object' )

        let optionChecked = props.options[option].length >= 2 && typeof(props.options[option][1]) != 'object'  ? props.options[option][1] : false;

        
      
        calcOptions.push(

            <li key = {option} className = {info == option ? 'active' : ''} onPointerOver = {() => showInfo(option)}>
                        
            <input onPointerOver = {(e) =>{preventInputPropagation(e)}}  onClick = {(e) => addRemoveOption(e, props.options[option][0],option)}   type="checkbox" name = {option} id = {option} defaultChecked = {optionChecked}  />
            <h5><label htmlFor={!isMobile ? option : '#'}> {option}</label></h5>
            
            
       </li>

            
        )
        
    }


    setCalcState((prevState)=>({
        ...prevState, 
        ycalcOptions: calcOptions
    }))



    //  Set checked options


    let optionsobject = {};


    for(let prop in props.options){

    
        if(props.options[prop].length >= 2 && typeof(props.options[prop][1]) != 'object' ){
            optionsobject[prop] = props.options[prop][1];
            
        } else {
            
            optionsobject[prop] = false;
            
        }
            
    }

    
    setCalcState((prevState)=>({
        ...prevState, 
        yoptionsChecked: optionsobject
    }))

        







    },[])

   

   
    



    
    
    const [info, setInfo] = useState('Хост и домен');
    const [initiallPrice, setInitiallPrice] = useState();

    const [calccOptions, setCalccOptions] = useState();

    let calcOptions = [];


    useEffect(()=>{

        

        for( let option in props.options){

        // typeof(props.options[prop][1]) != 'object' )

        let optionChecked = props.options[option].length >= 2 && typeof(props.options[option][1]) != 'object'  ? props.options[option][1] : false;

        
      
        calcOptions.push(

            <li key = {option} className = {info == option ? 'active' : ''} onPointerOver = {() => showInfo(option)}>
                        
            <input onPointerOver = {(e) =>{preventInputPropagation(e)}}  onClick = {(e) => addRemoveOption(e, props.options[option][0],option)}   type="checkbox" name = {option} id = {option} defaultChecked = {optionChecked}  />
            <h5><label htmlFor={!isMobile ? option : '#'}> {option}</label></h5>
            
            
       </li>

            
        )
        console.log('Мега хук',props.options[option][0])
        console.log('Мега хук', option)
    }









    },[])

    
    
//     function getOptionList(){

//     for( let option in props.options){

//         // typeof(props.options[prop][1]) != 'object' )

//         let optionChecked = props.options[option].length >= 2 && typeof(props.options[option][1]) != 'object'  ? props.options[option][1] : false;

        
       
//         calcOptions.push(

//             <li key = {option} className = {info == option ? 'active' : ''} onPointerOver = {() => showInfo(option)}>
                        
//             <input onPointerOver = {(e) =>{preventInputPropagation(e)}}  onClick = {(e) => addRemoveOption(e, props.options[option][0],option)}   type="checkbox" name = {option} id = {option} defaultChecked = {optionChecked}  />
//             <h5><label htmlFor={!isMobile ? option : '#'}> {option}</label></h5>
            
            
//        </li>

            
//         )

//     }

//     console.log('function called')
// }

// getOptionList();

    





    let optionsobject = {}
    let [optionsChecked, setOptionsChecked] = useState({});
    
   

    useEffect(() =>{
        
        let optionsobject = {}
        for(let prop in props.options){

        
            if(props.options[prop].length >= 2 && typeof(props.options[prop][1]) != 'object' ){
                optionsobject[prop] = props.options[prop][1];
                
            } else {
                
                optionsobject[prop] = false;
                
            }

            // Array.isArray(props.options[prop]) ?
            // optionsobject.push({[prop]:props.options[prop][1] }) :
            // optionsobject.push({[prop]:false })
                
        }

        


        setOptionsChecked(optionsobject);
        console.log('DONE')
       
    
        
    }, [])

  


    

    

    
    
    

    
    
   

    let cardsitePrice = 6300;
    let landingPrice = 7300;

    // let listItems = {
    //     first: 'first',
    //     second: 'second'
    // }

    // let loopeditems = [];

    // for(let item in listItems) {
    //     loopeditems.push(
    //         <li>{listItems[item]}</li>
    //     )
    // }
    
      

    
    


    // const checked = props.checkedOption.optionChecked;
    const checked = optionsChecked;
    
    // const setChecked = props.checkedOption.setOptionChecked;
    
    



    let websitePrice = 1000;
    let initialPrice ;

      
      
    
useEffect(() =>{

    console.log('OPTIONS CHEECKED',calcState);
},[calcState['yoptionsChecked']])
  
    
    
    


    function showInfo(option){
        
        setInfo(option);
        
    }

    function preventInputPropagation(e){
        e.stopPropagation();
    }
 
     
      function addRemoveOption  (e, price, optionName)  {

        
    
        setCalcState((prevState)=>({
            ...prevState,
            yoptionsChecked: {
            ...prevState.yoptionsChecked,
             [optionName]: !prevState['yoptionsChecked'][optionName]}

        }))

            
        if (price == undefined) return;
        
        let optionChecked = e.target.checked;
        let startPrice = calcState['ytotalPrice'];
        let endPrice; 
        let step = 20;

        
    
        optionChecked ?  
        endPrice = calcState['ytotalPrice'] + price :
         endPrice = calcState['ytotalPrice'] - price;

         console.log('TOTALI', endPrice, startPrice )

        
        function incrementPrice() {
            startPrice += step
        }

        function decrementPrice() {
            startPrice -=step
        }

        let count = optionChecked ? incrementPrice : decrementPrice; 

        //
        let priceCounter = setInterval(() => {


            setCalcState((prev)=>(optionChecked ? {
                ...prev, ytotalPrice: prev.ytotalPrice + step

            }  : 
            {
                ...prev, ytotalPrice: prev.ytotalPrice - step

            }
            ))

            count();

            if(startPrice == endPrice){

                clearInterval(priceCounter)
                startPrice = null;
                endPrice = null;
            
            }
        }, 10);

        
    }
    
    
    return(
        <div className = 'calculator'>
            <div className = 'calculator__inner'>
            <div className="calculator__left__inner">

                    <h3>
                    Test
                    </h3>

                <section>

                   
                
                <ul className = 'option__list'>

                    {calcState['ycalcOptions']}
                    

                    {/* <li className = {info == 'host_domain' ? 'active' : ''} onPointerOver = {() => showInfo('host_domain')}>
                        
                         <input onPointerOver = {(e) =>{preventInputPropagation(e)}}  onClick = {(e) => addRemoveOption(e, 500, 'Хост и домен')}   type="checkbox" name = 'Хост и домен' id = 'Хост и домен' defaultChecked = {optionsChecked['Хост и домен']}  />
                         <h5><label htmlFor={!isMobile ? "Хост и домен" : '#'}> Хостинг и домен</label></h5>
                         
                         
                    </li>

                    <li className = {info == 'search_index' ? 'active' : ''} onPointerOver = {() => showInfo('search_index')}>
                        
                        <input onPointerOver = {(e) =>{preventInputPropagation(e)}} onClick = {(e) => addRemoveOption(e,600,'Поисковая индексация')}  type="checkbox" name = 'Поисковая индексация' id = 'Поисковая индексация' defaultChecked = {optionsChecked['Поисковая индексация']}/>
                        
                            <h5><label htmlFor={!isMobile ? "Поисковая индексация" : '#'}>Индексация Yandex/Google</label></h5>
                            
                        
                    </li>

                    <li className = {info == 'ssl' ? 'active' : ''} onPointerOver = {() => showInfo('ssl')}>
                        
                        <input onPointerOver = {(e) =>{preventInputPropagation(e)}} onClick = {(e) => addRemoveOption(e,400, 'SSL сертификат')} type="checkbox" name = 'SSL сертификат' id = 'ssl' defaultChecked = {optionsChecked['SSL сертификат']}value = 'SSL сертификат'/> 
                        <h5><label htmlFor={!isMobile ? "ssl" : '#'}>SSL сертификат</label> </h5>
                        
                          
                        
                    </li>

                    <li className = {info == 'map' ? 'active' : ''} onPointerOver = {() => showInfo('map')}>
                        
                        <input onPointerOver = {(e) =>{preventInputPropagation(e)}}  onClick = {(e) => addRemoveOption(e,300, 'Яндекс карта')} type="checkbox" id = 'map' defaultChecked = {optionsChecked['Яндекс карта']} name = 'map' value = 'ssl'/> 
                        <h5><label htmlFor={!isMobile ? "map" : '#'}>Яндекс карта</label></h5>
                        
                    </li>

                    

                   

                    <li className = {info == 'open_graph' ? 'active' : ''} onPointerOver = {() => showInfo('open_graph')}>
                        
                        <input onPointerOver = {(e) =>{preventInputPropagation(e)}} onClick = {(e) => addRemoveOption(e,700, 'Open graph')} type="checkbox" id = 'open_graph' defaultChecked = {optionsChecked['Open graph']} name = 'open_graph' value = 'ssl'/> 
                        <h5><label htmlFor={!isMobile ? "open_graph" : '#'}>Open graph</label></h5>
                        
                        
                    </li> */}
                    

                </ul>
                   



                </section>

            </div>

            <div className="calculator__right__inner">
                <div className="info__window">
                    
                    
                    {calcState['yinformationContent'][info] || <div className = 'information__content'><p>No Information</p></div>}

                </div>

                


            </div>
            </div>
            <div className="price__and__order">
            {/* <h5>Итоговая цена:</h5> */}
                {optionsChecked && <div className = 'price'>  ≈ {calcState['ytotalPrice']}₽</div>}

                
                </div>

        </div>
    )
}

export default Calculator;