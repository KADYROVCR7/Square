// Размер квадрата (сторона)
const size = 10;

// Функция для создания квадрата с тремя точками в каждой строке
function createSquare(size) {
  let square = '';
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      square += '.'; // Точки в основной части квадрата
    }
    for (let k = 0; k < 3; k++) {
      square += '.'; // Добавляем три дополнительные точки в каждой строке
    }
    square += '\n'; // Переход на новую строку после каждой строки квадрата
  }
  return square;
}

// Выводим квадрат в консоль
console.log(createSquare(size));
