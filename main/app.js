function distance(first, second){
	if(Array.isArray(first) && Array.isArray(second))
	{
		if(first.length!=0 && second.length!=0)
		{	
			var vect = [];
			
			for (var i = 0; i < first.length; i++) 
			{
    			vect[first[i]] = true;
    		}

    		for (var i = 0; i < second.length; i++) 
    		{
    			if (vect[second[i]])
        		{
            		delete vect[second[i]];
        		} 
        		else 
        		{
        			vect[second[i]] = true;
        		}
    		}
    	
			if((first.every(function(i){ return typeof i === "string" }) && second.every(function(i){ return typeof i !== "string" })) || (first.every(function(i){ return typeof i !== "string" }) && second.every(function(i){ return typeof i === "string" })))
			{
				return vect.length;
			}
			
			let vector1 = first.filter( (item) => !second.includes(item) );
    		
    		let vector2 = second.filter( (item)=> !first.includes(item)	);
		
			let vector3 = vector1.concat(vector2);

			let altvector = Array.from(new Set(vector3));

			return altvector.length;
		} 
		else 
		{
			return 0;
		}
	}
	else
	{
		throw new Error("InvalidType");
	}
}


module.exports.distance = distance