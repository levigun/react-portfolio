import React from 'react'
import background from './images/background-img.webp'
import '../../App.scss'


const styles = {
  background: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '81vh'
  }
  
}

export default function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center text-center" style={styles.background}>
      <section>
        <article className="heading" style={{fontSize: '700%'}}>I'm Levina.</article>
        <article className="sub-heading" style={{fontSize: '400%'}}>pastry chef turned learning developer</article>
      </section>
    </div>
  )
}
