import Modal from 'react-modal';

import { useState } from 'react';
import { JackInTheBox } from 'react-awesome-reveal';
import { RiCloseCircleLine } from 'react-icons/ri';

const ModalComp = ({ isShown, setIsShown }) => {
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [databse, setDatabase] = useState('');
  const [table, setTable] = useState('');

  const connectDB = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/parse/schema`, {
        connection_type: 'postgres',
        connection_settings: {
          host_name: host,
          port: port,
          user_name: username,
          password: password,
          db_name: databse,
          table: table,
        },
      })
      .then((res) => {
        console.log(res.task_id);
        //pass onto next step
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Modal
        isOpen={isShown}
        ariaHideApp={false}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <JackInTheBox triggerOnce>
          <div className="modal-container shadow">
            <div className="modal__header">
              <div className="modal__heading">Connection To PostgresQL</div>
              <div className="modal__close-icon">
                <RiCloseCircleLine
                  id="close-icon"
                  size="2em"
                  onClick={() => setIsShown(false)}
                />
              </div>
            </div>
            <div className="Modal main-content">
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing eli
              </div>

              <section>
                <div className="sub-heading">Connect to DB</div>
                <div className="description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sunt, incidunt.
                </div>
                <div className="form-grp">
                  <label>DB Connecton URL</label>
                  <input type="text" />
                </div>
              </section>

              <section>
                <div className="sub-heading">DB Credentials</div>
                <div className="description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sunt, incidunt.
                </div>
                <div className="grid-2">
                  <div className="form-grp">
                    <label>Hostname </label>
                    <input
                      type="text"
                      value={host}
                      onChange={(e) => {
                        setHost(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-grp">
                    <label>Port</label>
                    <input
                      type="text"
                      value={port}
                      onChange={(e) => {
                        setPort(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="form-grp">
                    <label>Username</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-grp">
                    <label>Password</label>
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-grp">
                    <label>Databse</label>
                    <input
                      type="text"
                      value={databse}
                      onChange={(e) => {
                        setDatabase(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-grp">
                    <label>Table</label>
                    <input
                      type="text"
                      value={table}
                      onChange={(e) => {
                        setTable(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </section>

              <button className="btn accent" onClick={connectDB}>
                Submit
              </button>
            </div>
          </div>
        </JackInTheBox>
      </Modal>
    </div>
  );
};

export default ModalComp;
