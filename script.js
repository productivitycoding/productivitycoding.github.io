/**
 * def calcStuff1(var1, var2, var3, var4, f1, f2, f3, f4, score1, score2, score3, score4):
    if var4 == 0 and score4 == 0:
        f1 = round(scaleFactor(f1, 0.85), 16)
        f2 = round(scaleFactor(f2, 0.85), 16)
        f3 = round(scaleFactor(f3, 0.85), 16)
        print(f1, f2, f3)
    score = str(f1*(score1/var1) + f2*(score2/var2) + f3*(score3/var3))
    print("Your score is " + score)
    TEST IS: 
calcStuff1(1, 40, 50, 0, 0.1, 0.35, 0.4, 0.15, 1, 37, 46, 0) should equal about 93.1

 */
function calcStuff1(max1, max2, max3, max4, weight1, weight2, weight3, weight4, score1, score2, score3, score4) {
    weight1 /= 100;
    weight2 /= 100;
    weight3 /= 100;
    weight4 /= 100;
    let val = getzero(max1, max2, max3, max4, score1, score2, score3, score4);
    if (val == 0) {
        //calculate normally
        return Math.round(100 * (weight1 * (score1 / max1) + weight2 * (score2 / max2) + weight3 * (score3 / max3) + weight4 * (score4 / max4)));
    }
    let remain = 1;
    val.forEach(function (item, index) {
        if (item == 1) {
            remain -= weight1;
            max1 = 1;
            weight1 = 0;
        }
        if (item == 2) {
            remain -= weight2;
            max2 = 2;
            weight2 = 0;
        }
        if (item == 3) {
            remain -= weight3;
            max3 = 1;
            weight3 = 0;
        }
        if (item == 4) {
            remain -= weight4;
            max4 = 1;
            weight4 = 0;
        }
    });
    if (!val.includes(1)) {
        weight1 = roundto16digits(weight1 / remain);
    }
    if (!val.includes(2)) {
        weight2 = roundto16digits(weight2 / remain);
    }
    if (!val.includes(3)) {
        weight3 = roundto16digits(weight3 / remain);
    }
    if (!val.includes(4)) {
        weight1 = roundto16digits(weight4 / remain);
    }
    console.log(score1, max1, weight1);
    console.log(score2, max2, weight2);
    console.log(score3, max3, weight3);
    console.log(score4, max4, weight4);

    return Math.round(
        100 * (
            weight1 * ((score1 / max1) || 0)
            + weight2 * ((score2 / max2) || 0)
            + weight3 * ((score3 / max3) || 0)
            + weight4 * ((score4 / max4) || 0)
        )
    );
}
function roundtondigits(number, digits) {
    return Math.round((number + Number.EPSILON) * Math.pow(10, digits)) / Math.pow(10, digits);
}
function roundto16digits(number) {
    return roundtondigits(number, 16);
}
function haszero(max1, max2, max3, max4, score1, score2, score3, score4) {
    return ((max4 == 0 && score4 == 0) || (max1 == 0 && score1 == 0) || (max2 == 0 && score2 == 0) || (max3 == 0 && score3 == 0));
}
function getzero(max1, max2, max3, max4, score1, score2, score3, score4) {
    let returnlst = [];
    if (!haszero(max1, max2, max3, max4, score1, score2, score3, score4)) {
        return 0;
    }
    if (max4 == 0 && score4 == 0) {
        returnlst.push(4);
    } else if (max1 == 0 && score1 == 0) {
        returnlst.push(1);
    } else if (max2 == 0 && score2 == 0) {
        returnlst.push(2);
    } else if (max3 == 0 && score3 == 0) {
        returnlst.push(3);
    }
    return returnlst;
}
let lst = ["#firstareamax", "#secondareamax", "#thirdareamax", "#fourthareamax", "#firstareaweight", "#secondareaweight", "#thirdareaweight", "#fourthareaweight", "#firstareascore", "#secondareascore", "#thirdareascore", "#fourthareascore"]
function genChanges(e) {
    let newlst = [];
    lst.forEach(
        function (item, index) {
            let element = document.querySelector(item);
            newlst[index] = parseFloat(element.value) || 0;
        }
    )
    document.querySelector("#endScore").innerText = "Overall Grade: " + (calcStuff1(...newlst) || 0);
}

lst.forEach(
    function (item, index) {
        let element = document.querySelector(item);
        element.addEventListener("input", genChanges);
    }
)
