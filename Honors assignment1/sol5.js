function printTableOfThree() {
    let ans = '';
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += 3; 
        ans += `3*${i}=`;
        for (let j = 0; j < i; j++) {
            ans += '3';
            if (j < i - 1) {
                ans += '+';
            }
        }

        ans += `=${sum}\n`;
    }

    console.log(ans);
}
printTableOfThree();