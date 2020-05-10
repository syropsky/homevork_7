'use strict';

let startButton = document.querySelector("#start"),

    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],
        
    expenses_1 = document.querySelector("#expenses_1"),
    expenses_2 = document.querySelector("#expenses_2"),
    expenses_3 = document.querySelector("#expenses_3"),
    expenses_4 = document.querySelector("#expenses_4"),

    btn1 = document.getElementsByTagName('button')[0],
    btn2 = document.getElementsByTagName('button')[1],
    btn3 = document.getElementsByTagName('button')[2],
    
    optionalexpensesItem1 = document.querySelectorAll('.optionalexpenses-item')[0],
    optionalexpensesItem2 = document.querySelectorAll('.optionalexpenses-item')[1],
    optionalexpensesItem3 = document.querySelectorAll('.optionalexpenses-item')[2],
    
    income = document.querySelector("#income"),
    savings = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    yearValue = document.querySelectorAll(".year-value")[0],
    monthValue = document.querySelector(".month-value")[0],
    dayValue = document.querySelector(".day-value")[0];






    optionalexpensesItem3.textContent = "START";





/* let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");

menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);                                   


document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон


title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст

adv.remove();                                                   // Удалить рекламу со страницы

let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptforApple.textContent = yourOpinion; */