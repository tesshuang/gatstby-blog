import React from 'react';
import styles from './netlifyForm.module.css';

const NetiflyForm = () => {
  return (
    <div className={styles.form}>
      <h3>Subsribe to my mailing list</h3>
      <form name="contact" method="POST" data-netlify="true" >
        <input type="text" name="name" placeholder="Your name" className={styles.input}/>
        <input type="email" name="email" placeholder="Your email" className={styles.input}/>
        <p>
          <button type="submit">Send</button>
        </p>
        </form>
      </div>
   );
}
 
export default NetiflyForm;