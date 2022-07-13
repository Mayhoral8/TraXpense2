'use-strict'

const btn = document.querySelector('.btn1');
const container = document.querySelector('.container');
const expensesCon = document.querySelector('.container-exp');
let exp = document.querySelector('.exp')
const clear = document.querySelector('.delete')
const categoryBtn = document.querySelector('.category-title');
const categorySelect = document.querySelector('.category-select')
const newBtn = document.querySelector('.btn-add');

const modal = document.querySelector('.modal')
const loginBox = document.querySelector('.modal2');
const amountInp = document.querySelector('.amount-input');
const selectTitle = Array.from(document.querySelectorAll('.title'))
const selectImg = Array.from(document.querySelectorAll('.img-select'));
const transDate = document.querySelector('.date-value')
const submitBtn = document.querySelector('.submit');
const ttlPrice = document.querySelector('.ttlPrice')
const imgCategory = document.querySelector('.category-img')
const categoryTitle = document.querySelector('.category-title')
const transactionImg = document.querySelector('.transaction-img');

const loginBtn = document.querySelector('.loginBtn');
const userName = document.querySelector('.form-username');
const pin = document.querySelector('.form-password');
const mainWrapper = document.querySelector('.main-wrapper');
const titleHead = document.querySelector('.title-head');
const modal2 = document.querySelector('.modal2');
const overlay = document.querySelector('.overlay1');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelector('.btn--show-modal');
const username = document.querySelector('.form-username');
const password = document.querySelector('.form-password');
const loginBtn2 = document.querySelector('.loginBtn');
const profileImg = document.querySelector('.profileImg');
const topp = document.querySelector('.top')
const section2 = document.querySelector('.sect-2');
const doughnut = document.querySelector('#myChart');
const lineChart = document.querySelector('#lineChart')
const showDashboard = document.querySelector('.dashboard');
const transCon = document.querySelector('.trans-con')
const darkMdBtn = document.querySelector('.darkMode');
const lightModeBtn = document.querySelector('.lightMode');
const transLabel = document.querySelector('.trans-label')
const colorMode = document.querySelector('.colorMode')
const transPrice = document.querySelector('.trans-price')
const divider = document.querySelector('.divider')
const newTrans = document.querySelector('.newTrans')


let total = 0;
let totalHouse = 0;
let totalFood = 0;
let totalTransport = 0;
let totalMedical = 0;
let totalInsurance = 0;
let totalSavings = 0
let totalUtilities = 0;

let barChart = null;
let myChart = null;

let imgSrc = '';
let catgTitle = '';


const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const day = date.getDate


// ===============================================


const showLogin = function(){
loginBox.style.opacity = '0.9'
}
setTimeout(()=>showLogin(), 2000)
const acc1 = {
    owner: 'Mayowa Ayeni',
    movements: [
        200,
        400,
        1500,
        350,
        500, 
    ],
    categories: ['House', 'Food', 'Medical', 'Utilities', 'Savings'],
    img: ['house.png', 'food.png', 'health.jpeg', 'utilities.jpeg', 'savings.jpeg'],
    Weeks: [1000, 500, 700, 800],
    dates: [ '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',],
    pin: 1111
    
}


const openModal = function () {
    modal2.classList.remove('hidden');
    overlay.classList.remove('hidden');
    modal2.style.opacity = "0.9";
  };
  
  const closeModal = function () {
    modal2.classList.add('hidden');
    overlay.classList.add('hidden');
  };
//   btnsOpenModal.addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// --------------------------------------------------------

const updateUI = function(currAcc){
    
    titleHead.textContent = `Welcome Back, ${currAcc.owner.split(' ')[0]}`
    profileImg.style.opacity = '100';
    titleHead.style.opacity = '100';
    currAcc.movements.map((mov, i) => {
        transCon.style.opacity = '100';
        transLabel.style.opacity = '100';
        newTrans.style.opacity = '100';
        const expense = document.createElement('div')
        total = currAcc.movements.reduce((curr, acc) => curr += acc)
        ttlPrice.textContent = `$${Number(total)}`
        const deleteBtn = document.createElement('h4')
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'delete';

        console.log(deleteBtn)
        
        transCon.appendChild(expense)
       
        
        // console.log(catg)
    
       
        const newDate = new Date(currAcc.dates[i]);
            const options = {
                month: 'short',
                year: 'numeric',
                weekday: 'long',
                day: 'numeric'
            }
            const setDate = new Intl.DateTimeFormat('en-GB', options).format(newDate);
            
    
        expense.innerHTML = `<div class="transactions">
        <div class="trans-imgCat">
           <img src="${currAcc.img[i]}" alt="" class="transaction-img">
           </div>
           <div class="trans-cat">${currAcc.categories[i]}</div>
           <div class="trans-date">${setDate}</div>
           <div class="trans-price">$${ + mov}</div>
           <div class="trans-delete"></div>
           </div>`
           transCon.appendChild(expense)
           
           
    expense.classList.remove('hidden')
    
})

}


loginBtn.addEventListener('click', function(e){
e.preventDefault()

    
  acc1.username = acc1.owner.split(' ').map(mov => mov.replace(mov[0], mov[0].toLowerCase())).map(mov => mov[0]).join('');

//   ========================



const showMainWrapper = function(){
    topp.style.opacity = '0.9';
}
const showdoughnut = function(){
    doughnut.style.opacity = '100';
}
const showAddTr = function(){
   
    colorMode.style.opacity = '100'
}


// ==========================
if(userName.value === acc1.username && (+ pin.value) === acc1.pin){
    setTimeout(()=> showMainWrapper(), 2000)
     setTimeout(()=> showdoughnut(), 3000)
     setTimeout(()=> showAddTr(), 4000)
    modal2.classList.add('hidden');
    modal2.style.opacity = '0'
    overlay.classList.add('hidden');
    setTimeout(()=>    updateUI(acc1), 3000);

   newTrans.addEventListener('click', function(){
    section2.style.opacity = '100';
    section2.classList.remove('hidden')
    overlay.classList.remove('hidden');
   })
}   


const updateUI2 = function(img, catg){
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            const newDate = new Date(transDate.value);
            const options = {
                month: 'short',
                year: 'numeric',
                weekday: 'long',
                day: 'numeric'
            }
            const setDate = new Intl.DateTimeFormat('en-GB', options).format(newDate);
            
            const expense = document.createElement('div')
            total += Number(amountInp.value);
        
        const deleteBtn = document.createElement('img')
        deleteBtn.classList.add('delete');
        deleteBtn.src = 'delete.png'
        transCon.appendChild(expense);
        expense.innerHTML = `<div class="transactions">
        <div class="trans-imgCat">
           <img src="${img}" alt="" class="transaction-img">
           </div>
           <div class="trans-cat">${catg}</div>
           <div class="trans-date">${setDate}</div>
           <div class="trans-price">$${Number(amountInp.value)}</div>
           <div class="trans-delete"></div>
           </div>`
           transCon.appendChild(expense)
           expense.classList.add('hidden')
            
      console.log(transDate.value);
      console.log(img);
    

        
        if(catg === 'House'){
            totalHouse += Number(amountInp.value);
            updateChartValue(totalHouse, 0)
        }else if(catg === 'Food'){
            totalFood += Number(amountInp.value);
            updateChartValue(totalFood, 1)
        }
        else if( catg === 'Transit'){
            totalTransport += Number(amountInp.value);
            updateChartValue(totalTransport, 2)
        }else if(catg === 'Medical'){
            totalMedical += Number(amountInp.value);
            updateChartValue(totalMedical, 3)
        }
        else if(catg === 'Utilities'){
            totalUtilities += Number(amountInp.value);
            updateChartValue(totalUtilities, 4)
        }else if(catg === 'Savings'){
            totalSavings += Number(amountInp.value);
            updateChartValue(totalSavings, 5)
        }
      
           
      
        submitBtn.addEventListener('click', function(e){
            categorySelect.style.visibility = 'hidden';
            amountInp.value = '';
            categoryTitle.innerHTML = 'Category';
            imgCategory.src = ''
            imgCategory.src = `category.png`
            section2.classList.add('hidden')
            expense.classList.remove('hidden')
            ttlPrice.textContent = `$${Number(total)}`
            transDate.value = '';
            section2.style.opacity = '0';
            overlay.classList.add('hidden');
            myChart.update()
        })
        }
        const updateChartValue = (value, dataOrder)=>{
            myChart.data.datasets[0].data[dataOrder] += value;
          
        }
        categoryBtn.addEventListener('click', function (e){
            categorySelect.style.opacity = '200';
            categorySelect.style.visibility = 'visible';
           
           
           console.log('ok')
                selectImg.map(mov => {
                    const callBackLoop = function(e){
                        e.stopImmediatePropagation();
                        const category = e.target;
                    if(category.classList.contains('img-house')){
                            imgCategory.src = `house.png`
                            categoryTitle.innerHTML = `House`;
                           categorySelect.style.opacity = '0';
                            categorySelect.style.visibility = 'hidden';
                            // imgSrc = imgCategory.src;
                            catgTitle =  categoryTitle.innerHTML;
                            updateUI2(imgCategory.src, categoryTitle.innerHTML) 
                    } else if(category.classList.contains('img-transport')){
                        imgCategory.src = `transport.png`
                        categoryTitle.innerHTML = `Transit`;
                       categorySelect.style.opacity = '0';
                       categorySelect.style.visibility = 'hidden';
                       
                       updateUI2(imgCategory.src, categoryTitle.innerHTML)
                    } else if(category.classList.contains('img-food')){
                        imgCategory.src = `food.png`
                        categoryTitle.innerHTML = `Food`;
                       categorySelect.style.opacity = '0';
                       categorySelect.style.visibility = 'hidden';
                       updateUI2(imgCategory.src, categoryTitle.innerHTML)
                       
                    } else if(category.classList.contains('img-medical')){
                        imgCategory.src = `health.jpeg`
                        categoryTitle.innerHTML = `Medical`;
                       categorySelect.style.opacity = '0';
                       categorySelect.style.visibility = 'hidden';
                       
                       updateUI2(imgCategory.src, categoryTitle.innerHTML)
                       
                    } else if(category.classList.contains('img-utilities')){
                        imgCategory.src = `utilities.jpeg`
                        categoryTitle.innerHTML = `Utilities`;
                       categorySelect.style.opacity = '0';
                       categorySelect.style.visibility = 'hidden';
                       updateUI2(imgCategory.src, categoryTitle.innerHTML)
                       
                    } else if(category.classList.contains('img-savings')){
                        imgCategory.src = `savings.jpeg`
                        categoryTitle.innerHTML = `Savings`;
                       categorySelect.style.opacity = '0';
                       categorySelect.style.visibility = 'hidden';
                       updateUI2(imgCategory.src, categoryTitle.innerHTML)
                       
                    }
                    
                    
                }
                mov.addEventListener('click', callBackLoop);
            })
   
                
    })





   


const ctx2 = document.getElementById('lineChart').getContext('2d');
if(barChart != null){
    barChart.destroy();
}

 barChart = new Chart(ctx2,{
    type: 'line',
    data: {
        labels: ['Week1', 'Week2', 'Week3', 'Week4'],
        datasets: [
            {
                label: 'Last 30 Days',
                data: acc1.Weeks,
                backgroundColor: ['#87CEEB','#08B4FA', '#2586AD', '#fd39fdfd'],
                fontSize: 8,
                borerWidth: 0,
            }
        ]
    },
    legend:{
        position: 'right',
        labels: {
            fontSize: '8'
        }
    }
})

const ctx = document.getElementById('myChart').getContext('2d');
if(myChart != null){
    myChart.destroy();
}


 myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['House', 'Food', 'Transit', 'Medical', 'Utilities', 'Savings'],
        datasets: [
            {
                label: 'This Month',
                data: [50, 30, 20, 120, 50, 50],
                backgroundColor: ['orange','greenyellow', '#ffff00', '#fd39fdfd', 'skyblue', 'purple'],
                fontSize: 8,
                borerWidth: 0,
                cutout: '70%'
                
            }
        ]
    },
    options: {
        plugins: {
            legend:{
                position: 'right',
                labels: {
                    boxWidth: 5,
                    usePointStyle: true,
                    pointStyle: 'circle',
                }
            }
        }
    }
    
})
// myChart.data.datasets[0].data[dataOrder] += value;
const darkMode = function(){
    transLabel.style.color = 'black';
    transLabel.style.backgroundColor = '#1c659c';
    divider.style.backgroundColor = '#1c659c';
    showDashboard.style.color = 'black';
    topp.style.border = '1px solid #1c659c';
    document.querySelector('.trans-price').style.color = 'black';
    const transactions = Array.from(document.querySelectorAll('.transactions'));
    console.log(transactions)
    transCon.style.color = 'black';
    modal.style.backgroundColor = 'white'
    
    transactions.map(mov=>{
       mov.style.border = '1px solid skyblue'
    })
    mainWrapper.classList.add('filter')
    showDashboard.style.border = '2px solid #1c659c'
    showDashboard.style.backgroundColor = '#1c659c'
    transCon.style.backgroundColor = 'white';
    transCon.style.color = 'black';
    newTrans.style.color = 'black'
    newTrans.backgroundColor = '#1c659c'
    modal.style.backgroundColor = 'rgb(46, 45, 45)';
    section2.style.backgroundColor = '#1c659c';
    barChart.options.plugins.legend.labels.color = 'white';
    updateChartValue();
}
darkMdBtn.addEventListener('click', darkMode);


  const lightMode = function(){
    topp.style.backgroundColor = 'white';
    divider.style.backgroundColor = 'skyblue';
    topp.style.border = 'none';
    mainWrapper.style.border = 'none';
    showDashboard.style.backgroundColor = 'skyblue'
    showDashboard.style.color = 'white'
    showDashboard.style.border = 'none'
    transLabel.style.color = 'white';
    transCon.style.backgroundColor = 'white';
    modal.style.backgroundColor = 'skyblue';
    section2.style.backgroundColor = 'white';
    transLabel.style.backgroundColor = 'skyblue';
    barChart.options.plugins.legend.labels.color = 'white';
    newTrans.style.color = 'white'
    const transactions = Array.from(document.querySelectorAll('.transactions'));
    console.log(transactions)
    transactions.map(mov=>{
        mov.style.border = '1px solid rgba(133, 204, 233, 0.06)'
    })
    mainWrapper.classList.remove('filter')
    updateChartValue();
  }  
  lightModeBtn.addEventListener('click', lightMode);
})
