import {Component} from 'react';
import './calculator.scss';

class ClassCalculator extends Component {

 

  constructor(props) {
    super(props);
    this.state = 
    {
      info: 'pusto',
      informationContent: {},
      totalPrice: 11,
      optionsChecked: {},
      calcOptions: []

    };  }

    // let inform = {};

    // for (let prop in props.options){

    //     if(props.options[prop].length >= 2 && typeof(props.options[prop][props.options[prop].length-1]) === 'object' ){
    //         inform[prop] = 
    //         <div className="information__content">
    //         {props.options[prop][props.options[prop].length-1]}
    //         </div>
    //     }
    // }

    // console.log('INFORMfunc',inform)

  componentDidMount() {

    

    let options = this.props.options;


    for (let prop in options){
      if(options[prop].length >= 2 && typeof(options[prop][options[prop].length-1]) == 'object'){

        this.setState(prevState => ({
          informationContent: {                   
              ...prevState.informationContent,    
              [prop]: <div className="information__content">
                       {options[prop][options[prop].length-1]}
                       </div>       
          }
      }))

      }

    }

    console.log('INSIDELIFE',this.state.informationContent)

    
}

componentDidUpdate(){
  console.log('UPDATED',this.state.informationContent);
}





    render()
    
    
    {

     console.log('INFORMCLASS', this.state.informationContent);
      return(


       <div>
         {this.state.informationContent['Яндекс карта']}
         {this.state.totalPrice}
         
         

       </div>

      );
    }
  }

  export default ClassCalculator;