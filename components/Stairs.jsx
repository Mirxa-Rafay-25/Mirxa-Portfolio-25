import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial:{
      top: "0%"
  },
  animate:{
    top:"100%"
  },
  exit:{
    top: ["100%", "0%"]
  }
};

const reverseIndex = (index)=> {
  const totalSteps = 6; //number of steps
  return totalSteps - index -1;
}


const Stairs = () => {
   return (
    <>  
    {/* render 6 motion divs, each representing astep of the stairs. 
    Each div will have the xsame animation defined by the srairsAnimation object.
    the delay for each div is calculated sinamically based on its reversed index.
    creating staggered effect with decreasing delay for each subsequent step
    */}
    {[...Array(6)].map((_, index)=>{
        return (
      <motion.div 
      key={index}
       variants={stairAnimation}
        initial="initial"
         animate="animate"
          exit="exit"
           transition={{
        duration: 0.4,
        ease: 'easeInOut',
        delay: reverseIndex(index) * 0.1,
      }}
      className="h-full w-full bg-teal-600 relative"
       />
    );
    })}
  </>
   );
}
export default Stairs;