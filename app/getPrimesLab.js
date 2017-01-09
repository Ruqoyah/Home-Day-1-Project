'use strict'

module.exports = {
	getPrimes: function(n){
		var value = [], i, x, primes = [];
		for (i = 2; i <= n; ++i) {
			if (!value[i]) {
				primes.push(i);
            	for (x = i << 1; x <= max; x += i) {
                	value[x] = true;
            	}
      		}
    	}
    return primes;
	}

}