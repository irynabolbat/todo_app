import { Todo } from '../types/Todo';
import { FilterType } from '../types/enum';

export function getPreperadTodos(
  todos: Todo[] | null,
  filterBy: string,
) {
  const visibleTodos = [...todos!];

  switch (filterBy) {
    case FilterType.All:
      return visibleTodos;

    case FilterType.Completed:
      return visibleTodos.filter(todo => todo.completed);

    case FilterType.Active:
      return visibleTodos.filter(todo => !todo.completed);

    default:
      return visibleTodos;
  }
}
