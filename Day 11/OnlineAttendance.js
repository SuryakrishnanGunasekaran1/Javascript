let cname = ["Adam","Steve","Clint","Reighly","Bruce","Tony"]
let cid = [1111,1112,1118,1114,1115,1116]
let len = cname.length
let date
let ename = "Tony"
let eid = 1118
let track=null 
function checkin()
{
for(let i = 0;i<cid.length;i++)
    for(let j=0;j<len;j++)
    {
        if(eid == cid[i])
            {
                if(ename == cname[j])
                    {
                        console.log("Granted")
                        track = "Checked in"
                        date =  new Date();
                    }
            }
    }

}  
checkin();

function checkout()
{
for(let i = 0;i<cid.length;i++)
    for(let j=0;j<len;j++)
    {
        if(eid == cid[i])
            {
                if(ename == cname[j])
                    {
                        console.log("Granted")
                        track = "Checked out"
                        date =  new Date();
                    }
            }
    }

}  

function storedetails()
{
    console.log("Employee Name : "+ ename)
    console.log("Employee id   : "+ eid)
    console.log("Dashboard     : "+track)
    console.log("Date          : "+ date)
}
storedetails();