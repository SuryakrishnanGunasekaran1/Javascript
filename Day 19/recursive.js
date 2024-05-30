function recursive(n)
{
    for(i=n;i>0;i--)
        {
           if(n==1)
            {
                return n;
            }
            else
            { 
                return n * recursive(n-1)
            }
        }
}
console.log(recursive(5))

function rec2(x,n)
{
    if(n==1)
        return x
    else
        return x * rec2(x,n-1)
}
console.log(rec2(3,3))