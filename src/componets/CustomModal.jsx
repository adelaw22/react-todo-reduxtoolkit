import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CustomModal = () => {
  return (
    <AnimatePresence>
      <motion.div>
        <motion.div></motion.div>
        <form>
          <h1></h1>
        </form>
      </motion.div>
    </AnimatePresence>
  )
}

export default CustomModal
