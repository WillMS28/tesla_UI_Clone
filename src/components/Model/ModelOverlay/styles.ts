import styled from "styled-components";

import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 0;
  position: sticky;
  height: 100vh;

  margin-top: -100vh;
`