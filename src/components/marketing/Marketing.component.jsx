import "./Marketing.styles.scss";

const Marketing = () => {
  return (
    <div className="marketing">
      <div className="dc-container">
        <div className="col-1 basis-1/2">
          <div className="container">
            <div className="dc-heading">
              Say goodbye to long, tiresome documents
            </div>
            <div>
              Afforai seamlessly translates documents, files, spreadsheets &amp;
              websites, filtering out what you don&apos;t need &amp; answering
              your specific questions within seconds.
            </div>
            <div className="checklist">
              <div className="checks">
                <img src="https://afforai.com/img/icons/check-circle.svg" />
                <span>A whip smart research assistant</span>
              </div>
              <div className="checks">
                <img src="https://afforai.com/img/icons/check-circle.svg" />
                <span>We speak every language</span>
              </div>
              <div className="checks">
                <img src="https://afforai.com/img/icons/check-circle.svg" />
                <span>Reliable data citation for answers</span>
              </div>
              <div className="checks">
                <img src="https://afforai.com/img/icons/check-circle.svg" />
                <span>Fort-Knox level data security</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 basis-1/2">
          <img
            src="https://afforai.com/img/graphics/laptop-landing-4.png"
            alt="Afforai masters the documents you upload"
          />
        </div>
      </div>
      <div className="productivity-container">
        <div className="productivity-label">10x your productivity</div>
        <div className="productivity-heading">
          Save yourself from stress &amp; streamline your workflow
        </div>
        <div className="productivity-subtext">
          The average worker spends 9 hours per week looking through &amp;
          gathering information from thick stacks of documents. With Afforai,
          you can save yourself 8 hours per week (plus a lot of headaches).
        </div>

        <div>
          <div>
            <img
              src="https://afforai.com/img/graphics/laptop-landing-5.png"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
