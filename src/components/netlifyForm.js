import React from 'react';
import styles from './netlifyForm.module.css';

const NetiflyForm = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Subsribe to my mailing list</h3>
      <form name="contact" method="POST" data-netlify="true" >
        <input type="text" name="name" placeholder="Your name" className={styles.input}/>
        <input type="email" name="email" placeholder="Your email" className={styles.input}/>
        <input type="submit" className="submit-button" value="Send" />
      </form>
      </div>
   );
}
 
export default NetiflyForm;