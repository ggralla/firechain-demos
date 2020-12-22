import Reader from '../components/Reader.js';
import Writer from '../components/Writer.js';
import {fireCreate} from '../helpers/firechain.js'
export default function Home() {
  if (process.browser) {
    fireCreate();

  }
  return (
      <div>
          <div><Reader /></div>
          <div><Writer /></div>
      </div>
  )
}
