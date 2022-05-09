import React from 'react'
import background from './images/background-img.webp'


const styles = {
  background: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}

export default function Home() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center text-center" style={styles.background}>
      <section>
        <article style={{fontSize: '700%'}}>I'm Levina.</article>
        <article style={{fontSize: '400%'}}>pastry chef turned learning developer</article>
      </section>
    </div>
  )
}
