import './styles/FormSearch.css'
import { useRef, useState } from "react";

const FormSearch = ({ setLocationSelect }) => {
  const inputSearch = useRef();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationSelect(inputSearch.current.value.trim());
    setSearchValue("");
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
      className='form__input'
        ref={inputSearch}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="¡Digita un id de dimension!"
      />
      <button className='form__btn'>Search</button>
    </form>
  );
};
export default FormSearch;
