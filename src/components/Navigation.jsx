import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { motion } from "framer-motion";

const Navigation = ({ page, setPage, setGroup }) => {
  return (
    <div className="relative z-10">
      <div className="fixed bottom-5 right-5 flex items-center gap-x-2 text-2xl bg-[#EB5E28] rounded-full px-2 ">
        <motion.span
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.3 }}
          onClick={() => page != 1 && setPage((page) => page - 1)}
          className="cursor-pointer"
        >
          <IoMdArrowDropleftCircle />
        </motion.span>
        <p className="text-xl select-none">{page}</p>
        <motion.span
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.3 }}
          onClick={() => setPage((page) => page + 1)}
          className="cursor-pointer"
        >
          <IoMdArrowDroprightCircle />
        </motion.span>
      </div>
      <select
        defaultValue={"Popular"}
        onChange={(e) => {
          setGroup(e.target.value);
          setPage(1);
        }}
        className="focus:outline-none fixed top-5 left-5 bg-[#EB5E28] hover:bg-white uppercase text-sm tracking-wide rounded-md p-1 cursor-pointer"
      >
        <option value="TopRated">Top Rated</option>
        <option value="Popular">Popular</option>
        <option value="UpComing">Upcoming</option>
        <option value="Discover">Discover</option>
      </select>
    </div>
  );
};

export default Navigation;
