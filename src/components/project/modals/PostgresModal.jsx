import Modal from 'react-modal';

import { JackInTheBox } from 'react-awesome-reveal';
import { RiCloseCircleLine } from 'react-icons/ri';

const ModalComp = ({ isShown, setIsShown }) => {
  const connectDB = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/parse/schema`, {
        connection_type: 'postgres',
        connection_settings: {
          host_name: 'kuch bhi',
          port: 'kuch bhi',
          user_name: 'kuch bhi',
          password: 'kuch bhi',
          db_name: 'kuch bhi',
          table: 'kuch bhi',
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                maiores non esse voluptatum ipsam, corrupti sit perferendis
                eligendi! Ipsam, inventore.
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
                <div className="form-grp">
                  <label>Username</label>
                  <input type="text" />
                </div>
                <div className="form-grp">
                  <label>Password</label>
                  <input type="text" />
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
