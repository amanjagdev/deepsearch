import Modal from 'react-modal';

import { useState } from 'react';
import { JackInTheBox } from 'react-awesome-reveal';
import { RiCloseCircleLine } from 'react-icons/ri';
import axios from 'axios';

const ModalComp = ({ isShown, setIsShown, changeState, tabStates }) => {
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [databse, setDatabase] = useState('');
  const [table, setTable] = useState('');

  const [status, setStatus] = useState('Submit');

  const connectDB = () => {
    setStatus('Connecting...');
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
        setStatus('Completed');
        console.log(res.data, 'res');
        //pass onto next step
        changeState(res.data.task_id);
      })
      .catch((err) => {
        setStatus('Failed..');
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
              <section>
                <div className="sub-heading">Connect to DB</div>
                <div className="description"></div>
              </section>

              <section>
                <div className="description"></div>
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
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-grp">
                    <label>Database</label>
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
                {status}
              </button>
            </div>
          </div>
        </JackInTheBox>
      </Modal>
    </div>
  );
};

export default ModalComp;
