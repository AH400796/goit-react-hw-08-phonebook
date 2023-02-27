import {
  InputLabel,
  FilterInput,
  FilterWrapper,
  Quantity,
} from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/operations';

export default function Filter() {
  const { data } = useGetContactsQuery();
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterInputChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  const contactsQuantity = data ? data.length : 0;
  return (
    <FilterWrapper>
      <InputLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleFilterInputChange}
        />
      </InputLabel>
      <div>
        <span>Number of contacts:</span>
        <Quantity>{contactsQuantity}</Quantity>
      </div>
    </FilterWrapper>
  );
}
