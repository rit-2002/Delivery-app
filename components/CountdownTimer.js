import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

const CountdownTimer = ({ cutoffHour }) => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const cutoff = new Date();
      cutoff.setHours(cutoffHour, 0, 0, 0);

      const difference = cutoff - now;
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeRemaining(`${hours}h ${minutes}m`);
      } else {
        setTimeRemaining('Cutoff passed');
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [cutoffHour]);

  return <Text style={styles.timer}>{timeRemaining}</Text>;
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },
});

export default CountdownTimer;
