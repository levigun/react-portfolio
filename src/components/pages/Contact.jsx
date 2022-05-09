import React from 'react'

const styles = {
  field: {
    backgroundColor: '#f4e9e8',
    height: '10%',
    fontSize: '30px',
    margin: '0 10px'
  },
  message: {
    height: '50%',
    backgroundColor: '#f4e9e8',
    fontSize: '30px',
    margin: '0 10px'
  },
  formContainer: {
    width: '60%',
    height: '60%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceAround',
    borderRadius: '15px',
    backgroundColor: '#ffc0cb',
    padding: '10px',
    border: 'solid #FFAFBD'
  },
  sendBtn: {
    fontSize: '150%',
    backgroundColor:' #DDFCFF',
    borderRadius: '15px',
    padding: '10px',
    border: 'solid black 0.5px',
  }
}

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='vh-100 align-items-center justify-content-center text-center d-flex flex-column'>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <input type="text" className="py-4" style={styles.field} placeholder="Your Name" />
        <input type="text" className="py-4" style={styles.field} placeholder="Your Email" />
        <input type="text" className="py-4" style={styles.field} placeholder="Phone" />
        <textarea placeholder="Message"  style={styles.message}></textarea>
        <button style={styles.sendBtn} className="mt-3" id="sendBtn" type="submit">Send</button>
      </form>
    </div>
     
  )
}
