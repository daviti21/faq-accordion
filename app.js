const box = document.querySelectorAll('.question-box');
const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');
 
 
  

let ans1 = document.createElement('p');
ans1.textContent  = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
 

let ans2 = document.createElement('p');
ans2.textContent = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels. ";
 

let ans3 = document.createElement('p');
ans3.textContent = "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
 

let ans4 = document.createElement('p');
ans4.textContent = "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
 
 const answer1 =  box[0].appendChild(ans1);
  const answer2 = box[1].appendChild(ans2);
  const answer3 = box[2].appendChild(ans3);
  const answer4 = box[3].appendChild(ans4);

   const button1 = box[0].querySelector('.button');
   const button2 = box[1].querySelector('.button');
   const button3 = box[2].querySelector('.button');
   const button4 = box[3].querySelector('.button');

 

answer1.style.display = 'none';
answer2.style.display = 'none';
answer3.style.display = 'none';
answer4.style.display = 'none';

answer1.setAttribute('class', 'answer-text');
answer2.setAttribute('class', 'answer-text');
answer3.setAttribute('class', 'answer-text');
answer4.setAttribute('class', 'answer-text');
 
   button1.addEventListener('click', (e) => {

    if(e.target.classList.toggle('active')){
answer1.style.display = 'block';
button1.style.backgroundImage = 'url(icon-minus.svg)'
    }else{
        button1.style.backgroundImage = 'url(icon-plus.svg)'
        answer1.style.display = 'none';
    }
   });

   button2.addEventListener('click', (e) => {

    if(e.target.classList.toggle('active')){
answer2.style.display = 'block';
button2.style.backgroundImage = 'url(icon-minus.svg)'
    }else{
        button2.style.backgroundImage = 'url(icon-plus.svg)'
        answer2.style.display = 'none';
    }
   });

   button3.addEventListener('click', (e) => {

    if(e.target.classList.toggle('active')){
answer3.style.display = 'block';
button3.style.backgroundImage = 'url(icon-minus.svg)'
    }else{
        button3.style.backgroundImage = 'url(icon-plus.svg)'
        answer3.style.display = 'none';
    }
   });

   button4.addEventListener('click', (e) => {

    if(e.target.classList.toggle('active')){
answer4.style.display = 'block';
button4.style.backgroundImage = 'url(icon-minus.svg)'
style.container.paddingBottom = '1.5rem';
    }else{
        button4.style.backgroundImage = 'url(icon-plus.svg)'
        answer4.style.display = 'none';
    }
   })

 

   