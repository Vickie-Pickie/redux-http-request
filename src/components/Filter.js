import {useState} from "react";
import {useDispatch} from "react-redux";
import {setFilter} from "../actions/actionCreators";

function Filter() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleFilterFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilter(input));
  };

  const handleFilterChange = (value) => {
    setInput(value);
  };

  const handleClearFilter = () => {
    dispatch(setFilter(''));
    setInput('');
  };

  return (
    <form className="filter_form" onSubmit={handleFilterFormSubmit}>
      <input
        name="filter"
        type="text"
        placeholder="Фильтр по названию"
        onChange={(e) => handleFilterChange(e.target.value)}
        value={input}
      />
      <button type="submit">ОК</button>
      <button type="button" onClick={handleClearFilter}>Очистить</button>
    </form>
  )
}

export default Filter;
