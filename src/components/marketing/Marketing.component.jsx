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
      <div className="why-choose">
        <>
          <div className="why-tab">Why choose us?</div>
          <div className="why-heading">Built for the user</div>
          <div className="why-subtext">
            Afforai is where exceptional customer focus meets exceptional
            technology.
          </div>
        </>
        <div className="reasons">
          <div className="row-1 grid-flow-col">
            <div className="column col-1 col-span-3">
              <div className="img-container">
                <img
                  src="https://afforai.com/img/graphics/laptop-landing-6.png"
                  alt="Afforai supports multiple languages"
                />
              </div>
              <div className="reason">
                <div className="rh-container">
                  <span className="reason-heading">
                    Cross Language Querying
                  </span>
                  <div className="new-tab">
                    <span>NEW</span>
                  </div>
                </div>
                <div>
                  Afforai is able to translate your documents to more than 100
                  languages, meaning wherever you're from, you can be assured we
                  can help.
                </div>
              </div>
            </div>
            <div className="column col-2 col-span-5">
              <div className="img-container">
                <img
                  src="https://afforai.com/img/graphics/laptop-landing-7.png"
                  alt="Afforai support multiple document formats"
                />
              </div>
              <div className="reason">
                <div className="rh-container">
                  <span className="reason-heading">
                    Multiple file types supported
                  </span>
                </div>
                <div>
                  Afforai can extract data from a multitude of formats,
                  including; PDF, URL, DOCX, PPTX & XLSX, as well as your own
                  text & links from Websites. The possibilities are limitless!
                </div>
              </div>
            </div>
          </div>
          <div className="row-2 grid-flow-col">
            <div className="col-1 col-span-5">
              <div className="column">
                <div className="img-container">
                  <img
                    src="https://afforai.com/img/graphics/laptop-landing-8.png"
                    alt="Afforai shows you how it got its answer"
                  />
                </div>
                <div className="reason">
                  <div className="rh-container">
                    <span className="reason-heading">
                      Valuable Data Citation
                    </span>
                    <div className="new-tab">
                      <span>NEW</span>
                    </div>
                  </div>
                  <div>
                    Afforai is able to show exactly where your data has been
                    extracted from & highlight it for you, so you never loose
                    your time validating information again.
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="img-container">
                  <img
                    src="https://afforai.com/img/graphics/laptop-landing-10.png"
                    alt="Built in Document Viewer"
                  />
                </div>
                <div className="reason">
                  <div className="rh-container">
                    <span className="reason-heading">
                      Built in Document Viewer
                    </span>
                  </div>
                  <div>
                    Never Switch tabs again. Afforai's document viewer means
                    that you can have your uploaded files right next to your
                    chatbot, giving you the ability to search the file, and
                    refer to it for data citations.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 col-span-3">
              <div className="column">
                <div className="img-container">
                  <img
                    src="https://afforai.com/img/graphics/laptop-landing-9.png"
                    alt="Afforai is secured with the power of the cloud"
                  />
                </div>
                <div className="reason">
                  <div className="rh-container">
                    <span className="reason-heading">Unbreakable Security</span>
                  </div>
                  <div>
                    Afforai uses Azure Server &amp; Azure OpenAI API. In other
                    words, your data is more than safe with us.{" "}
                    <a
                      href="https://afforai.com/security"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="versatile">
        <div className="col-1 w-[30%]">
          <div>
            <div className="versatile-tag">Most versatile</div>
          </div>

          <div className="versatile-heading">
            Create multiple chatbots for different purposes
          </div>
          <div className="subtext">
            Legal documents? Summarising a book? Extracting data from a website?
            We allow you to create multiple chatbots at one time, so you can use
            Afforai for a whole range of purposes.
          </div>

          <div className="hero-btns">
            <button className="btn-free">Get started</button>
            <button className="btn">View pricing</button>
          </div>
        </div>
        <div className="col-2 w-[45%]">
          <img
            src="https://afforai.com/img/graphics/laptop-landing-11.png"
            alt="Afforai masters the documents you upload"
          />
        </div>
      </div>
      <div className="integration">
        <div>
          <div className="integration-tab">
            Seamless Integrations - Coming Soon
          </div>
        </div>
        <div className="integration-heading">
          Upload Files directly from Google Drive, One Drive &amp; Dropbox
        </div>
        <div className="subtext">
          Afforai allows you to upload files directly from Google Drive, One
          Drive & Dropbox, meaning your experience will be smooth sailing
          regardless of your preferred
        </div>
        <img
          src="https://afforai.com/img/graphics/laptop-landing-15.png"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Marketing;
