import React from 'react';
import styles from './netlifyForm.module.css';

const NetiflyForm = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Stay In Touch</h3>
      <p>Subscribe to my mailing list to get more tips about learning Gatsby</p>
      <form name="subscribe" method="POST" data-netlify="true" action="/success" className={styles.netForm}>
        <input type="hidden" name="form-name" value="subscribe" />
        <input type="text" name="name" placeholder="Your name" className={styles.input} required/>
        <input type="email" name="email" placeholder="Your email" className={styles.input} required/>
        <button type="submit" className="submit-button">Send</button>
      </form>
      </div>
   );
}
 
export default NetiflyForm;