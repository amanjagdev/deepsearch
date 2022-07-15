import Modal from 'react-modal';

import { JackInTheBox } from 'react-awesome-reveal';
import { RiCloseCircleLine } from 'react-icons/ri';

const ModalComp = ({ isShown, setIsShown }) => {
  const connectDB = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/parse/schema`, {
        connection_type: 'mongodb',
        connection_settings: {
          url: '',
          connection: '',
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
              <div className="modal__heading">Connection To MongoDB</div>
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
                <div className="sub-heading">Using MONGO URI</div>
                <div className="description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sunt, incidunt.
                </div>
                <div className="form-grp">
                  <label>Mongo URI</label>
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
