import axios from 'axios';
import { useEffect, useState } from 'react';

const RedefineData = ({ nextTab, tabStates, setTabState }) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

  console.log(tabStates, 'tab');

  useEffect(() => {
    const getStatus = () => {
      axios
        .post(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/parse/status`, {
          task_id: tabStates.tabOneState,
        })
        .then((res) => {
          console.log(res.data.task_result, 'status');
          if (res.data.task_status !== 'SUCCESS') {
            console.log('lol');
            setTimeout(getStatus, 10000);
          } else {
            console.log('in');
            const result = Object.keys(res.data.task_result).map((key) => {
              return {
                column: key,
                type: res.data.task_result[key],
                category: ['string', 'search', 'integer', 'category'],
              };
            });
            console.log(result, 'result');
            setData(result);
            let temp = Array(result.length).fill('search');
            setSelected(temp);

            let newStateToSet = {};
            for (let itr = 0; itr < temp.length; itr++) {
              newStateToSet[result[itr].column] = temp[itr];
            }
            setTabState(newStateToSet);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getStatus();
  }, []);

  const handleSelectedChange = (e, i) => {
    let temp = selected;
    temp[i] = e.target.value;
    setSelected([...temp]);

    let newStateToSet = {};
    for (let itr = 0; itr < temp.length; itr++) {
      newStateToSet[data[itr].column] = temp[itr];
    }
    setTabState(newStateToSet);
  };

  return (
    <main className="RedefineData">
      <div className="heading">Redefine Data for Project</div>
      <div className="description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique esse
        facilis cupiditate necessitatibus libero modi ab repudiandae, iure cum
        temporibus!
      </div>
      <div className="content">
        <div className="table shadow">
          <div className="row header-row">
            <div className="grid-item">
              <b>Column Name</b>
            </div>
            <div className="grid-item">
              <b>Data Type</b>
            </div>
            <div className="grid-item">
              <b>Categorization</b>
            </div>
          </div>
          {data &&
            data.map(({ category, column, type }, i) => (
              <div className="row" key={i}>
                <div className="grid-item">{column}</div>
                <div className="grid-item">{type}</div>
                <div className="grid-item">
                  <select
                    name="category"
                    value={selected[i]}
                    onChange={(e) => handleSelectedChange(e, i)}
                  >
                    {category.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
        </div>
        <button className="next accent" onClick={nextTab}>
          Next
        </button>
      </div>
    </main>
  );
};

export default RedefineData;
