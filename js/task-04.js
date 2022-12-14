// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const ref = {
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

ref.buttonIncrement.addEventListener("click", onButtonIncrementClick);

function onButtonIncrementClick(event) {
  counterValue += 1;
  value.textContent = counterValue;
  console.log(event.currentTarget);
}

ref.buttonDecrement.addEventListener("click", onButtonDecrementClick);

function onButtonDecrementClick(event) {
  if (counterValue !== 0) {
    counterValue -= 1;
    value.textContent = counterValue;
    console.log(event.target);
  }
}
