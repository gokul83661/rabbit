import {test, expect} from '@playwright/test';

test ('In API perform get operation', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect (response.status()).toBe(200);
})

// Not work 401 error show
test ('In API perform post operation', async ({request}) => {
    const response = await request.post('https://reqres.in/api/users', 
                        {
                            data: {                
                                      "name": "morpheus",
                                      "job": "leader"                                
                            },
                            headers:{
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                                "Authorization": "x-api-key: reqres-free-v1" 
                                
                            }

                        });
    var res = await response.json();
    console.log(res);
    expect(response.status()).toBe(201);
 
    let userid = res.id;
    
})
test.only ('In API perform put operation', async ({request}) => {
    const response = await request.put('https://reqres.in/api/users/2', 
                        {
                            data: {                
                                    
        "email": "janet.weaver@reqres.in",
        "first_name": "Mahesh",
        "last_name": "Weaver"                              
                            }
                        });
    var res = await response.json();
    console.log(res);
    expect(response.status()).toBe(200);
 
    
    
})
