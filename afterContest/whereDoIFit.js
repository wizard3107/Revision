
const position = (k,arr)=>{

    let  l =0 ;
    let h = arr.length-1;
    let  ans = -1;

    while(l<=h)
    {
        let mid = l+ Math.floor((h-l)/2);

        if(arr[mid]<k)
        {
            l=mid+1;
        }
        else if(arr[mid]>k)
        {
            ans =mid;
            h=mid-1;
        }
    }
 if(ans === 0)
 {
     console.log("Front", arr[ans])
 }
 else if(ans ===-1)
 {
     console.log(arr[arr.length-1],"Last")
 }
 else
    console.log(arr[ans-1],arr[ans])

}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n')
let t = +input[0]
let  l= 1;
for(let i =0;i<t;i++)
{
    let  k = +input[l++]
    let arr = input[l++].trim().split(" ").map(Number);
    position(k,arr);
}
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`3
3
1 4 5 6 8 9
5
1 2 6 7 8
1
2 3 4 5 6`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

// At your college's annual function you take part in a singing comedy competition.
// There are many participants, and they are standing backstage holding a piece of paper that has their participation number on it.
// You almost forgot about the competition and rushed backstage quickly to stand in the line.
//  Now you need to find where do you stand and who are participants in front and behind you in Log(n) time.
// 1 4
// 2 6
// Front 2

/*13 15
10 12
12 15
14 16
16 21
15 17
28 30
25 30
Front 2
15 17
28 30
11 15
17 20
27 Last


13 15
10 12
12 15
14 16
16 21
15 17
30 Last
30 Last
Front 2
15 17
30 Last
11 15
17 20
27 Last

*/