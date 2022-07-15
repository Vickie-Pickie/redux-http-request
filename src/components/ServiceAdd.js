import {useDispatch, useSelector} from "react-redux";
import {addService, cancelChangeServiceField, changeServiceField, updateService} from "../actions/actionCreators";

function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.name || !item.price) {
      return;
    }
    if (!item.id) {
      dispatch(addService(item.name, item.price));
    } else {
      dispatch(updateService(item.id, item.name, item.price));
    }
    dispatch(cancelChangeServiceField());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeServiceField(name, value));
  };

  const handleCancel = () => {
    dispatch(cancelChangeServiceField());
  };

  return (
    <form onSubmit={(handleSubmit)}>
      <input name="name" type="text" onChange={handleChange} value={item.name} />
      <input name="price" type="number" onChange={handleChange} value={item.price} />
      {
        !item.id
          ? <button type="submit">Добавить</button>
          : <>
              <button type="submit">Сохранить</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </>
      }
    </form>
  );

}

export default ServiceAdd;

