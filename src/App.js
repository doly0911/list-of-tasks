
function App() {
  return (
    <div >
      <h1>Aprendiendo React :)</h1>

      <form>
        <h2>
          <label> Qué necesitas hacer hoy?</label>
        </h2>
        <input
        type="text"
        id="new-todo-input"
        name='text'
        autoComplete='off'
        />
        <button type="submit">
          Agregar
        </button>        
      </form> 

      <div>
        <button type="button">
          <span>Show</span>
          <span> all</span>
          <span> tasks</span>
        </button>
        <button>
          <span>Show</span>
          <span> Active</span>
          <span> tasks</span>
        </button>
        <button>
          <span>Show</span>
          <span> Completed</span>
          <span> tasks</span>
        </button>
      </div>

      <h2>
        3 tasks remaining
      </h2>

      <ul>
        <li>
          <div>
          <input/>
          <label>
            Eat
          </label>        
          </div>
          <div>
            <button>
              Edit <span> Eat</span>
            </button>
            <button>
              Delete <span> Eat</span>
            </button>
          </div>
        </li>

        <li>
          <div>
          <input/>
          <label>
            Sleep
          </label>        
          </div>
          <div>
            <button>
              Edit <span> Sleep</span>
            </button>
            <button>
              Delete <span> Sleep</span>
            </button>
          </div>
        </li>

        <li>
          <div>
          <input/>
          <label>
          Repeat
          </label>        
          </div>
          <div>
            <button>
              Edit <span> Repeat</span>
            </button>
            <button>
              Delete <span> Repeat</span>
            </button>
          </div>
        </li>
      </ul>

    </div>
  );
}

export default App;
