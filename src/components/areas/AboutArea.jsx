import Heading from '../Heading';

const AboutArea = () => {
  return (
    <div className="AboutArea">
      <div className="container">
        <Heading text="About" />
        <div className="section">
          <div className="heading">About the project?</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            similique quasi quidem quisquam delectus animi doloremque placeat
            modi recusandae voluptatum, tempora nostrum impedit asperiores?
            Officia, nostrum ipsa, voluptatum natus culpa similique eos
            repudiandae voluptates maxime unde dolorum dolores. Pariatur
            repudiandae, recusandae iusto ipsam autem sint? Non maxime id alias
            aspernatur, ea beatae quae autem earum labore ut tenetur nemo eius
            consequuntur quod laborum ratione impedit, explicabo unde omnis
            facere! Voluptas!
          </p>
        </div>
        <div className="section">
          <div className="heading">Motive Behind it?</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            tempore blanditiis quidem praesentium impedit molestiae ab cumque,
            in vero necessitatibus. Quis delectus explicabo ex, accusamus vitae
            iusto voluptates ab et, ipsam eos veniam enim impedit
            necessitatibus, est quasi quo illo.
          </p>
        </div>
        <div className="section">
          <div className="heading">Made By</div>
          <a href="https://github.com/kg-kartik">Kartik Goel</a>
          <br />
          <a href="https://amanjag.dev">Aman Kumar Jagdev</a>
          <br />
          <a href="https://github.com/radioactive11">Arijit Roy</a>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
