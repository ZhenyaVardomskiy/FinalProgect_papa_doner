import styles from './styles.module.scss'

function Videos() {
     return (
          <div>
               <div className={styles.videos}>
                    <div className={styles.slide}>
                         <video
                              src="https://franch.papadoner.by/video1.mp4"
                              preload="metadata"
                              controls="contrtols"
                         ></video>
                    </div>
                    <div className={styles.slide}>
                         <video
                              src="https://franch.papadoner.by/video2.mp4"
                              preload="metadata"
                              controls="contrtols"
                         ></video>
                    </div>
                    <div className={styles.slide}>
                         <video
                              src="https://franch.papadoner.by/video3.mp4"
                              preload="metadata"
                              controls="contrtols"
                         ></video>
                    </div>
                    <div className={styles.slide}>
                         <video
                              src="https://papadoner.by/resource/video/2021/08/ak.mp4"
                              preload="metadata"
                              controls="contrtols"
                         ></video>
                    </div>
               </div>
          </div>
     )
}

export default Videos
