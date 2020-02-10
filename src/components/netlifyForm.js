import React from 'react';
import styles from './netlifyForm.module.css';

const NetiflyForm = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Stay In Touch</h3>
      <p>Subscribe to my mailing list to get more tips regarding to learning Gatsby</p>
      <form name="contact" method="POST" data-netlify="true" action="/success" className={styles.netForm}>
        <input type="text" name="name" placeholder="Your name" className={styles.input}/>
        <input type="email" name="email" placeholder="Your email" className={styles.input}/>
        <input type="submit" className="submit-button" value="Send" />
      </form>
      </div>
   );
}
 
export default NetiflyForm;