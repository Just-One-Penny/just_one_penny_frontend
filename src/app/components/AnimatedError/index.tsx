/**
 *
 * Checkmark
 *
 */
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './animated.json';
import styled from 'styled-components/macro';

interface Props {}

export function AnimatedError(props: Props) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: { ...animationData },
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} isStopped={false} isPaused={false} />;
}
