import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`} style={{ background: 'grey url(https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundBlendMode: 'multiply ', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center m-5'>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#8CE3A8]'>Jagganraj</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            This is Portfolio Website Using React JS
          </p>
        </div>
      </div>

      <div className='absolute bottom-32 w-full flex flex-col justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#8CE3A8] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#8CE3A8] mb-1'
            />
          </div>
        </a>
        <p className={`${styles.sectionSubText} `}>
            Scroll Down
          </p>
      </div>
    </section>
  );
};

export default Hero;
