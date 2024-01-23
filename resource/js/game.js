window.onload = ()=>{

    // when game start cursor will 
        document.getElementById('num-input').focus()

    // set Round when game start and continue
        document.getElementById('counter').innerHTML=  sessionStorage.getItem('Round')

    
    // set game level 
        let modeLevel = sessionStorage.getItem('modeLevel')
        let mode = document.getElementById('showModeText')
    
        if(modeLevel == 'easy'){
            mode.innerHTML = 'ง่าย'
            mode.style.color = "#50A3AB";
        }
        else if(modeLevel == 'normal'){
            mode.innerHTML = 'ปานกลาง'
            mode.style.color = "#F6723A";
            document.getElementById('showInputTitle').style.display = 'none'
            document.getElementById('showInput').style.display = 'none'
        }
        else if(modeLevel == 'hard'){
            mode.innerHTML = 'ยาก'
            mode.style.color = "#C43B39";
            document.getElementById('showInputTitle').style.display = 'none'
            document.getElementById('showInput').style.display = 'none'
            document.getElementById('showValue').style.display = 'none'
        }
    
    //set random number when start game and save number to 'num' for continue game
        if(sessionStorage.getItem("randomNum") == ''){
            sessionStorage.setItem("randomNum",Math.floor(Math.random() * 100))
        }
    
        const output = document.getElementById('showInput')
    
    // when click continue game will set number like before quite
        if(sessionStorage.getItem("inputNum")!='[]'){
            output.innerHTML = JSON.parse(sessionStorage.getItem("inputNum"))
        }
        document.getElementById('answer').innerHTML = sessionStorage.getItem('randomNum')
    
    }
    
    // check input number check win or lose
    const CheckWin = (ipNum, countNum) =>{
        // get popup element
        const resultBox = document.getElementById('result') 
        const textResult =document.getElementById('textResult')
        const overlay = document.getElementById('overlay')
    
        // if input number is correct pop will show and tell player win and round that player use
        if(ipNum == sessionStorage.getItem('randomNum')){
            overlay.style.display='block'
            resultBox.classList.toggle('active')
            textResult.innerHTML='คุณชนะ'
            textResult.style.color ='#50A3AB'
            document.getElementById('roundUse').innerHTML = 'รอบที่ใช้ '+ count
    
        // if input number is wrong pop will show and tell that player lose 
        }else if(countNum == 10 && ipNum != sessionStorage.getItem('randomNum')){
            overlay.style.display='block'
            resultBox.classList.toggle('active')
            textResult.innerHTML='คุณแพ้'
            textResult.style.color ='#C43B39'
        }
    }
    
    // check input number and compare with the answer
    const checkInputNumber =(ipNum)=>{
        const showText = document.getElementById('txt')
        const new_ipNum = parseInt(ipNum)
        const answer =  parseInt(sessionStorage.getItem('randomNum'))
    
    
        // if input number is more than answer will show 'the answer is less than (input number)'
        if(new_ipNum > answer){
             showText.innerHTML = 'มีค่าน้อยกว่า '+ ipNum
    
         // if input number is less than answer will show 'the answer is more than (input number)'
        }else if(new_ipNum < answer){
             showText.innerHTML = 'มีค่ามากกว่า '+ ipNum
        }
    }
    