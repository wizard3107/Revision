const encryption  = (arr,n,l,h)=>{
    
    if(l>h)
    {
        return "";
    }
    else
    {
        let mid = l+Math.floor((h-l)/2);
        //console.log(arr[mid])
        return arr[mid]+encryption(arr,n,l,mid-1)+encryption(arr,n,mid+1,h);
    }
}
function runProgram(input) {
  // Write code here
input=input.trim().split('\n')
let t = +input[0].trim();
let  l = 1 ;
 for(let i = 0; i<t;i++)
 {
     let  n = +input[l++].trim()
     let arr = input[l++].trim().split("");
    console.log(encryption(arr,n,0,n-1));
 }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`3
3
abc
4
abcd
11
abcdefghijk`);
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

/*Mr Robot - Elliot Ended
Description

Mr.Robot needs an encryption method, so Elliott was there to help him. At the same time, Richard wrote a paper on encryption. Elliott then started writing his algorithms with the help of paper from Richard but he needs your help in implementing. The algorithm is like this:

Given an input string, the encrypted string will start with the middle character of the string and will be formed henceforth with the middle characters of the left and right substrings (of the middle character of the word) and so on. Take a look at the explanation of the sample test case for better understanding.


Input
Input Format :

The first line contains an integer T denoting the number of TEST CASES. Each TEST CASE consists of 2 lines. The first line contains an integer N denoting the length of the word that needs to be encrypted. The second line contains the word that needs to be encrypted.

Constraints :

1 <= T <= 10

1 <= Length of the string <= 10000


Output
N lines where each line will contain the encrypted words 
bac
bacd
fcabdeighjk
*/