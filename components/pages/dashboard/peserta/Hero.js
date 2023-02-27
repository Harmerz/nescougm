import Profile from '../Profile'

export function Hero({ nama, email, status }) {
  return (
    <section>
      <Profile posisi="Leader" nama={nama} email={email} status={status} />
    </section>
  )
}

export default Hero
