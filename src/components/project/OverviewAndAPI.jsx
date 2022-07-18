import { IoCopyOutline } from 'react-icons/io5';

const OverviewAndAPI = () => {
  return (
    <main className="OverviewAndAPI">
      <div className="heading">Your API Overview {`&`} Routes</div>
      <div className="description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique esse
        facilis cupiditate necessitatibus libero modi ab repudiandae, iure cum
        temporibus!
      </div>
      <div className="content">
        <section>
          <div className="sub-heading">Your API URL</div>
          <div className="code">
            <pre className="code-text">
              https://greenbay.stepzen.net/api/orange-tarsier/__graphql
            </pre>
            <div className="icon">
              <IoCopyOutline size={18} />
            </div>
          </div>
        </section>
        <section>
          <div className="sub-heading">
            {/* /search/q={`{`}query{`}`} */}
            Example body
          </div>
          <div className="code">
            <pre className="code-text">
              {`
              curl https://greenbay.stepzen.net/api/orange-tarsier/__graphql \
              --header "Authorization: Apikey $(stepzen whoami --apikey)" \
              --header "Content-Type: application/json" \
              --data-raw '{
                "query": "query SampleQuery { __schema { queryType { name description } } }"
              }'
           
              `}
            </pre>
            <div className="icon">
              <IoCopyOutline size={18} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OverviewAndAPI;
