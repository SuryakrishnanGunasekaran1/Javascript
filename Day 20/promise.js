//generate a random value

person =Math.floor(Math.random()*100)

const promise = new Promise(function(resolve,reject)
{
    if(person >= 18)
        {
            resolve();
        }
        else
        {
            reject();
        }
}
);
    promise.then(
        
    function()
    {
        console.log(`${person} eligible to get licence`)
    }

    ).catch(
        
    function()
    {
    console.log(`${person} not eligible to licence`)
    }
)
    
