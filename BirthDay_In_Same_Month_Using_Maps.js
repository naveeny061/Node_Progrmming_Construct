var birthMonth = new Map();
birthMonth.set(1, 0);
birthMonth.set(2, 0);
birthMonth.set(3, 0);
birthMonth.set(4, 0);
birthMonth.set(5, 0);
birthMonth.set(6, 0);
birthMonth.set(7, 0);
birthMonth.set(8, 0);
birthMonth.set(9, 0);
birthMonth.set(10, 0);
birthMonth.set(11, 0);
birthMonth.set(12, 0);
	for ( let loop2 = 0 ; loop2 < 50 ; loop2++ ) {
        	var month = Math.floor((Math.random() * 12 ) + 1 );
            	var value = birthMonth.get(month);
            	value++ ;
            	birthMonth.set( month , value );
        }
    	for ( let [ key, value ] of birthMonth ) {
        	console.log( "Month - " + key + " Total BirthDay = " + value );
    	}
