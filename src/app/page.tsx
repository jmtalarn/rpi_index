import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTvRetro,
  faPopcorn,
  faPhotoVideo,
  faSatelliteDish,
  faCloudDownloadAlt,
} from '@fortawesome/pro-duotone-svg-icons';
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="http://raspberrypi.local:32400/web"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Plex <span>-&gt;</span>
          </h2>
          <FontAwesomeIcon size="3x" color="orange" icon={faPopcorn} />
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="http://raspberrypi.local:9981/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            TV Headend <span>-&gt;</span>
          </h2>
          <FontAwesomeIcon size="3x" color="paleTurquoise" icon={faTvRetro} />
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>
        <a
          href="http://raspberrypi.local:8112/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Delunge <span>-&gt;</span>
          </h2>
          <FontAwesomeIcon size="3x" color="steelBlue" icon={faCloudDownloadAlt} />
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>
        <a
          href="http://raspberrypi.local/livetv/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            IP TV files <span>-&gt;</span>
          </h2>
          <FontAwesomeIcon size="3x" color="springGreen" icon={faSatelliteDish} />
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>
      </div>
    </main>
  )
}
