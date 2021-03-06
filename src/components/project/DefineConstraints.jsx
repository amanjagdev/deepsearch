import axios from 'axios';
import { useState, useEffect } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const DefineConstraints = ({ nextTab, tabStates, setTabState }) => {
  const [inputStates, setInputStates] = useState(
    Array(Object.keys(tabStates?.tabTwoState)?.length).fill(0)
  );

  useEffect(() => {
    let newStateToSet = {};
    Object.keys(tabStates?.tabTwoState).forEach((key) => {
      newStateToSet[key] = 0;
    });
    setTabState(newStateToSet);
  }, []);

  const formatTitle = (str) =>
    str
      .replaceAll('_', ' ')
      .toLowerCase()
      .split(' ')
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join(' ');

  const handleInputStateChange = (e, i) => {
    let newInputStates = inputStates;
    newInputStates[i] = e;
    setInputStates([...newInputStates]);

    let newStateToSet = {};
    Object.keys(tabStates?.tabTwoState).forEach((key, i) => {
      newStateToSet[key] = inputStates[i];
    });
    setTabState(newStateToSet);
  };

  const clickHandler = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/data/insert`, {
        table_name: 'artists',
        columns: tabStates.tabTwoState,
        weights: tabStates.tabThreeState,
      })
      .then((res) => {
        //lets see
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    nextTab();
  };

  console.log(tabStates.tabTwoState, 'tabstate two');

  return (
    <main className="DefineConstraints">
      <div className="heading">Define Constraints</div>
      <div className="description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique esse
        facilis cupiditate necessitatibus libero modi ab repudiandae, iure cum
        temporibus!
      </div>
      <div className="content">
        <div className="cards">
          {Object.keys(tabStates?.tabTwoState)
            ?.filter((key) => tabStates?.tabTwoState[key] !== 'string')
            .map((key, i) => (
              <div className="card shadow" key={key}>
                <div className="card-title">{formatTitle(key)}</div>
                <InputRange
                  maxValue={10}
                  minValue={0}
                  value={inputStates[i]}
                  onChange={(e) => handleInputStateChange(e, i)}
                />
              </div>
            ))}
        </div>
      </div>

      <button className="next accent" onClick={clickHandler}>
        Submit
      </button>
    </main>
  );
};

export default DefineConstraints;
