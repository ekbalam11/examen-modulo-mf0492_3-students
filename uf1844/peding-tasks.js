//Escribe una función que recibe un conjunto de tareas y devuelve únicamente aquellas que siguen pendientes (propiedad completed está marcada como false)

//BONUS: No utilices el operador de comparación "==" o "===" para realizar el ejercicio
function filterPendingTaks(tasks) {
  return tasks.filter(task => !task.completed)
}

const tasks = [
  { task: "Wash the dishes", completed: true },
  { task: "Exercise", completed: false },
  { task: "Study programming", completed: false },
  { task: "Clean the house", completed: true },
];

const result = filterPendingTaks(tasks);
console.log(result);
/**
 * // Pending tasks
  { task: "Exercise", completed: false },
  { task: "Study programming", completed: false }
 */
