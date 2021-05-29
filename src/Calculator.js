import React, { useState, useEffect } from 'react';
import './calculator.scss';



const isMobile = window.innerWidth <= 414 ? true : false;




function Calculator(props) {
    
    
    const [calcState, setCalcState] = useState({
        yinformationContent:{},
        info: 'Хост и домен',
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

        initialInfoConent = '';

        

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

            <li key = {option} className = {activeListItem() == option ? 'active' : ''} onPointerOver = {() => showInfo(option)}>
                        
            <input onPointerOver = {(e) =>{preventInputPropagation(e)}}  onClick = {(e) => addRemoveOption(e, props.options[option][0],option)}   type="checkbox" name = {option} id = {option} defaultChecked = {optionChecked}  />
            <h5><label htmlFor={!isMobile ? option : '#'}> {option}</label></h5>
            
            
       </li>

            
        )
        
    }


    setCalcState((prevState)=>({
        ...prevState, 
        ycalcOptions: calcOptions
    }))
       
    },[calcState['info']])

   
    
    
useEffect(() =>{
    console.log('OPTIONS CHEECKED',calcState);
},[calcState['yoptionsChecked']])
  
    
    
    
    function activeListItem(){
        return(
        calcState['info']
        )
    }

    function showInfo(option){
        
        setInfo(option);

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
                    
                   

                </ul>
                   



                </section>

            </div>

            <div className="calculator__right__inner">
                <div className="info__window">
                    
                    
                    {calcState['yinformationContent'][calcState['info']] || <div className = 'information__content'><p>No Information</p></div>}

                </div>

            
            </div>
            </div>
            <div className="price__and__order">
                {<div className = 'price'>  ≈ {calcState['ytotalPrice']}₽</div>}

                
                </div>

        </div>
    )
}

export default Calculator;