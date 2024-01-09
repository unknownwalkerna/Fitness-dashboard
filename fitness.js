import React from 'react'

import FeatureCard from './feature-card'
import GalleryCard3 from './gallery-card3'
import Question from './question'
import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <header data-thq="thq-navbar" className={styles['navbar-interactive']}>
          <span className={styles['logo']}>FITNESS</span>
          <div data-thq="thq-navbar-nav" className={styles['desktop-menu']}>
            <nav className={styles['links']}>
              <span>Home</span>
              <span className={styles['nav2']}>Features</span>
              <span className={styles['nav3']}>Pricing</span>
              <span className={styles['nav4']}>Testimonials</span>
              <span className={styles['nav5']}>Contact</span>
            </nav>
            <div className={styles['buttons']}>
              <button
                className={` ${styles['login']} ${projectStyles['button']} `}
              >
                Login
              </button>
              <button
                className={` ${styles['register']} ${projectStyles['button']} `}
              >
                Register
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className={styles['burger-menu']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className={styles['mobile-menu']}>
            <div className={styles['nav']}>
              <div className={styles['top']}>
                <span className={styles['logo1']}>FITNESS</span>
                <div data-thq="thq-close-menu" className={styles['close-menu']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className={styles['links1']}>
                <span className={styles['nav11']}>Home</span>
                <span className={styles['nav21']}>Features</span>
                <span className={styles['nav31']}>Pricing</span>
                <span className={styles['nav41']}>Testimonials</span>
                <span className={styles['nav51']}>Contact</span>
              </nav>
              <div className={styles['buttons1']}>
                <button
                  className={` ${styles['login1']} ${projectStyles['button']} `}
                >
                  Login
                </button>
                <button
                  className={` ${styles['register1']} ${projectStyles['button']} `}
                >
                  Register
                </button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className={styles['icon04']}
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className={styles['icon06']}
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className={styles['icon08']}
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className={styles['hero']}>
        <div className={styles['hero1']}>
          <div className={styles['container01']}>
            <h1
              className={` ${styles['hero-heading']} ${projectStyles['heading1']} `}
            >
              Achieve Your Fitness Goals
            </h1>
            <span className={styles['hero-sub-heading']}>
              Track your progress and stay motivated
            </span>
            <div className={styles['btn-group']}>
              <button
                className={` ${styles['hero-button1']} ${projectStyles['button']} `}
              >
                Get Started
              </button>
              <button
                className={` ${styles['hero-button2']} ${projectStyles['button']} `}
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['details']}>
        <div className={styles['details1']}>
          <div className={styles['container02']}>
            <span
              className={` ${styles['text']} ${projectStyles['section-title']} `}
            >
              <span>Details</span>
              <br></br>
            </span>
            <h2
              className={` ${styles['details-heading']} ${projectStyles['heading2']} `}
            >
              Take Control of Your Fitness Journey
            </h2>
            <span className={styles['details-sub-heading']}>
              With our fitness dashboard, you can easily track your workouts,
              set goals, analyze your progress, and stay accountable. Whether
              you&apos;re a beginner or an experienced athlete, our platform
              provides the tools and insights you need to achieve your fitness
              goals.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className={styles['details-image']}
          />
        </div>
      </div>
      <div className={styles['features']}>
        <div className={styles['features-container']}>
          <div className={styles['features1']}>
            <div className={styles['container03']}>
              <span
                className={` ${styles['text03']} ${projectStyles['section-title']} `}
              >
                <span>features</span>
                <br></br>
              </span>
              <h2
                className={` ${styles['features-heading']} ${projectStyles['heading2']} `}
              >
                Unlock Your Fitness Potential
              </h2>
              <span className={styles['features-sub-heading']}>
                Experience the power of our fitness dashboard to transform your
                health and achieve your goals.
              </span>
            </div>
            <div className={styles['container04']}>
              <FeatureCard
                Heading="Real-time Data Tracking"
                SubHeading="Track your fitness progress in real-time with accurate data."
              ></FeatureCard>
              <FeatureCard
                Heading="Personalized Workouts"
                SubHeading="Get customized workout plans tailored to your fitness goals and preferences."
              ></FeatureCard>
              <FeatureCard
                Heading="Goal Setting and Tracking"
                SubHeading="Set fitness goals and easily track your progress towards achieving them."
              ></FeatureCard>
              <FeatureCard
                Heading="Activity and Sleep Monitoring"
                SubHeading="Monitor your daily activities and sleep patterns to optimize your overall health."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['pricing']}>
        <div className={styles['pricing1']}>
          <div className={styles['container05']}>
            <span
              className={` ${styles['text06']} ${projectStyles['section-title']} `}
            >
              <span>Pricing</span>
              <br></br>
            </span>
            <h2
              className={` ${styles['pricing-heading']} ${projectStyles['heading2']} `}
            >
              Choose the perfect plan for your fitness journey
            </h2>
            <span className={styles['pricing-sub-heading']}>
              Upgrade your fitness experience with our flexible pricing options
            </span>
          </div>
          <div className={styles['container06']}>
            <div className={styles['pricing-card']}>
              <div className={styles['container07']}>
                <span
                  className={` ${styles['text09']} ${projectStyles['heading3']} `}
                >
                  Free
                </span>
                <span className={styles['free-plan-description']}>
                  Get started with our free plan
                </span>
              </div>
              <div className={styles['container08']}>
                <span className={styles['text10']}>
                  <span>$</span>
                  <span></span>
                </span>
                <span className={styles['free-plan-price']}>0</span>
              </div>
              <div className={styles['container09']}>
                <div className={styles['container10']}>
                  <span className={styles['text13']}>✔</span>
                  <span className={styles['free-plan-features']}>
                    Access to basic fitness tracking features
                  </span>
                </div>
                <div className={styles['container11']}>
                  <span className={styles['text14']}>✔</span>
                  <span className={styles['free-plan-features1']}>
                    Limited access to workout plans and exercises
                  </span>
                </div>
                <div className={styles['container12']}>
                  <span className={styles['text15']}>✔</span>
                  <span className={styles['free-plan-features2']}>
                    Track your progress and set goals
                  </span>
                </div>
                <div className={styles['container13']}>
                  <span className={styles['text16']}>✔</span>
                  <span className={styles['free-plan-features3']}>
                    Community support
                  </span>
                </div>
              </div>
              <button
                className={` ${styles['button']} ${projectStyles['button']} `}
              >
                Continue with Free
              </button>
            </div>
            <div className={styles['pricing-card1']}>
              <div className={styles['container14']}>
                <span
                  className={` ${styles['text17']} ${projectStyles['heading3']} `}
                >
                  BASIC
                </span>
                <span className={styles['basic-plan-description']}>
                  Upgrade to our basic plan for more features
                </span>
              </div>
              <div className={styles['container15']}>
                <span className={styles['text18']}>
                  <span>$</span>
                  <span></span>
                </span>
                <span className={styles['basic-plan-pricing']}>7</span>
                <span className={styles['text21']}>/ month</span>
              </div>
              <div className={styles['container16']}>
                <div className={styles['container17']}>
                  <span className={styles['text22']}>✔</span>
                  <span className={styles['text23']}>
                    All features of FREE plan
                  </span>
                </div>
                <div className={styles['container18']}>
                  <span className={styles['text24']}>✔</span>
                  <span className={styles['basic-plan-features']}>
                    Full access to all fitness tracking features
                  </span>
                </div>
                <div className={styles['container19']}>
                  <span className={styles['text25']}>✔</span>
                  <span className={styles['basic-plan-features1']}>
                    Access to a wide range of workout plans and exercises
                  </span>
                </div>
                <div className={styles['container20']}>
                  <span className={styles['text26']}>✔</span>
                  <span className={styles['basic-plan-features2']}>
                    Personalized recommendations and goal tracking
                  </span>
                </div>
                <div className={styles['container21']}>
                  <span className={styles['text27']}>✔</span>
                  <span className={styles['basic-plan-features3']}>
                    Advanced analytics and insights
                  </span>
                </div>
              </div>
              <button
                className={` ${styles['button1']} ${projectStyles['button']} `}
              >
                Try the Basic plan
              </button>
            </div>
            <div className={styles['pricing-card2']}>
              <div className={styles['container22']}>
                <span
                  className={` ${styles['text28']} ${projectStyles['heading3']} `}
                >
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className={styles['pro-plan-description']}>
                  Unlock the ultimate fitness experience with our pro plan
                </span>
              </div>
              <div className={styles['container23']}>
                <span className={styles['text31']}>
                  <span>$</span>
                  <span></span>
                </span>
                <span className={styles['pro-plan-pricing']}>20</span>
                <span className={styles['text34']}>/ month</span>
              </div>
              <div className={styles['container24']}>
                <div className={styles['container25']}>
                  <span className={styles['text35']}>✔</span>
                  <span className={styles['text36']}>
                     All features of BASIC plan
                  </span>
                </div>
                <div className={styles['container26']}>
                  <span className={styles['text37']}>✔</span>
                  <span className={styles['pro-plan-features']}>
                    All features from the basic plan
                  </span>
                </div>
                <div className={styles['container27']}>
                  <span className={styles['text38']}>✔</span>
                  <span className={styles['pro-plan-features1']}>
                    Access to premium workout plans and exercises
                  </span>
                </div>
                <div className={styles['container28']}>
                  <span className={styles['text39']}>✔</span>
                  <span className={styles['pro-plan-features2']}>
                    One-on-one coaching and personalized support
                  </span>
                </div>
              </div>
              <button
                className={` ${styles['button2']} ${projectStyles['button']} `}
              >
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['gallery']}>
        <div className={styles['gallery1']}>
          <h1
            className={` ${styles['gallery-heading']} ${projectStyles['heading2']} `}
          >
            Fitness Dashboard Gallery
          </h1>
          <span className={styles['gallery-sub-heading']}>
            Explore our fitness dashboard through these images
          </span>
          <div className={styles['container29']}>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1514512364185-4c2b0985be01?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1512005286309-e5b890ca36b6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1586401100295-7a8096fd231a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1535743686920-55e4145369b9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1522898467493-49726bf28798?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1520877745935-616158eb7fcc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1550345332-09e3ac987658?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1578882113036-761708189373?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDc5NjQxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className={styles['banner']}>
        <div className={styles['banner1']}>
          <h1
            className={` ${styles['banner-heading']} ${projectStyles['heading2']} `}
          >
            Fitness Dashboard - Your Personal Fitness Companion
          </h1>
          <span className={styles['banner-sub-heading']}>
            Monitor your workouts, nutrition, and overall health in one place
          </span>
          <button
            className={` ${styles['banner-button']} ${projectStyles['button']} `}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className={styles['faq']}>
        <div className={styles['faq-container']}>
          <div className={styles['faq1']}>
            <div className={styles['container30']}>
              <span
                className={` ${styles['text40']} ${projectStyles['section-title']} `}
              >
                <span>FAQ</span>
                <br></br>
              </span>
              <h2
                className={` ${styles['text43']} ${projectStyles['heading2']} `}
              >
                Common questions
              </h2>
              <span className={styles['text44']}>
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className={styles['container31']}>
              <Question
                Answer="A fitness dashboard is a digital tool that allows users to track and monitor their fitness progress. It provides visual representations of data such as steps taken, calories burned, and workout duration."
                Question="What is a fitness dashboard?"
              ></Question>
              <Question
                Answer="A fitness dashboard can help you stay motivated and accountable by providing real-time feedback on your fitness activities. It allows you to set goals, track your progress, and make informed decisions about your health and wellness."
                Question="How can a fitness dashboard help me?"
              ></Question>
              <Question
                Answer="Common features of a fitness dashboard include activity tracking, goal setting, workout logging, nutrition tracking, social sharing, and data analysis."
                Question="What features are typically included in a fitness dashboard?"
              ></Question>
              <Question
                Answer="Yes, most fitness dashboards support integration with popular fitness devices such as fitness trackers, smartwatches, and heart rate monitors. This allows for automatic syncing of data and a more comprehensive view of your fitness journey."
                Question="Can I connect my fitness devices to the dashboard?"
              ></Question>
              <Question
                Answer="Fitness dashboards prioritize the security and privacy of user data. They employ encryption techniques and adhere to strict privacy policies to ensure that your personal information is protected."
                Question="Is my personal information secure on a fitness dashboard?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['footer']}>
        <footer className={styles['footer1']}>
          <div className={styles['container32']}>
            <span className={styles['logo2']}>FITNESS</span>
            <nav className={styles['nav1']} className={styles['nav1']}>
              <span className={styles['nav12']}>Home</span>
              <span className={styles['nav22']}>Features</span>
              <span className={styles['nav32']}>Pricing</span>
              <span className={styles['nav42']}>Testimonials</span>
              <span className={styles['nav52']}>Contact</span>
            </nav>
          </div>
          <div className={styles['separator']}></div>
          <div className={styles['container33']}>
            <span className={styles['text61']}>
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className={styles['icon-group1']}>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className={styles['icon10']}
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className={styles['icon12']}
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className={styles['icon14']}
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
