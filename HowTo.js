//App Key: bb3e9854968a100d5e22c509c71b9b04
//App ID: 192d2aa8


"https://api.flightstats.com/flex/airports/rest/v1/json/iata/SFO?appId=192d2aa8&appKey=bb3e9854968a100d5e22c509c71b9b04"

get 

	var req = new XMLHttpRequest();
					req.open('GET', 'https://api.flightstats.com/flex/schedules/rest/v1/json/from/'+city+'/'+'departing/'+year+'/'+month+'/'+day+'/'+time+'?'+'appId='+appID+'&appKey='+apiKey+'&codeType=IATA', true); 			
					
					req.addEventListener('load',function(){
      					if(req.status >= 200 && req.status < 400){
       				 		var response = JSON.parse(req.responseText);
       							 document.getElementById('theResults').textContent = response;
     				} else {
      					  console.log("Error in network request: " + req.statusText);
      				}});
					
					req.send();
				    event.preventDefault();