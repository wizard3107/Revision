const minimum = (n, arr, l, h) => {
    let mid
    while (l <= h) {
        mid = l + Math.floor((h - l) / 2)
        //console.log("mid,arr[mid]", mid, arr[mid])
        if (arr[mid] > arr[h]) {
            l = mid + 1
        }
        else if (arr[mid] < arr[h]) {
            h = mid
        }
        else
            h--;
    }
        return mid;
}
checkSorted=(arr,l,h)=>{
    
    for (let i = l+1; i <= h; i++) {
       // console.log(arr[i],arr[i-1])
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let n = input[0].trim()
    let arr = input[1].trim().split(" ").map(Number);
    let min =  minimum(n,arr,0,n);
   // console.log(min)
    if(checkSorted(arr,0,min-1)&&checkSorted(arr,min,n-1))
    {
        console.log("YES")
    }
    else
        console.log("NO");
    
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`10
5 6 7 9 10 11 20 21 2 3`);
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