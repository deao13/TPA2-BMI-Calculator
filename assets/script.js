function calculateBMI() {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;

  const bmi =  weight/((height/100)**2); 
  let bmiResult = ''

  if (bmi < 18.5) {
    bmiResult = "Your BMI is <b>"+bmi.toFixed(2)+"</b> which means You are <b>Underweight</b>";    
  } else if ((bmi >= 18.5) && (bmi <= 24.9)){
    bmiResult = "Your BMI is <b>"+bmi.toFixed(2)+"</b> which means You are <b>Normal</b>";   
  } else if((bmi > 25) && (bmi <= 29.9 )){
    bmiResult = "Your BMI is <b>"+bmi.toFixed(2)+"<b/> which means You are <b>Overweight</b>";
  }else{
    bmiResult = "Your BMI is <b>"+bmi.toFixed(2)+"</b> which means You are <b>Obesity</b>";
  }

  document.getElementById('result').innerHTML = bmiResult
}