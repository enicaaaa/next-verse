import Hero from "@/components/features/hero/Hero"
import Ticker from "@/components/features/ticker/Ticker"
import { fetchLatestNextVersion } from "@/lib/server/github";

const Home = async () => {
  const version = await fetchLatestNextVersion();

  return (
    <section>
      <Hero stat={{ version, commits: '0' }}/>
      <Ticker />
    </section>
  )
}

export default Home