import React, { useState, useEffect } from 'react';
import './calculator.scss';



const isMobile = window.innerWidth <= 414 ? true : false;




function Calculator(props) {
    
    
    const [calcState, setCalcState] = useState({
        informationContent:{},
        info: 'Хост и домен',
        calcOptions: [],
        optionsChecked: {},
        initialPrice: 0,
        totalPrice: 0


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
        informationContent: informationContent
    }))



    // Set initial price

    let fullprice = props.initialPrice ? props.initialPrice : null;
    for(let prop in props.options){
    
    if( props.options[prop].length >= 2 && typeof(props.options[prop][1]) != 'object' && props.options[prop][1] ){

        fullprice += props.options[prop][0];

    } 
}

     setCalcState((prevState)=>({...prevState, totalPrice: fullprice}));

     

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
        optionsChecked: optionsobject
    }))

        

        

        setCalcState((prevState)=>({
            ...prevState, 
            info: [Object.keys(props.options)[0]]
        }))
        
    },[])


    useEffect(() =>{

        let calcOptions = [];

    for( let option in props.options){

    

        let optionChecked = props.options[option].length >= 2 && typeof(props.options[option][1]) != 'object'  ? props.options[option][1] : false;

        
      
        calcOptions.push(

            <li key = {option} className = {calcState['info'] == option ? 'active' : ''} onPointerOver = {() => showInfo(option)}>
                        
            <input onPointerOver = {(e) =>{preventInputPropagation(e)}}  onClick = {(e) => addRemoveOption(e, props.options[option][0],option)}   type="checkbox" name = {option} id = {option} defaultChecked = {optionChecked}  />
            <h5><label htmlFor={!isMobile ? option : '#'}> {option}</label></h5>
            
            
       </li>

            
        )
        
    }


    setCalcState((prevState)=>({
        ...prevState, 
        calcOptions: calcOptions
    }))
       
    },[calcState['info']])

   
    
    
useEffect(() =>{
    console.log('OPTIONS CHEECKED',calcState);
},[calcState['optionsChecked']])
  
    
    

    function showInfo(option){
        
        

        setCalcState((prevState)=>({
            ...prevState,

            info: option
            
        }))
        
    }

    function preventInputPropagation(e){
        e.stopPropagation();
    }
 
     
      function addRemoveOption  (e, price, optionName)  {

        
    
        setCalcState((prevState)=>({
            ...prevState,
            optionsChecked: {
            ...prevState.optionsChecked,
             [optionName]: !prevState['optionsChecked'][optionName]}

        }))

            
        if (price == undefined) return;
        
        let optionChecked = e.target.checked;
        let startPrice = calcState['totalPrice'];
        let endPrice; 
        let step = 20;

        
    
        optionChecked ?  
        endPrice = calcState['totalPrice'] + price :
         endPrice = calcState['totalPrice'] - price;


        
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
                ...prev, totalPrice: prev.totalPrice + step

            }  : 
            {
                ...prev, totalPrice: prev.totalPrice - step

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

                    {calcState['calcOptions']}
                    
                   

                </ul>
                   



                </section>

            </div>

            <div className="calculator__right__inner">
                <div className="info__window">
                    
                    
                    {calcState['informationContent'][calcState['info']] || <div className = 'information__content'><p>No Information</p></div>}

                </div>

            
            </div>
            </div>
            <div className="price__and__order">
                {<div className = 'price'>  ≈ {calcState['totalPrice']}₽</div>}

                
                </div>

        </div>
    )
}

export default Calculator;