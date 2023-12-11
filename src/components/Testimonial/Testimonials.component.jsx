import { useEffect } from "react";
import "./Testimonials.styles.scss";

const Testimonial = () => {
  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    const scrollers = document.querySelectorAll(".infinite-scroll-outer-loop");
    scrollers.forEach((scroller) => {
      const scrollerInner = scroller.querySelector(".line");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicateItem = item.cloneNode(true);
        duplicateItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicateItem);
      });

      console.log(scrollerContent);
    });
  };

  return (
    <div className="testimonials">
      <a href="https://www.producthunt.com/products/afforai/" target="_blank">
        <img
          src="https://afforai.com/img/graphics/ph-review.webp"
          alt="Product Hunt Review 4.9/5"
          width="170px"
        />
      </a>
      <div className="testimonial-heading">See what our users say</div>
      <div className="subtext">Loved by thousands, all around the World</div>

      <div className="row row-1">
        <div className="infinite-scroll-outer-loop">
          <div className="infinite-scroll-inner-loop">
            <div className="inline-block">
              <div className="line">
                <div className="testimonial">
                  <div className="testimonial-container">
                    <div className="testimonial-content">
                      Afforai has so many different applications and yet doesn't
                      feel overwhelming. It's streamlined and feels fun to use,
                      and the developers clearly put time into making it simple
                      to use. Definitely worth my investment!
                    </div>
                    <div className="name-container">
                      <div className="name">
                        <img
                          src="https://afforai.com/img/testimonials/1-0.png"
                          alt="Daniel Crook, Content"
                        />
                        <div>Daniel Crook, Content</div>
                      </div>
                      <a
                        href="https://www.producthunt.com/products/afforai/"
                        target="_blank"
                        className=""
                      >
                        <div className="ph-button">
                          <img
                            src="https://afforai.com/img/icons/producthunt.svg"
                            alt="Product Hunt logo"
                            height="16"
                          />
                          <span>View on Product Hunt</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div className="testimonial-container">
                    <div className="testimonial-content">
                      This is amazing. We were thinking a solution like this
                      would work wonders in the FAQ/Customer service section for
                      our website. A tool like this that can comprehensively go
                      through information for the most accurate answers is a
                      gem!
                    </div>
                    <div className="name-container">
                      <div className="name">
                        <img
                          src="https://afforai.com/img/testimonials/1-2.png"
                          alt="Daniel Crook, Content"
                        />
                        <div>Balamurali, Web 3 Growth Marketer</div>
                      </div>
                      <a
                        href="https://www.producthunt.com/products/afforai/"
                        target="_blank"
                        className=""
                      >
                        <div className="ph-button">
                          <img
                            src="https://afforai.com/img/icons/producthunt.svg"
                            alt="Product Hunt logo"
                            height="16"
                          />
                          <span>View on Product Hunt</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div className="testimonial-container">
                    <div className="testimonial-content">
                      This looks very useful, especially if you need to derive
                      insight from unstructured or poorly labeled data.
                    </div>
                    <div className="name-container">
                      <div className="name">
                        <img
                          src="https://afforai.com/img/testimonials/1-3.png"
                          alt="Daniel Crook, Content"
                        />
                        <div>Siovash Zarrasvand, Engineer</div>
                      </div>
                      <a
                        href="https://www.producthunt.com/products/afforai/"
                        target="_blank"
                        className=""
                      >
                        <div className="ph-button">
                          <img
                            src="https://afforai.com/img/icons/producthunt.svg"
                            alt="Product Hunt logo"
                            height="16"
                          />
                          <span>View on Product Hunt</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div className="testimonial-container">
                    <div className="testimonial-content">
                      Well done on the launch 🚀 . I am convinced you will have
                      many signs up today because your tool is beneficial. I
                      love the UI. The framework between Afforai Build and
                      Afforai Ask is compelling. I am in a hurry now to train my
                      new assistant 😁
                    </div>
                    <div className="name-container">
                      <div className="name">
                        <img
                          src="https://afforai.com/img/testimonials/1-1.png"
                          alt="Daniel Crook, Content"
                        />
                        <div>Axel Borry, Growth Hacker</div>
                      </div>
                      <a
                        href="https://www.producthunt.com/products/afforai/"
                        target="_blank"
                        className=""
                      >
                        <div className="ph-button">
                          <img
                            src="https://afforai.com/img/icons/producthunt.svg"
                            alt="Product Hunt logo"
                            height="16"
                          />
                          <span>View on Product Hunt</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="infinite-scroll-outer-loop">
          <div className="infinite-scroll-inner-loop">
            <div className="inline-block">
              <div className="line">
                <div className="testimonial">
                  <div className="testimonial-container">
                    <div className="testimonial-content">
                      Afforai has so many different applications and yet doesn't
                      feel overwhelming. It's streamlined and feels fun to use,
                      and the developers clearly put time into making it simple
                      to use. Definitely worth my investment!
                    </div>
                    <div className="name-container">
                      <div className="name">
                        <img
                          src="https://afforai.com/img/testimonials/1-0.png"
                          alt="Daniel Crook, Content"
                        />
                        <div>Daniel Crook, Content</div>
                      </div>
                      <a
                        href="https://www.producthunt.com/products/afforai/"
                        target="_blank"
                        className=""
                      >
                        <div className="ph-button">
                          <img
                            src="https://afforai.com/img/icons/producthunt.svg"
                            alt="Product Hunt logo"
                            height="16"
                          />
                          <span>View on Product Hunt</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div className="testimonial-container">
                    <div className="testimonial-content">
                      This is amazing. We were thinking a solution like this
                      would work wonders in the FAQ/Customer service section for
                      our website. A tool like this that can comprehensively go
                      through information for the most accurate answers is a
                      gem!
                    </div>
                    <div className="name-container">
                      <div className="name">
                        <img
                          src="https://afforai.com/img/testimonials/1-2.png"
                          alt="Daniel Crook, Content"
                        />
                        <div>Balamurali, Web 3 Growth Marketer</div>
                      </div>
                      <a
                        href="https://www.producthunt.com/products/afforai/"
                        target="_blank"
                        className=""
                      >
                        <div className="ph-button">
                          <img
                            src="https://afforai.com/img/icons/producthunt.svg"
                            alt="Product Hunt logo"
                            height="16"
                          />
                          <span>View on Product Hunt</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div className="testimonial-container">
                    <div className="testimonial-content">
                      This looks very useful, especially if you need to derive
                      insight from unstructured or poorly labeled data.
                    </div>
                    <div className="name-container">
                      <div className="name">
                        <img
                          src="https://afforai.com/img/testimonials/1-3.png"
                          alt="Daniel Crook, Content"
                        />
                        <div>Siovash Zarrasvand, Engineer</div>
                      </div>
                      <a
                        href="https://www.producthunt.com/products/afforai/"
                        target="_blank"
                        className=""
                      >
                        <div className="ph-button">
                          <img
                            src="https://afforai.com/img/icons/producthunt.svg"
                            alt="Product Hunt logo"
                            height="16"
                          />
                          <span>View on Product Hunt</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div className="testimonial-container">
                    <div className="testimonial-content">
                      Well done on the launch 🚀 . I am convinced you will have
                      many signs up today because your tool is beneficial. I
                      love the UI. The framework between Afforai Build and
                      Afforai Ask is compelling. I am in a hurry now to train my
                      new assistant 😁
                    </div>
                    <div className="name-container">
                      <div className="name">
                        <img
                          src="https://afforai.com/img/testimonials/1-1.png"
                          alt="Daniel Crook, Content"
                        />
                        <div>Axel Borry, Growth Hacker</div>
                      </div>
                      <a
                        href="https://www.producthunt.com/products/afforai/"
                        target="_blank"
                        className=""
                      >
                        <div className="ph-button">
                          <img
                            src="https://afforai.com/img/icons/producthunt.svg"
                            alt="Product Hunt logo"
                            height="16"
                          />
                          <span>View on Product Hunt</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
