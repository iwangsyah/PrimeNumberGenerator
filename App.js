import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [primeList, setPrimeList] = useState([]);

  const isPrime = num => {
    for (var i = 2; i < Math.sqrt(num) + 1; ++i) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  };

  const getNextPrime = prime => {
    var sortedArray = prime.sort((a, b) => a - b);
    var last = sortedArray[sortedArray.length - 1];
    for (var count = last + 1; ; ++count) {
      if (isPrime(count)) {
        break;
      }
    }
    return count;
  };

  const onGenerate = async () => {
    let primeNext = 2;
    if (primeList.length) {
      primeNext = await getNextPrime(primeList);
    }
    setPrimeList(state => [...state, primeNext]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>IWANG Test</Text>
        <Text style={styles.name}>Wahyu Irwansyah</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.container}>
          <Text style={styles.prime}>Prime Number</Text>
          <View style={styles.valueContainer}>
            {primeList.map((item, index) => (
              <Text key={index} style={styles.value}>{`${item}${
                index === primeList.length - 1 ? '' : ', '
              }`}</Text>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={onGenerate}>
          <Text style={styles.txtButton}>Generate Prime Number</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>IWANG Technologies</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#6877F2',
    padding: 24,
    paddingTop: Platform.OS === 'ios' ? 54 : 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  name: {fontSize: 18, color: '#FFFFFF'},
  content: {flex: 1, padding: 45},
  prime: {fontSize: 18, fontWeight: 'bold'},
  valueContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  value: {fontSize: 18},
  button: {
    backgroundColor: '#6877F2',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 8,
  },
  txtButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  footer: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginTop: 40,
  },
});
