import * as React from 'react';
import styles from './App.module.scss';
import {Link} from "react-router-dom";


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.welcomeContainer}>
        <section>
            <span>
                          <h3>SpaceX Project</h3>
            </span>
        </section>
          <section>
                  <em>A JTDev Production</em>
          </section>
          <section>
                  <span>
                    <strong>
                          <Link to={'/home'}>
                      ENTER
                  </Link>
                    </strong>
                  </span>
          </section>
      </div>
    </div>
  )
}

export default App
