import {useDispatch, useSelector} from "react-redux";
import {removeService, setFormFields} from "../actions/actionCreators";

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEdit = ({ id, name, price }) => {
    dispatch(setFormFields(id, name, price));
  };

  let filteredList = items;
  if (filterValue) {
    filteredList = items.filter(item => item.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
  }

  return (
    <ul>
      {
        filteredList.length > 0
        ? filteredList.map(item =>  {
          return (
            <li key={item.id}>
              <div className="item">
                <div className="item_name">{item.name}</div>
                <div className="item_price">{item.price}</div>
                </div>
              <span className="material-icons edit" onClick={() => handleEdit(item)}>edit</span>
              <span className="material-icons clear" onClick={() => handleRemove(item.id)}>clear</span>
            </li>
          )})
        : 'Ничего не найдено'
        }
    </ul>
  );
}

export default ServiceList;
