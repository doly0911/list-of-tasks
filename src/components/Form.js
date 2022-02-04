import React from "react";

function Form(){
    return(
        <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Qué necesitas hacer hoy?
          </label>
        </h2>
        <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name='text'
        autoComplete='off'
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Agregar
        </button>        
      </form> 
    );
}

export default Form;