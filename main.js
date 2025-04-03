// FIRST DAY
    /*let day;
        switch(new Date().getDay()){
        case 0:
            day = "Sunday";
        break;
        case 1:
            day = "Monday";
        break;
        case 2:
            day = "Tuesday";
        break;
        case 3:
            day = "Wednesday";
        break;
        case 4:
            day = "Thursday";
        break;
        case 5:
            day = "Friday";
        break;
        case 6:
            day = "Saturday";
        break;
    }
        

    document.getElementById("demo").innerHTML = "Today is " + day;

        let date = document.getElementById("date");

        const d = new Date().getHours();

        document.write(d);

        const a = new Date().getMinutes();

        document.write  (a);

        const t = new Date().getSeconds();

        document.write(t);

        let hours = document.getElementById("hours");
        let minutes = document.getElementById("minutes");
        let seconds = document.getElementById("seconds");

    setInterval(()=>{
        let currentTime = new Date();

        hours.innerHTML = currentTime.getHours();
        minutes.innerHTML = currentTime.getMinutes();
        seconds.innerHTML = currentTime.getSeconds();
    }, 2000)

    let currentTime = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 3 for Wednesday

    if (currentTime === 3) {
    console.log('You are right!');
    } else {
    console.log('You are wrong! It\'s Wednesday.');
    }

    // SECOND DAY
    /*const cars = ["BMW", "Volvo", "Subaru"];

    let text = "";
    for(let car in cars){
        text += car + "<br>";
    }

    documet.getElementById("demo").innerHTML = text;

    let button = document.getElementById("change");

    button.addEventListener('click', clickMe);

    function clickMe(){
       let text = document.getElementById("demo")
       text.innerHTML = text.innerHTML.replace("Hello", "XD");
    }

    let button = document.getElementById("change");

    button.addEventListener('click', changeImage);

    function changeImage(){
       let image = document.getElementById("images")
       image.src = 'images/image(1).jpg';
    }

    try{
       wwaalert("Welcome Guest");
    }catch(error){
      document.getElementById("demo").innerHTML = "Error";
}

    const cars = ["VOVLO", "MERCEDES", "RONDALOOO"];

    let text = "";

    for(let car of cars){
        text += car + "<br>";
    }

    document.getElementById("demo").innerHTML = text;

    const person = {
        firstName : "Sylejman",
        lastName : "Durguti",
        age : "15",
        fullName : function(){
            return this.firstName + ' ' + this.lastName;
        }
    };

    document.getElementById("demo").innerHTML = person.fullName();

    let arrow = document.getElementById("change");

    arrow.addEventListener('click', changeImage);

    function changeImage(){
       let image = document.getElementById("images");
       if(image.src.includes("image(1).jpg")){
        image.src = "images/image.png";
       } else {
        image.src = "images/image(1).jpg";
       }
    }

    

    
        setInterval(()=>{
            let image = document.getElementById("images")
            if(image.src.includes("image(1).jpg") && image.src.includes("images/image.png")){
              image.src = "image/image.png";
            }else{
            image.src = "images/image(1).jpg"
            }
        }, 1000);

    let currentTime = new Date();

    currentTime = new Date().getMinutes();

    console.log(currentTime);*/