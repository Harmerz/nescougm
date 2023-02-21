import Profile from '../Profile'

export function Hero({ nama, email }) {
  return (
    <section>
      <Profile posisi="Leader" nama={nama} email={email} />
    </section>
  )
}

export default Hero
