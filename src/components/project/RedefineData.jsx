import axios from 'axios';
import { useEffect, useState } from 'react';

const RedefineData = ({ nextTab }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getStatus = () => {
      axios
        .get(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/status`)
        .then((res) => {
          if (res.task_status !== 'SUCCESS') {
            setTimeout(getStatus, 10000);
          } else {
            const result = Object.keys(res.task_result).map((key) => {
              return {
                column: key,
                type: res.task_result[key],
                category: [
                  'Non Indexed',
                  'Text Search',
                  'Continuous',
                  'Categorical',
                ],
              };
            });
            console.log(result, 'result');
            setData(result);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getStatus();
  }, []);

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
                  <select name="category">
                    {category.map((item, index) => (
                      <option
                        value={item.trim().toLowerCase().replace(' ', '-')}
                        key={index}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
        </div>
        <button className="next accent" onClick={nextTab}>Next</button>
      </div>
    </main>
  );
};

export default RedefineData;
