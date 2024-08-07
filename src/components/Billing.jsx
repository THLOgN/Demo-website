import {  bill } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[90%] h-[70%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Dự án <br className="sm:block hidden" /> Du lịch sinh thái nghỉ dưỡng
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Một số hình ảnh 
      </p>
      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default Billing;
