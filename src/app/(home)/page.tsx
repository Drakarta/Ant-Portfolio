import type { Metadata } from 'next'
import Image from 'next/image'

import style from './page.module.scss'


export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh", alignItems: "center"}}>
      <div className={style.fancyname}>
        <div className={style.antname}>
          <div className={style.antemoji}><Image src="/ant_flat.svg" alt="Ant" width="52" height="52"/></div>
          <div className={style.anttext}>Ant</div>
        </div>
        <div className={style.honeyname}>
          <div className={style.honeyemoji}><Image src="/honey_pot_flat.svg" alt="Ant" width="52" height="52"/></div>
          <div className={style.hontext}>hon</div>
          <div className={style.etext}>e</div>
          <div className={style.ytext}>y</div>
        </div>
      </div>
    </div>
  )
}
